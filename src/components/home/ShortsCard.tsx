import type { Video } from "../../types/youtube";

export default function ShortsCard({ v }: { v: Video }) {
  return (
    <div className="group flex-none w-[180px] cursor-pointer">
      <div className="rounded-xl p-2 transition-colors group-hover:bg-zinc-100">
        {/* Thumbnail */}
        <div
          className={[
            "overflow-hidden bg-zinc-300 aspect-[9/16]",
            "rounded-xl transition-all duration-200",
            "group-hover:rounded-md group-hover:-translate-y-[1px] group-hover:shadow-md",
          ].join(" ")}
        />

        {/* Text */}
        <h4 className="mt-2 line-clamp-2 text-sm font-semibold text-zinc-900 group-hover:text-black">
          {v.title}
        </h4>
        <p className="mt-1 text-xs text-zinc-600 group-hover:text-zinc-700">
          {v.views ?? "—"}
        </p>
      </div>
    </div>
  );
}
