import type { CSSProperties } from "react";
import { systemTrace } from "@/data/portfolio";

/**
 * The signature visual: one request travelling down the stack.
 *
 * Pure CSS, no client JS. On load the spine draws once (~1.6s) and each span
 * lights as the request reaches it, then everything stays still. Under
 * reduced motion the global rule collapses durations and delays, so the
 * finished state shows immediately; without CSS animations it is the same.
 * Keyframes live in globals.css (trace-*).
 */
export function HeroTrace() {
  return (
    <figure className="rounded-lg border border-rule bg-surface p-5 md:p-6">
      <figcaption className="mb-5">
        <span className="block text-sm font-semibold text-ink">A request, end to end</span>
        <span className="block text-sm text-ink-muted">The layers I build, in the order a request meets them.</span>
      </figcaption>

      <div className="relative">
        {/* Spine: a faint full-length rule, with the signal line drawing over it. */}
        <span aria-hidden className="absolute top-2 bottom-2 left-[5px] w-px bg-rule" />
        <span aria-hidden className="trace-spine absolute top-2 bottom-2 left-[5px] w-px bg-signal" />

        <ol className="relative space-y-1">
          {systemTrace.map((span, index) => (
            <li
              key={span.step}
              className="trace-span grid grid-cols-[11px_1fr] items-baseline gap-x-4 py-1.5"
              style={{ "--i": index } as CSSProperties}
            >
              <span aria-hidden className="trace-node relative top-px size-[11px] rounded-full border-2 border-signal bg-signal" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                <span className="trace-label font-mono text-[0.875rem] leading-[1.3] font-medium text-ink">
                  {span.step}
                </span>
                <span className="text-sm text-ink-muted">{span.evidence.join(", ")}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
