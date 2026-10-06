import { capabilities } from "@/data/portfolio";
import { Section } from "@/components/sections/shared/section";

/**
 * An index, not a card grid: one ruled row per area, each pointing at the
 * place on the page that backs it up.
 */
export function Capabilities() {
  return (
    <Section
      id="capabilities"
      title="What I build"
      intro="Five areas I work across, each backed by work further down the page."
    >
      <ul className="border-t border-rule">
        {capabilities.map((capability) => (
          <li key={capability.id} className="grid gap-2 border-b border-rule py-6 sm:grid-cols-[11rem_1fr] sm:gap-6">
            <h3 className="text-2xl font-semibold text-ink">{capability.title}</h3>
            <div>
              <p className="measure text-base text-ink-muted">{capability.summary}</p>
              <a
                href={capability.href}
                className="mt-1 inline-flex min-h-6 items-center text-sm font-medium text-signal underline decoration-signal/30 underline-offset-4 transition-colors duration-150 ease-soft hover:decoration-signal"
              >
                {capability.linkLabel}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
