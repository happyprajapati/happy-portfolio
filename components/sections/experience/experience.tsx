import { Fragment } from "react";
import { experience } from "@/data/portfolio";
import { Section } from "@/components/sections/shared/section";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-12">
        {experience.map((role) => (
          <li key={role.id}>
            <article aria-labelledby={`role-${role.id}`}>
              <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <div>
                  <h3 id={`role-${role.id}`} className="text-2xl font-semibold text-ink">
                    {role.title}
                  </h3>
                  <p className="mt-1 text-base text-ink">
                    {role.company}
                    {role.type && <span className="text-ink-muted">, {role.type.toLowerCase()}</span>}
                  </p>
                </div>
                <p className="text-sm text-ink-muted tabular-nums">
                  {role.start} to {role.end}
                </p>
              </header>

              {role.highlights.length > 0 && (
                <ul className="mt-6 space-y-3">
                  {role.highlights.map((line) => (
                    <li key={line} className="measure relative pl-5 text-base text-ink-muted">
                      <span aria-hidden className="absolute top-[0.8em] left-0 h-px w-2.5 bg-ink-muted" />
                      {line}
                    </li>
                  ))}
                </ul>
              )}

              {role.projects.length > 0 && (
                <p className="mt-6 text-sm text-ink-muted">
                  Projects in this role:{" "}
                  {role.projects.map((project, index) => (
                    <Fragment key={project.id}>
                      {index > 0 && ", "}
                      <a
                        href={`#project-${project.id}`}
                        className="font-medium text-ink underline decoration-ink-muted/50 underline-offset-4 hover:decoration-signal"
                      >
                        {project.name}
                      </a>
                    </Fragment>
                  ))}
                </p>
              )}
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
