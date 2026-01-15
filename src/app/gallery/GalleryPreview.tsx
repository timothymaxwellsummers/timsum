'use client';

import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { type PointerEvent as ReactPointerEvent, useEffect, useMemo, useRef, useState } from 'react';
import NextLink from 'next/link';
import { Box, Container, Flex, IconButton, Text, Button } from '@radix-ui/themes';

type GalleryApiResponse = { images: string[] };

const VISIBLE_COUNT = 3;
const GAP_PX = 16;
const LOOP_BUFFER = VISIBLE_COUNT; // clone buffer on each side for seamless looping

function shuffle<T>(arr: T[]) {
  // Fisher–Yates; returns a new array
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getRealIndex(loopIndex: number, buffer: number, n: number) {
  if (n <= 0) return 0;
  const real = loopIndex - buffer;
  return ((real % n) + n) % n;
}

export function GalleryPreview() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [viewportWidth, setViewportWidth] = useState(0);

  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const indexRef = useRef(0); // left-most visible slide (loop index)
  const stepPxRef = useRef(0);
  const currentTranslateXRef = useRef(0);

  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartTranslateXRef = useRef(0);
  const activePointerIdRef = useRef<number | null>(null);
  const prefersReducedMotionRef = useRef(false);

  // Keep drag/gesture in mind: this structure (viewport + translating track)
  // is intentionally compatible with pointer-dragging and/or GSAP later.

  useEffect(() => {
    if (!viewportRef.current) return;

    const el = viewportRef.current;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect?.width ?? 0;
      setViewportWidth(w);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    prefersReducedMotionRef.current = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setIsLoading(true);
      try {
        const res = await fetch('/api/gallery');
        const data = (await res.json()) as GalleryApiResponse;
        if (!cancelled) {
          const list = Array.isArray(data.images) ? data.images : [];
          setImages(shuffle(list));
        }
      } catch {
        if (!cancelled) setImages([]);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  const loopedImages = useMemo(() => {
    if (images.length === 0) return [];
    const buffer = Math.min(LOOP_BUFFER, images.length);
    if (images.length <= VISIBLE_COUNT) return images;
    const head = images.slice(0, buffer);
    const tail = images.slice(-buffer);
    return [...tail, ...images, ...head];
  }, [images]);

  const buffer = useMemo(() => Math.min(LOOP_BUFFER, images.length), [images.length]);
  const isLooping = images.length > VISIBLE_COUNT;

  const slideWidth = useMemo(() => {
    if (viewportWidth <= 0) return 0;
    const gaps = GAP_PX * (VISIBLE_COUNT - 1);
    return Math.max(1, (viewportWidth - gaps) / VISIBLE_COUNT);
  }, [viewportWidth]);

  const stepPx = slideWidth + GAP_PX;
  const canNavigate = isLooping;

  useEffect(() => {
    stepPxRef.current = stepPx;
  }, [stepPx]);

  function setTrackTransition(enabled: boolean) {
    const el = trackRef.current;
    if (!el) return;
    if (!enabled || prefersReducedMotionRef.current) {
      el.style.transition = 'none';
      return;
    }
    el.style.transition = 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)';
  }

  function setTrackTransform(loopIndex: number) {
    const el = trackRef.current;
    if (!el) return;
    const px = -(loopIndex * stepPxRef.current);
    currentTranslateXRef.current = px;
    el.style.transform = `translate3d(${px}px, 0, 0)`;
  }

  function setTrackTransformPx(px: number) {
    const el = trackRef.current;
    if (!el) return;
    currentTranslateXRef.current = px;
    el.style.transform = `translate3d(${px}px, 0, 0)`;
  }

  // Initialize / reset position when images load or when layout changes.
  useEffect(() => {
    if (!trackRef.current) return;

    if (images.length === 0) {
      indexRef.current = 0;
      setTrackTransition(false);
      setTrackTransform(0);
      requestAnimationFrame(() => setTrackTransition(true));
      return;
    }

    indexRef.current = isLooping ? buffer : 0;
    setTrackTransition(false);
    setTrackTransform(indexRef.current);
    requestAnimationFrame(() => setTrackTransition(true));
  }, [images.length, buffer, isLooping, viewportWidth]);

  // Seamless looping: snap the track (imperatively) when we hit the cloned buffers.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (!isLooping) return;
    const n = images.length;
    if (n <= 0) return;

    const onEnd = () => {
      const idx = indexRef.current;
      const startReal = buffer;
      const endRealExclusive = buffer + n;

      if (idx >= endRealExclusive) {
        indexRef.current = idx - n;
        setTrackTransition(false);
        setTrackTransform(indexRef.current);
        requestAnimationFrame(() => requestAnimationFrame(() => setTrackTransition(true)));
      } else if (idx < startReal) {
        indexRef.current = idx + n;
        setTrackTransition(false);
        setTrackTransform(indexRef.current);
        requestAnimationFrame(() => requestAnimationFrame(() => setTrackTransition(true)));
      }
    };

    el.addEventListener('transitionend', onEnd);
    return () => el.removeEventListener('transitionend', onEnd);
  }, [isLooping, images.length, buffer]);

  function onPointerDown(e: ReactPointerEvent) {
    if (!canNavigate) return;
    if (!viewportRef.current) return;
    // Only primary button for mouse; allow touch/pen.
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    if (activePointerIdRef.current !== null) return;

    activePointerIdRef.current = e.pointerId;
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartTranslateXRef.current = currentTranslateXRef.current;

    setTrackTransition(false);
    viewportRef.current.setPointerCapture?.(e.pointerId);
  }

  function onPointerMove(e: ReactPointerEvent) {
    if (!isDraggingRef.current) return;
    if (activePointerIdRef.current !== e.pointerId) return;

    const dx = e.clientX - dragStartXRef.current;
    setTrackTransformPx(dragStartTranslateXRef.current + dx);
  }

  function endDrag(e: ReactPointerEvent) {
    if (!isDraggingRef.current) return;
    if (activePointerIdRef.current !== e.pointerId) return;

    isDraggingRef.current = false;
    activePointerIdRef.current = null;
    viewportRef.current?.releasePointerCapture?.(e.pointerId);

    const step = stepPxRef.current;
    if (step <= 0) return;

    // Snap to nearest slide.
    const rawIndex = -currentTranslateXRef.current / step;
    const nextIndex = Math.round(rawIndex);
    indexRef.current = nextIndex;
    setTrackTransition(true);
    setTrackTransform(indexRef.current);
  }

  return (
    <Box style={{ paddingBlock: '10rem' }}>
      <Container size="3">
        <Box className="relative">
          <Box
            ref={viewportRef}
            className={[
              'relative overflow-hidden select-none touch-pan-y',
              canNavigate ? (isDraggingRef.current ? 'cursor-grabbing' : 'cursor-grab') : '',
            ].join(' ')}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
          >
            {/* Track */}
            <div
              ref={trackRef}
              className="flex will-change-transform motion-reduce:transition-none"
              style={{
                gap: `${GAP_PX}px`,
                padding: `${GAP_PX}px`,
              }}
            >
              {isLoading && images.length === 0 ? (
                Array.from({ length: VISIBLE_COUNT }).map((_, i) => (
                  <div key={i} className="shrink-0" style={{ width: slideWidth || 280 }}>
                    <div className="aspect-[3/4] bg-black/10 dark:bg-white/10" />
                  </div>
                ))
              ) : images.length === 0 ? (
                <Box p="4">
                  <Text size="2" color="gray">
                    No images found in <code className="font-mono">public/gallery</code>.
                  </Text>
                </Box>
              ) : (
                (loopedImages.length ? loopedImages : images).map((src, i) => (
                  <div key={`${src}::${i}`} className="shrink-0" style={{ width: slideWidth || 280 }}>
                    <div className="group relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={src}
                        alt={`Gallery image ${getRealIndex(i, buffer, images.length) + 1}`}
                        fill
                        sizes="(max-width: 768px) 33vw, 320px"
                        className="object-cover grayscale transition duration-300 group-hover:grayscale-0"
                        draggable={false}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </Box>
        </Box>

        <Flex mt="2" align="center" justify="between" gap="4">
          <Button asChild variant="outline" color="gray" size="1">
            <NextLink href="/gallery">
              View full gallery <ArrowRight size={16} />
            </NextLink>
          </Button>

          {/* Controls */}
          <Flex justify="end" gap="2">
            <IconButton
              type="button"
              aria-label="Previous images"
              disabled={!canNavigate}
              onClick={() => {
                if (!canNavigate) return;
                indexRef.current -= 1;
                setTrackTransition(true);
                setTrackTransform(indexRef.current);
              }}
              variant="soft"
            >
              <ChevronLeft size={18} />
            </IconButton>
            <IconButton
              type="button"
              aria-label="Next images"
              disabled={!canNavigate}
              onClick={() => {
                if (!canNavigate) return;
                indexRef.current += 1;
                setTrackTransition(true);
                setTrackTransform(indexRef.current);
              }}
              variant="soft"
            >
              <ChevronRight size={18} />
            </IconButton>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

