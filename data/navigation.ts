/**
 * Site navigation (Phase 2 IA). These are UI labels, not resume facts, so
 * they live apart from portfolio.ts. Each `id` is the anchor of the section
 * the link jumps to; "systems" is the first of the Security → Payments →
 * Performance deep dives.
 */
export interface NavItem {
  id: string;
  label: string;
  /** Section ids that light this item up while in view (defaults to [id]). */
  sections?: string[];
}

export const navItems: NavItem[] = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "systems", label: "Systems", sections: ["systems", "payments", "performance"] },
  { id: "skills", label: "Skills", sections: ["skills", "education"] },
  { id: "contact", label: "Contact" },
];

export const MAIN_CONTENT_ID = "main";
