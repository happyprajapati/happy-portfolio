"use client";

import { useEffect, useRef } from "react";
import type { NavItem } from "@/data/navigation";
import { cn } from "@/lib/utils";

/**
 * Inline nav for md and up. One underline slides between links rather than
 * each link drawing its own; it is positioned straight on the DOM node so a
 * scroll-driven change never re-renders the list.
 */
export function DesktopNav({ items, activeId }: { items: NavItem[]; activeId: string | null }) {
  const listRef = useRef<HTMLUListElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const list = listRef.current;
    const indicator = indicatorRef.current;
    if (!list || !indicator) return;

    function place(animate: boolean) {
      const link = activeId ? list!.querySelector<HTMLElement>(`[data-nav-id="${activeId}"]`) : null;
      if (!link) {
        indicator!.style.opacity = "0";
        return;
      }
      const wasHidden = indicator!.style.opacity !== "1";
      // Appearing from nothing: jump into place, then fade in, instead of sliding from the left edge.
      if (!animate || wasHidden) indicator!.style.transitionProperty = "opacity";
      indicator!.style.transform = `translateX(${link.offsetLeft}px)`;
      indicator!.style.width = `${link.offsetWidth}px`;
      indicator!.style.opacity = "1";
      if (!animate || wasHidden) {
        void indicator!.offsetWidth; // commit the jump before restoring the slide
        indicator!.style.transitionProperty = "";
      }
    }

    place(true);
    const onResize = () => place(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeId]);

  return (
    <nav aria-label="Primary" className="hidden md:block">
      <ul ref={listRef} className="relative flex items-center gap-8">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                data-nav-id={item.id}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "block py-2 text-sm font-medium transition-colors duration-150 ease-soft hover:text-ink",
                  isActive ? "text-ink" : "text-ink-muted",
                )}
              >
                {item.label}
              </a>
            </li>
          );
        })}
        <span
          ref={indicatorRef}
          aria-hidden
          style={{ opacity: 0 }}
          className="pointer-events-none absolute bottom-0 left-0 h-0.5 bg-signal transition-[transform,width,opacity] duration-200 ease-soft"
        />
      </ul>
    </nav>
  );
}
