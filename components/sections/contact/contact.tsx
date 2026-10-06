import { ArrowUpRight } from "lucide-react";
import { contact } from "@/data/portfolio";
import { Section } from "@/components/sections/shared/section";
import { CopyEmail } from "./copy-email";

const PROFILES = [
  { label: "GitHub", href: contact.github },
  { label: "LinkedIn", href: contact.linkedin },
];

/** The address is sized to fit a 360px phone on one line; wrapping only kicks in below that. */
export function Contact() {
  return (
    <Section id="contact" title="Get in touch" intro="Email is the quickest way to reach me.">
      <a
        href={`mailto:${contact.email}`}
        className="text-2xl font-semibold [overflow-wrap:anywhere] text-ink underline decoration-rule decoration-2 underline-offset-[0.2em] transition-colors duration-150 ease-soft hover:decoration-signal sm:text-4xl"
      >
        {contact.email}
      </a>

      <div className="mt-6">
        <CopyEmail email={contact.email} />
      </div>

      <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-rule pt-6">
        {PROFILES.map((profile) => (
          <li key={profile.label}>
            <a
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1 text-base font-medium text-ink underline decoration-ink-muted/50 underline-offset-4 hover:decoration-signal"
            >
              {profile.label}
              <ArrowUpRight aria-hidden className="size-4 text-ink-muted" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
