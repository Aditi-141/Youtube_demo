import { useMemo, useState } from "react";
import type { Chip } from "../../types/youtube";
import { CHIPS, makeShorts, makeVideos } from "../../data/mock";

export function useHomeFeed() {
  const [activeChip, setActiveChip] = useState<Chip>(CHIPS[0]);

  const videos = useMemo(() => makeVideos(24), []);
  const shorts = useMemo(() => makeShorts(18), []);

  // optional: filter by tag
  const filteredVideos = useMemo(() => {
    if (activeChip === "All") return videos;
    return videos.filter((v) => v.tag === activeChip || v.channel === activeChip);
  }, [videos, activeChip]);

  return {
    chips: CHIPS,
    activeChip,
    setActiveChip,
    videos: filteredVideos,
    shorts,
  };
}
