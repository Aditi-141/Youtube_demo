import AppLayout from "../components/layout/AppLayout";
import VideoGrid from "../components/home/VideoGrid";
import { useHomeFeed } from "../components/hooks/useHomeFeed";

export default function Home() {
  const { chips, activeChip, setActiveChip, videos, shorts } = useHomeFeed();

  return (
    <AppLayout chips={chips} activeChip={activeChip} onChipChange={setActiveChip}>
      <VideoGrid videos={videos} shorts={shorts} />
    </AppLayout>
  );
}
