import fs from "node:fs/promises";
import path from "node:path";

const IMAGE_EXTENSIONS = new Set([".avif", ".webp", ".png", ".jpg", ".jpeg", ".gif"]);

export async function getGalleryImages(): Promise<string[]> {
  const galleryDir = path.join(process.cwd(), "public", "gallery");

  let entries: string[] = [];
  try {
    entries = await fs.readdir(galleryDir);
  } catch {
    return [];
  }

  return entries
    .filter((name) => IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b))
    .map((name) => `/gallery/${name}`);
}

