import { personal } from "@/data/portfolio";
import { MAIN_CONTENT_ID, navItems } from "@/data/navigation";
import { Container } from "@/components/sections/shared/container";
import { HeaderNav } from "./header-nav";

/**
 * Sticky top bar: a solid paper background and a single rule, no blur, no
 * shadow. The name and skip link are server-rendered; the nav, theme toggle
 * and small-screen menu are one client island. The reading-progress line
 * along the bottom edge is CSS only (scroll-driven animation) and is simply
 * absent in browsers without support.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <a
        href={`#${MAIN_CONTENT_ID}`}
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>

      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="#top" className="text-base font-semibold tracking-[-0.01em] text-ink">
          {personal.name}
        </a>

        <HeaderNav items={navItems} />
      </Container>
      <span aria-hidden className="scroll-progress absolute inset-x-0 -bottom-px h-0.5 origin-left bg-signal" />
    </header>
  );
}
