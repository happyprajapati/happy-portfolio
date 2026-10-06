"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { NavItem } from "@/data/navigation";

/** md breakpoint, where the inline nav takes over. */
const DESKTOP_QUERY = "(min-width: 48rem)";

/**
 * Disclosure menu for small screens: a button that reveals the same links
 * as a full-width panel under the bar. Escape closes it and returns focus
 * to the button; choosing a link closes it.
 */
export function MobileMenu({ items, activeId }: { items: NavItem[]; activeId: string | null }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    }
    // Rotating a tablet past md would otherwise leave the panel stranded open.
    const desktop = window.matchMedia(DESKTOP_QUERY);
    function onBreakpoint(event: MediaQueryListEvent) {
      if (event.matches) setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <Button
        ref={buttonRef}
        variant="ghost"
        size="icon"
        className="size-11 rounded-lg"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
      </Button>

      <nav
        id={panelId}
        aria-label="Primary"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-rule bg-paper"
      >
        <ul className="mx-auto max-w-[1200px] px-4 py-2">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                aria-current={item.id === activeId ? "true" : undefined}
                className="flex min-h-12 items-center text-2xl font-semibold text-ink aria-[current]:text-signal"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
