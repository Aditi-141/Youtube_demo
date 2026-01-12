import type { Chip } from "../../types/youtube";

type Props = {
  chips: Chip[];
  activeChip: Chip;
  onChange: (chip: Chip) => void;
};

export default function ChipsBar({ chips, activeChip, onChange }: Props) {
  return (
    <div className="flex gap-3 overflow-x-auto scrollbar-hide">
      {chips.map((c, idx) => {
        const active = activeChip === c;

        return (
          <button
            key={`${c}-${idx}`}
            onClick={() => onChange(c)}
            className={[
              "shrink-0 rounded-[10px] px-3 py-2 text-sm font-medium",
              "leading-none",
              active
                ? "bg-black text-white"
                : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
            ].join(" ")}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
}
