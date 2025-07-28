import { LaunchScreen } from "@/components/LaunchScreen";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Box } from "@radix-ui/themes";

export default function Home() {
  return (
    <main>
      <Box px="2">
        <LaunchScreen />
        <Experience />
        <Education />
      </Box>
    </main>
  );
}
