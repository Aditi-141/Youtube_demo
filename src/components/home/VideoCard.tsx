// src/components/home/VideoCard.tsx
import React from "react";
import type { Video } from "../../types/youtube";

type Props = {
  video: Video;
};

export default function VideoCard({ video }: Props) {
  const thumbColor = "#D3D3D3";

  return (
    <article
      className={[
        "group w-full rounded-xl",
        "p-2 -m-2", 
        "transition-colors duration-150",
        "hover:bg-[#e7f1ff]",
      ].join(" ")}
    >
      {/* Thumbnail */}
      <div className="relative">
        <div
          className={[
            "relative w-full overflow-hidden",
            "rounded-xl transition-all duration-200",
            "group-hover:rounded-none",
          ].join(" ")}
          style={{ background: thumbColor, aspectRatio: "16 / 9" }}
        >
          {/* Duration */}
          {video.duration && (
            <span className="absolute bottom-2 right-2 rounded bg-black/90 px-2 py-[2px] text-[11px] font-medium text-white">
              {video.duration}
            </span>
          )}
        </div>
      </div>

      <div className="mt-3 flex gap-3">
        {/* Channel avatar placeholder */}
        <div className="h-9 w-9 shrink-0 rounded-full bg-zinc-300" />

        <div className="min-w-0 flex-1">
          <h3 className="line-clamp-2 text-[15px] font-semibold leading-5 text-zinc-900">
            {video.title}
          </h3>

          <div className="mt-1 text-[13px] text-zinc-600">
            {video.channel && <div className="truncate">{video.channel}</div>}
            <div className="truncate">
              {video.views ?? "—"}
              {video.age ? ` • ${video.age}` : ""}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
