// clsx + tailwind-merge with precompiled tables. The type scale and radii use
// Tailwind's standard names (text-sm … text-6xl, rounded-sm/lg) redefined in
// globals.css, so the merger already knows they are sizes, not colours.
// Custom names (we first had text-small / text-body) were read as colours and
// silently deleted real classes; teaching `cn/config` about them instead added
// ~17 KB gzipped of client JS.
export { cn } from "cn";
