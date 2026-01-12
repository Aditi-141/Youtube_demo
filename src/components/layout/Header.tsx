import React from "react";
import { Menu, Search, Mic, MoreVertical, UserCircle2 } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-14 border-none">
      <div className="mx-auto flex h-full items-center gap-2 px-4">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <button
            className="grid h-10 w-10  place-items-center rounded-full hover:bg-zinc-100"
            aria-label="Menu"
            type="button"
          >
            <Menu className="h-6 w-6" />
          </button>

          <a href="#" className="flex items-center">
          <img
            src="/YouTube_2024.svg"
            alt="YouTube"
            className="h-5 w-auto select-none"
            draggable={false}
          />
          </a>
        </div>
         
        {/* CENTER */}
        <div className="flex flex-1 justify-center px-2">
          <div className="flex w-full max-w-[720px] items-center gap-3">
            {/* Search */}
            <div className="group flex w-full items-center">
              <div
                className={[
                  "flex h-10 w-full items-center rounded-l-full",
                  "border border-zinc-300 bg-white",
                  "pl-3 pr-4",
                  "group-focus-within:border-blue-600",
                ].join(" ")}
              >
                <div
                  className={[
                    "flex items-center overflow-hidden",
                    "transition-all duration-200 ease-out",
                    "w-0 opacity-0",
                    "group-focus-within:w-6 group-focus-within:opacity-100",
                  ].join(" ")}
                >
                  <Search className="h-5 w-5 text-zinc-500" />
                </div>

                <input
                  className={[
                    "h-full w-full min-w-0 bg-transparent",
                    "text-[15px] outline-none",
                    "placeholder:text-zinc-500",
                    "pl-3",
                  ].join(" ")}
                  placeholder="Search"
                />
              </div>

              <button
                className={[
                  "h-10 w-16 rounded-r-full",
                  "border border-l-0 border-zinc-300",
                  "bg-zinc-50 hover:bg-zinc-100",
                  "grid place-items-center",
                ].join(" ")}
                aria-label="Search"
                type="button"
              >
                <Search className="h-5 w-5 text-zinc-800" />
              </button>
            </div>

            {/* Mic */}
            <button
              className="grid h-10 w-10 place-items-center rounded-full bg-zinc-100 hover:bg-zinc-200"
              aria-label="Mic"
              type="button"
            >
              <Mic className="h-5 w-5 text-zinc-900" />
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2 pr-4">
          <button
            className="grid h-10 w-10 place-items-center rounded-full hover:bg-zinc-100"
            aria-label="More"
            type="button"
          >
            <MoreVertical className="h-5 w-5" />
          </button>

          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-zinc-300 px-3 py-1 text-[14px] font-semibold text-blue-600 hover:bg-blue-50"
          >
            <UserCircle2 className="h-6 w-6" />
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
