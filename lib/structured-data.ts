import { contact, education, experience, personal, skills } from "@/data/portfolio";
import { siteDescription, siteUrl } from "@/lib/site";

/**
 * schema.org Person for search engines, built only from portfolio.ts.
 * Rendered as JSON-LD by components/sections/shared/json-ld.tsx.
 */
export function personJsonLd() {
  const current = experience.find((role) => role.current);
  const absolute = (path: string) => new URL(path, siteUrl).toString();

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absolute("/#person"),
    name: personal.name,
    jobTitle: personal.role,
    description: siteDescription,
    url: siteUrl.toString(),
    image: absolute(personal.photo.src),
    email: `mailto:${contact.email}`,
    sameAs: [contact.github, contact.linkedin],
    ...(current && {
      worksFor: { "@type": "Organization", name: current.company },
    }),
    alumniOf: education.map((entry) => ({ "@type": "CollegeOrUniversity", name: entry.institution })),
    knowsAbout: [...new Set(skills.filter((group) => group.id !== "ai").flatMap((group) => group.items))],
  };
}
