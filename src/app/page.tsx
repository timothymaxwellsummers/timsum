import { LaunchScreen } from "@/components/LaunchScreen";
import { Footer } from "@/components/Footer";
import { BookmarkPreview } from "@/app/bookmarks/BookmarkPreview";
import { QuotePreview } from "@/app/quotes/QuotePreview";
import { GalleryPreview } from "@/app/gallery/GalleryPreview";
import { getGalleryImages } from "@/lib/gallery";

export default async function Home() {
  const images = await getGalleryImages();

  return (
    <main>
      <LaunchScreen />
      <QuotePreview />
      <BookmarkPreview />
      <GalleryPreview images={images} />
      <Footer />
    </main>
  );
}
