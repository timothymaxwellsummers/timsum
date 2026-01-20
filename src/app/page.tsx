import { LaunchScreen } from "@/components/LaunchScreen";
import { Footer } from "@/components/Footer";
import { BookmarkPreview } from "@/app/bookmarks/BookmarkPreview";
import { QuotePreview } from "@/app/quotes/QuotePreview";
import { GalleryPreview } from "@/app/gallery/GalleryPreview";

export default function Home() {
  return (
    <main>
      <LaunchScreen />
      <QuotePreview />
      <BookmarkPreview />
      <GalleryPreview />
      <Footer />
    </main>
  );
}
