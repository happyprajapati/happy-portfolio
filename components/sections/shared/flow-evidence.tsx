"use client";

import { useState } from "react";
import type { DeepDive } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const LG_COLUMNS: Record<number, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

interface FlowEvidenceProps {
  dive: DeepDive;
  /** Step that ends in a confirmed state (Payments' webhook); marked in the ok colour. */
  confirmedStep?: string;
}

/**
 * Steps across the top, the resume lines that prove them underneath.
 * Pointing at (or focusing) a step lights the lines that back it; clicking
 * pins it. Every line stays readable at all times; the highlight only adds
 * emphasis, so nothing is lost without a pointer or without JS.
 *
 * Steps are numbered only when the dive is a real sequence.
 */
export function FlowEvidence({ dive, confirmedStep }: FlowEvidenceProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);
  const active = hovered ?? pinned;

  const StepList = dive.sequence ? "ol" : "ul";
  // Long labels (Performance) read better two-up; short sequences fit in one row.
  const lgColumns = dive.sequence || dive.steps.length === 3 ? dive.steps.length : 2;

  return (
    <div>
      <StepList
        aria-label={dive.sequence ? `${dive.title}, in order` : `${dive.title} layers`}
        className={cn("grid gap-y-6 sm:grid-cols-2", LG_COLUMNS[lgColumns])}
      >
        {dive.steps.map((step, index) => {
          const isActive = active === step.id;
          return (
            <li key={step.id} className="flex">
              {/* flex-col + justify-start: a <button> centres its content, and steps in
                  one row stretch to equal height, which would misalign the labels. */}
              <button
                type="button"
                aria-pressed={pinned === step.id}
                onMouseEnter={() => setHovered(step.id)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(step.id)}
                onBlur={() => setHovered(null)}
                onClick={() => setPinned((current) => (current === step.id ? null : step.id))}
                className={cn(
                  "flex w-full cursor-pointer flex-col justify-start border-t-2 pt-4 pr-5 text-left transition-colors duration-150 ease-soft",
                  isActive ? "border-signal" : "border-rule hover:border-ink-muted",
                )}
              >
                <span className="flex items-baseline gap-2">
                  {dive.sequence && (
                    <span aria-hidden className="font-mono text-[0.875rem] leading-[1.3] text-ink-muted tabular-nums">
                      {index + 1}
                    </span>
                  )}
                  <span
                    className={cn(
                      "font-mono text-[0.875rem] leading-[1.3] font-medium transition-colors duration-150 ease-soft",
                      isActive ? "text-signal" : "text-ink",
                    )}
                  >
                    {step.label}
                  </span>
                </span>
                <span className="mt-2 block text-sm text-ink-muted">{step.detail}</span>
                {confirmedStep === step.id && (
                  <span className="mt-3 flex items-center gap-1.5 text-sm font-medium text-ink">
                    <span aria-hidden className="size-2 rounded-full bg-ok" />
                    Confirmed
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </StepList>

      <h3 className="mt-12 text-sm font-semibold text-ink">Where this shows up in my work</h3>
      <ul className="mt-4 space-y-3">
        {dive.evidence.map((line) => {
          const lit = active !== null && line.steps.includes(active);
          const dimmed = active !== null && !lit;
          return (
            <li
              key={line.text}
              className={cn(
                "border-l-2 pl-4 transition-colors duration-150 ease-soft",
                lit ? "border-signal" : "border-rule",
              )}
            >
              <p className={cn("measure text-base transition-colors duration-150 ease-soft", dimmed ? "text-ink-muted" : "text-ink")}>
                {line.text}
              </p>
              <a
                href={line.href}
                className="mt-1 inline-block text-sm text-ink-muted underline decoration-ink-muted/40 underline-offset-4 hover:text-ink hover:decoration-signal"
              >
                {line.source}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
