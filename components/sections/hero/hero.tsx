import { hero, personal } from "@/data/portfolio";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/sections/shared/container";
import { cn } from "@/lib/utils";
import { HeroTrace } from "./hero-trace";

const ctaBase = "h-11 rounded-lg px-5 text-sm font-medium transition-colors duration-150 ease-soft";

/**
 * Hero: a byline (name, role), the statement, two actions, and the
 * request trace beside it. Stacks on small screens with the trace after
 * the actions, so the statement is always read first.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pt-12 pb-12 md:pt-24 md:pb-16">
      <Container className="grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7 md:pr-8">
          <div>
            <p className="text-base font-semibold text-ink">{personal.name}</p>
            <p className="text-sm text-ink-muted">
              {personal.role}, {personal.experience}
            </p>
          </div>

          <h1 id="hero-title" className="mt-10 max-w-[14ch] text-6xl font-semibold text-balance text-ink">
            {hero.headline}
          </h1>

          <p className="measure mt-6 text-base text-ink-muted">{hero.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={hero.primaryCta.href} className={cn(buttonVariants(), ctaBase, "hover:bg-signal")}>
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className={cn(buttonVariants({ variant: "outline" }), ctaBase, "bg-transparent hover:border-ink hover:bg-transparent dark:bg-transparent dark:hover:border-ink dark:hover:bg-transparent")}
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="md:col-span-5 md:self-end">
          <HeroTrace />
        </div>
      </Container>
    </section>
  );
}
