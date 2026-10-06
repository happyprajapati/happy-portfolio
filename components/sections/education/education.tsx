import { education } from "@/data/portfolio";
import { Section } from "@/components/sections/shared/section";

export function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="border-t border-rule">
        {education.map((entry) => (
          <li
            key={entry.id}
            className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule py-5"
          >
            <div>
              <h3 className="text-base font-semibold text-ink">{entry.qualification}</h3>
              <p className="text-sm text-ink-muted">{entry.institution}</p>
            </div>
            <p className="text-sm text-ink-muted tabular-nums">
              {entry.start} to {entry.end}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
