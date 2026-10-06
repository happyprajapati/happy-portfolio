import { Fragment } from "react";
import { experience, type Project } from "@/data/portfolio";
import { Section } from "@/components/sections/shared/section";
import { TechTokenList } from "@/components/sections/shared/tech-token";

/** Themes that have their own deep-dive section to point at. */
const THEME_SECTIONS: Partial<Record<Project["themes"][number], { label: string; href: string }>> = {
  security: { label: "Security", href: "#systems" },
  payments: { label: "Payments", href: "#payments" },
  performance: { label: "Performance", href: "#performance" },
};

/**
 * Projects as editorial case studies: a large name, what it is, the stack,
 * then the work itself. No screenshots or live links exist for these, so
 * the writing carries the section rather than placeholder imagery.
 */
export function Projects() {
  const roles = experience.filter((role) => role.projects.length > 0);
  const projects = roles.flatMap((role) => role.projects);
  const companies = [...new Set(roles.map((role) => role.company))];

  return (
    <Section
      id="work"
      title="Work"
      intro={`Products I built at ${companies.join(" and ")}.`}
    >
      <div className="space-y-16">
        {projects.map((project) => {
          const related = project.themes.flatMap((theme) => THEME_SECTIONS[theme] ?? []);
          return (
            <article
              key={project.id}
              id={`project-${project.id}`}
              aria-labelledby={`project-${project.id}-title`}
              className="scroll-mt-24"
            >
              <h3 id={`project-${project.id}-title`} className="text-4xl font-semibold text-ink">
                {project.name}
              </h3>
              <p className="mt-2 text-base text-ink-muted">{project.kind}</p>

              <div className="mt-5">
                <TechTokenList items={project.stack} label={`${project.name} stack`} />
              </div>

              <ul className="mt-8 space-y-3">
                {project.highlights.map((line) => (
                  <li key={line} className="measure relative pl-5 text-base text-ink">
                    <span aria-hidden className="absolute top-[0.8em] left-0 h-px w-2.5 bg-signal" />
                    {line}
                  </li>
                ))}
              </ul>

              {related.length > 0 && (
                <p className="mt-6 text-sm text-ink-muted">
                  More on this:{" "}
                  {related.map((section, index) => (
                    <Fragment key={section.href}>
                      {index > 0 && ", "}
                      <a
                        href={section.href}
                        className="font-medium text-ink underline decoration-ink-muted/50 underline-offset-4 hover:decoration-signal"
                      >
                        {section.label}
                      </a>
                    </Fragment>
                  ))}
                </p>
              )}
            </article>
          );
        })}
      </div>
    </Section>
  );
}
