"use client";

import type { NavItem } from "@/data/navigation";
import { useActiveSection } from "@/hooks/use-active-section";
import { DesktopNav } from "./desktop-nav";
import { MobileMenu } from "./mobile-menu";
import { ThemeToggle } from "./theme-toggle";

/** The interactive right side of the header; tracks the section once for both navs. */
export function HeaderNav({ items }: { items: NavItem[] }) {
  const activeSection = useActiveSection(items.flatMap((item) => item.sections ?? [item.id]));
  const activeId = items.find((item) => (item.sections ?? [item.id]).includes(activeSection ?? ""))?.id ?? null;

  return (
    <div className="flex items-center gap-1 md:gap-6">
      <DesktopNav items={items} activeId={activeId} />
      <ThemeToggle />
      <MobileMenu items={items} activeId={activeId} />
    </div>
  );
}
