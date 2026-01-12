import type { Chip, Video } from "../types/youtube";

export const CHIPS: Chip[] = [
  "All",
  "Music",
  "Mixes",
  "Gaming",
  "Live",
  "Podcasts",
  "News",
  "Programming",
  "React",
  "Recently uploaded",

  "All2",
  "Music2",
  "Mixes2",
  "Gaming2",
  "Live2",
  "Podcasts2",
  "News2",
  "Programming2",
  "React2",
  "Recently uploaded2",

  "All3",
  "Music3",
  "Mixes3",
  "Gaming3",
  "Live3",
  "Podcasts3",
  "News3",
  "Programming3",
  "React3",
  "Recently uploaded3",
];

export const makeVideos = (count = 18): Video[] =>
  Array.from({ length: count }).map((_, i) => ({
    id: i + 1,
    title: `Block (${i + 1})`,
    channel: ["title1", "title2", "title3", "title4"][i % 4],
    views: ["18K views", "245K views", "1.2M views", "9.8K views"][i % 4],
    age: ["2 days ago", "1 week ago", "3 weeks ago", "5 months ago"][i % 4],
    duration: ["12:48", "8:03", "1:02:10", "22:15"][i % 4],
    tag: ["Programming", "React", "Music", "Gaming"][i % 4],
  }));

export const makeShorts = (count = 18): Video[] =>
  Array.from({ length: count }).map((_, i) => ({
    id: i + 1,
    title: `Block (${i + 1})`,
    channel: ["Shorts1", "Shorts2", "Shorts3", "Shorts4"][i % 4],
    views: ["18K views", "245K views", "1.2M views", "9.8K views"][i % 4],
    age: ["2 days ago", "1 week ago", "3 weeks ago", "5 months ago"][i % 4],
    duration: ["12:48", "8:03", "1:02:10", "22:15"][i % 4],
    tag: ["Programming", "React", "Music", "Gaming"][i % 4],
  }));
