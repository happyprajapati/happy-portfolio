import { Container } from "./container";

interface SectionProps {
  id: string;
  title: string;
  intro?: string;
  /** Extra content under the heading column (About uses it for the portrait). */
  aside?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * The frame every content section shares: a rule, then the heading in four
 * columns and the content in eight. On desktop the heading stays in view
 * while a long section scrolls past it; on phones it simply stacks.
 */
export function Section({ id, title, intro, aside, children }: SectionProps) {
  const titleId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={titleId} data-reveal className="pb-section-sm md:pb-section">
      <Container>
        <div className="grid gap-8 border-t border-rule pt-8 md:grid-cols-12 md:pt-10">
          <header className="md:sticky md:top-24 md:col-span-4 md:self-start md:pr-6">
            <h2 id={titleId} className="text-4xl font-semibold text-balance text-ink">
              {title}
            </h2>
            {intro && <p className="mt-4 text-base text-pretty text-ink-muted">{intro}</p>}
            {aside}
          </header>
          <div className="min-w-0 md:col-span-8">{children}</div>
        </div>
      </Container>
    </section>
  );
}
