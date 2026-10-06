import { personal } from "@/data/portfolio";
import { Container } from "@/components/sections/shared/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-8">
        <p className="text-sm text-ink-muted">
          © {new Date().getFullYear()} {personal.name}
        </p>
        <a
          href="#top"
          className="inline-flex min-h-11 items-center text-sm font-medium text-ink underline decoration-ink-muted/50 underline-offset-4 hover:decoration-signal"
        >
          Back to top
        </a>
      </Container>
    </footer>
  );
}
