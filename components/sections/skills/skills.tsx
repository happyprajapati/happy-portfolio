import { skills } from "@/data/portfolio";
import { Section } from "@/components/sections/shared/section";

/** A ruled definition list in plain text: easier to scan than a wall of chips. */
export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="border-t border-rule">
        {skills.map((group) => (
          <div key={group.id} className="grid gap-1 border-b border-rule py-4 sm:grid-cols-[13rem_1fr] sm:gap-6">
            <dt className="text-sm font-medium text-ink-muted sm:pt-0.5">{group.label}</dt>
            <dd className="text-base text-ink">{group.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
