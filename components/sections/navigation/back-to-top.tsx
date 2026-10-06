"use client";

import { useSyncExternalStore } from "react";
import { ArrowUp } from "lucide-react";
import { MAIN_CONTENT_ID } from "@/data/navigation";
import { cn } from "@/lib/utils";

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("resize", onChange);
  return () => {
    window.removeEventListener("scroll", onChange);
    window.removeEventListener("resize", onChange);
  };
}

/** Footer height plus a margin: there, the footer's own "Back to top" link takes over. */
const FOOTER_ZONE = 140;

/** Shown once the reader is a screen past the hero, and hidden again at the footer. */
function shouldShow() {
  const atFooter = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - FOOTER_ZONE;
  return window.scrollY > window.innerHeight && !atFooter;
}

export function BackToTop() {
  const visible = useSyncExternalStore(subscribe, shouldShow, () => false);

  function goToTop() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    // Keyboard users continue from the top too, not from the button's old spot.
    document.getElementById(MAIN_CONTENT_ID)?.focus({ preventScroll: true });
  }

  return (
    <button
      type="button"
      onClick={goToTop}
      aria-label="Back to top"
      className={cn(
        "fixed right-4 bottom-4 z-30 inline-flex size-11 items-center justify-center rounded-lg border border-rule bg-surface text-ink transition-[opacity,visibility] duration-200 ease-soft hover:border-ink md:right-8 md:bottom-8",
        visible ? "visible opacity-100" : "invisible opacity-0",
      )}
    >
      <ArrowUp aria-hidden className="size-[18px]" />
    </button>
  );
}
