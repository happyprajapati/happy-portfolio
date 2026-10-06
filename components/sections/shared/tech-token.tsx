/** A technology name, set in mono. Only for real technical names, never for prose. */
export function TechToken({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-sm border border-rule bg-surface px-1.5 py-0.5 font-mono text-[0.875rem] leading-[1.3] font-medium text-ink">
      {children}
    </span>
  );
}

export function TechTokenList({ items, label }: { items: string[]; label: string }) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item}>
          <TechToken>{item}</TechToken>
        </li>
      ))}
    </ul>
  );
}
