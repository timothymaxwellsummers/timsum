import { LaunchScreen } from "@/components/LaunchScreen";
import { Education } from "@/components/Education";
import { Box } from "@radix-ui/themes";

export default function Home() {
  return (
    <main>
      <Box px="2">
        <LaunchScreen />
        <Education />
      </Box>
    </main>
  );
}
