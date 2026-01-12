import React from "react";
import {
  Home,
  Clapperboard,
  PlaySquare,
  User2,
  History,
  Music2,
  Gamepad2,
  Trophy,
  Youtube,
  YoutubeIcon,
  Settings,
  Flag,
  HelpCircle,
  MessageSquareWarning,
  UserCircle2,
} from "lucide-react";

type NavItem = {
  id: string;
  label: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const TOP: NavItem[] = [
  { id: "home", label: "Home", Icon: Home },
  { id: "shorts", label: "Shorts", Icon: Clapperboard },
  { id: "subscriptions", label: "Subscriptions", Icon: PlaySquare },
  { id: "you", label: "You", Icon: User2 },
  { id: "history", label: "History", Icon: History },
];

const EXPLORE: NavItem[] = [
  { id: "music", label: "Music", Icon: Music2 },
  { id: "gaming", label: "Gaming", Icon: Gamepad2 },
  { id: "sports", label: "Sports", Icon: Trophy },
];

const MORE_FROM_YT: NavItem[] = [
  { id: "yt-premium", label: "YouTube Premium", Icon: Youtube },
  { id: "yt-music", label: "YouTube Music", Icon: YoutubeIcon },
  { id: "yt-kids", label: "YouTube Kids", Icon: YoutubeIcon },
];

const BOTTOM: NavItem[] = [
  { id: "settings", label: "Settings", Icon: Settings },
  { id: "report", label: "Report history", Icon: Flag },
  { id: "help", label: "Help", Icon: HelpCircle },
  { id: "feedback", label: "Send feedback", Icon: MessageSquareWarning },
];

function Divider() {
  return <div className="my-2 h-px bg-zinc-200" />;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="px-3 pt-4 pb-2 text-[15px] font-semibold text-zinc-900">
      {children}
    </h3>
  );
}

function SidebarItem({
  item,
  activeId,
  onSelect,
}: {
  item: NavItem;
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const active = item.id === activeId;
  const Icon = item.Icon;

  return (
    <button
      type="button"
      onClick={() => onSelect(item.id)}
      className={[
        "w-full flex items-center gap-4 rounded-xl px-3 py-2 text-left",
        "transition-colors",
        active ? "bg-zinc-100 text-zinc-900" : "text-zinc-800 hover:bg-zinc-100",
      ].join(" ")}
    >
      <Icon
        className={[
          "h-6 w-6 flex-none transition-colors",
          active ? "text-zinc-900" : "text-zinc-700",
        ].join(" ")}
        strokeWidth={active ? 2.6 : 2}
        fill={active ? "currentColor" : "none"}
      />

      <span className={active ? "text-[15px] font-semibold pl-2" : "text-[15px] font-normal pl-2"}>
        {item.label}
      </span>
    </button>
  );
}

export default function Sidebar() {
  const [activeId, setActiveId] = React.useState<string>("home");

  const sidebarRef = React.useRef<HTMLElement | null>(null);
  const tRef = React.useRef<number | null>(null);

  const onScroll = () => {
    const el = sidebarRef.current;
    if (!el) return;

    el.classList.add("is-scrolling");

    if (tRef.current) window.clearTimeout(tRef.current);
    tRef.current = window.setTimeout(() => {
      el.classList.remove("is-scrolling");
    }, 800);
  };

  React.useEffect(() => {
    return () => {
      if (tRef.current) window.clearTimeout(tRef.current);
    };
  }, []);

  return (
    <aside
      ref={sidebarRef as any}
      onScroll={onScroll}
      className={[
        "sidebar-scroll", 
        "h-full overflow-y-auto", 
        "px-2 pt-2",
      ].join(" ")}
    >
      {/* Top */}
      <div className="space-y-1">
        {TOP.map((item) => (
          <SidebarItem key={item.id} item={item} activeId={activeId} onSelect={setActiveId} />
        ))}
      </div>

      <Divider />

      {/* Sign in block */}
      <div className="px-4 py-3">
        <p className="text-[14px] leading-5 text-zinc-700">
          Sign in to like videos, comment, and subscribe.
        </p>
        <button
          type="button"
          className="mt-3 inline-flex items-center rounded-full border border-zinc-300 px-4 py-2 text-[14px] font-semibold text-blue-600 hover:bg-blue-50"
        >
        <UserCircle2 className="h-6 w-6 pr-0.5" />
          Sign in
        </button>
      </div>

      <Divider />

      {/* Explore */}
      <SectionTitle>Explore</SectionTitle>
      <div className="space-y-1">
        {EXPLORE.map((item) => (
          <SidebarItem key={item.id} item={item} activeId={activeId} onSelect={setActiveId} />
        ))}
      </div>

      <Divider />

      {/* More from YouTube */}
      <SectionTitle>More from YouTube</SectionTitle>
      <div className="space-y-1">
        {MORE_FROM_YT.map((item) => (
          <SidebarItem key={item.id} item={item} activeId={activeId} onSelect={setActiveId} />
        ))}
      </div>

      <Divider />

      {/* Bottom */}
      <div className="space-y-1 pb-3">
        {BOTTOM.map((item) => (
          <SidebarItem key={item.id} item={item} activeId={activeId} onSelect={setActiveId} />
        ))}
      </div>

      <Divider />

      {/* Footer */}
      <div className="px-3 pb-6 pt-2 text-[13px] leading-[18px] text-zinc-600">
        <p className="font-semibold">
          About Press Copyright Contact us Creators Advertise Developers
        </p>
        <p className="mt-3 font-semibold">
          Terms Privacy Policy &amp; Safety How YouTube works Test new features
        </p>
        <p className="mt-4 text-zinc-400">© 2026 Google LLC</p>
      </div>
    </aside>
  );
}
