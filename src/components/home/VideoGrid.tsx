import type { Video } from "../../types/youtube";
import VideoCard from "./VideoCard";
import ShortsCard from "./ShortsCard";

type Props = {
  videos: Video[];
  shorts: Video[];
};

export default function VideoGrid({ videos, shorts }: Props) {
  return (
    <div className="pt-2">
      <div
        className="
          grid gap-x-4 gap-y-10
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          2xl:grid-cols-5
        "
      >
        {videos.map((v) => (
          <VideoCard key={String(v.id)} video={v} />
        ))}
      </div>

      <div className="mt-12 border-t border-zinc-200 pt-8">
        <div className="mb-4 flex items-center gap-2">
          <span className="text-lg font-bold">Shorts</span>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {shorts.map((s) => (
            <ShortsCard key={String(s.id)} v={s} />
          ))}
        </div>
      </div>
    </div>
  );
}
