import type { Metadata } from "next";
import { GalleryClient } from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A collection of photographs by Timothy Summers, as seen through my iPhone.",
  openGraph: {
    title: "Gallery | tim's site",
    description: "A collection of photographs by Timothy Summers, as seen through my iPhone.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | tim's site",
    description: "A collection of photographs by Timothy Summers, as seen through my iPhone.",
  },
};

export default function Gallery() {
  return <GalleryClient />;
}
