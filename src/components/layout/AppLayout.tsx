import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type Props = {
  chips: string[];
  activeChip: string;
  onChipChange: (chip: string) => void;
  children: React.ReactNode;
};

function ChipsRow({
  chips,
  activeChip,
  onChipChange,
}: {
  chips: string[];
  activeChip: string;
  onChipChange: (chip: string) => void;
}) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
      {chips.map((chip, i) => {
        const active = chip === activeChip;

        return (
          <button
            key={`${chip}-${i}`}
            type="button"
            onClick={() => onChipChange(chip)}
            className={[
              "h-8 rounded-full px-4 text-[14px] font-medium",
              "transition-colors",
              active
                ? "bg-black text-white"
                : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
            ].join(" ")}
          >
            {chip}
          </button>
        );
      })}
    </div>
  );
}

export default function AppLayout({
  chips,
  activeChip,
  onChipChange,
  children,
}: Props) {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      <div className="pt-14">
        <div className="mx-auto flex h-[calc(100vh-56px)] max-w-[1920px]">
          <div className="hidden lg:block w-[240px] shrink-0 border-none">
            <Sidebar />
          </div>

          <main className="flex-1 overflow-y-auto">
            <div className="sticky top-0 z-40 bg-white/95 backdrop-blur border-none">
              <div className="px-6 py-3">
                <ChipsRow
                  chips={chips}
                  activeChip={activeChip}
                  onChipChange={onChipChange}
                />
              </div>
            </div>

            {/* Page content */}
            <div className="px-6 py-4">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
