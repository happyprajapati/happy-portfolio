"use client";

import { useEffect, useState } from "react";

/** A section counts as "current" once its top passes this share of the viewport. */
const ACTIVATION_LINE = 0.35;

/**
 * Returns the id of the section the reader is in, or null above the first.
 * It measures on scroll (once per frame) rather than with
 * IntersectionObserver because sections vary from a few rows to several
 * screens tall, and "the last section whose top has passed the line" is
 * stable for both. At the very bottom of the page the lowest section wins,
 * since a short final section may never reach the line.
 */
export function useActiveSection(sectionIds: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);
  const key = sectionIds.join(",");

  useEffect(() => {
    const ids = key.split(",");
    let frame = 0;

    function update() {
      frame = 0;
      const line = window.innerHeight * ACTIVATION_LINE;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      let current: string | null = null;
      let currentTop = -Infinity;
      for (const id of ids) {
        const element = document.getElementById(id);
        if (!element) continue;
        const top = element.getBoundingClientRect().top;
        if ((top <= line || atBottom) && top > currentTop) {
          current = id;
          currentTop = top;
        }
      }
      setActive(current);
    }

    function schedule() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [key]);

  return active;
}
