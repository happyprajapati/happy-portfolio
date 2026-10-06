"use client";

import { useEffect } from "react";

/**
 * The one-time section reveal (200ms opacity, see globals.css).
 *
 * Content is never hidden by default: sections only become hideable once
 * this has run and added `reveal-ready` to <html>, and anything already on
 * or above the screen at that moment is marked revealed first. So no JS,
 * a failed bundle, a deep link or reduced motion all mean fully visible text.
 */
export function RevealObserver() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const pending = sections.filter((section) => {
      if (section.getBoundingClientRect().top < window.innerHeight) {
        section.dataset.revealed = "";
        return false;
      }
      return true;
    });

    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.revealed = "";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    pending.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return null;
}
