import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const revalidate = 3600; // cache for 1 hour

const IMAGE_EXTENSIONS = new Set([".avif", ".webp", ".png", ".jpg", ".jpeg", ".gif"]);

export async function GET() {
  const galleryDir = path.join(process.cwd(), "public", "gallery");

  let entries: string[] = [];
  try {
    entries = await fs.readdir(galleryDir);
  } catch {
    return NextResponse.json({ images: [] as string[] });
  }

  const images = entries
    .filter((name) => IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b))
    .map((name) => `/gallery/${name}`);

  return NextResponse.json({ images });
}


