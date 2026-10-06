import Image from "next/image";
import { about, personal } from "@/data/portfolio";
import { Section } from "@/components/sections/shared/section";

export function About() {
  return (
    <Section
      id="about"
      title="About"
      aside={
        // A real portrait rather than a thumbnail: 4:5, cropped from the 3:4
        // original, capped at 320px so it never outweighs the text on phones.
        <div className="mt-8 aspect-[4/5] w-full max-w-80 overflow-hidden rounded-lg border border-rule bg-surface">
          <Image
            src={personal.photo.src}
            alt={personal.photo.alt}
            width={1086}
            height={1448}
            sizes="(min-width: 768px) 320px, calc(100vw - 32px)"
            className="size-full object-cover object-[50%_20%]"
          />
        </div>
      }
    >
      <p className="measure text-[1.3125rem] leading-[1.5] text-pretty text-ink">{about.summary}</p>

      <dl className="mt-10 grid gap-6 border-t border-rule pt-6 sm:grid-cols-2">
        <div>
          <dt className="text-sm text-ink-muted">Currently exploring</dt>
          <dd className="mt-1 text-base text-ink">{about.exploring}</dd>
        </div>
        {about.aiTools.length > 0 && (
          <div>
            <dt className="text-sm text-ink-muted">AI tools I work with</dt>
            <dd className="mt-1 text-base text-ink">{about.aiTools.join(", ")}</dd>
          </div>
        )}
      </dl>
    </Section>
  );
}
