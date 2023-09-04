"use client";

import { useState, useEffect } from "react";
import navStyles from "../../styles/nav.module.css";
import { useTheme } from 'next-themes'

export default function Music() {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
      }, [])

      if (mounted){
        return (
            <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            frameBorder="0"
            height="450"
            style={{
                width: '100%',
                maxWidth: '660px',
                overflow: 'hidden',
                borderRadius: '10px',
                backgroundColor: '#000000'
            }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src={resolvedTheme === 'dark' ? "https://embed.music.apple.com/de/playlist/this-is-tim/pl.u-6mo44PmfE1pZRo?l=en-GB&amp;theme=dark" : "https://embed.music.apple.com/de/playlist/this-is-tim/pl.u-6mo44PmfE1pZRo?l=en-GB"}
        ></iframe>
        );
      } else {
        return (
          <div className={navStyles.placeholderMusic}/>
        );
      }
}