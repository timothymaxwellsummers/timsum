import { LaunchScreen } from "@/components/LaunchScreen";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { QuotePreview } from "@/components/QuotePreview";
import { Box } from "@radix-ui/themes";

export default function Home() {
  return (
    <main>
      <Box px="2">
        <LaunchScreen />
        <QuotePreview />
        <Experience />
        <Education />
        <Footer />
      </Box>
    </main>
  );
}
