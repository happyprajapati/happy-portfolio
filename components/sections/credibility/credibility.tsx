import { Fragment } from "react";
import { education, experience, personal } from "@/data/portfolio";
import { Container } from "@/components/sections/shared/container";

/**
 * The recruiter's quick read, directly under the hero: four plain facts in a
 * ruled definition list. Everything is derived from portfolio.ts, so the
 * strip can never disagree with the sections below it. Deliberately not
 * "big number, small label" stat cards.
 */
export function Credibility() {
  const current = experience.find((role) => role.current);
  const latestEducation = education[0];

  const facts = [
    current && {
      term: "Currently",
      detail: `${current.title} at ${current.company}, since ${current.start}`,
    },
    {
      term: "Experience",
      detail: `${personal.experience} of hands-on full stack work`,
    },
    current &&
      current.projects.length > 0 && {
        term: "Projects",
        detail: current.projects.map((project, index) => (
          <Fragment key={project.id}>
            {index > 0 && ", "}
            <a
              href={`#project-${project.id}`}
              className="underline decoration-ink-muted/50 underline-offset-4 transition-colors duration-150 ease-soft hover:decoration-signal"
            >
              {project.name}
            </a>
          </Fragment>
        )),
      },
    latestEducation && {
      term: "Education",
      detail: `${latestEducation.shortQualification}, ${latestEducation.end}`,
    },
  ].filter(Boolean) as { term: string; detail: React.ReactNode }[];

  return (
    <section aria-label="At a glance" className="pb-section-sm md:pb-section">
      <Container>
        <dl className="grid grid-cols-1 border-t border-rule sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.term} className="border-b border-rule py-5 sm:pr-6">
              <dt className="text-sm text-ink-muted">{fact.term}</dt>
              <dd className="mt-1 text-sm font-medium text-ink">{fact.detail}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
