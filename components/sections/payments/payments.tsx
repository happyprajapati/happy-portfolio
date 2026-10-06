import { payments } from "@/data/portfolio";
import { Section } from "@/components/sections/shared/section";
import { FlowEvidence } from "@/components/sections/shared/flow-evidence";
import { TechTokenList } from "@/components/sections/shared/tech-token";

export function Payments() {
  const { gateways, ...dive } = payments;
  return (
    <Section id={payments.id} title={payments.title} intro={payments.intro}>
      <FlowEvidence dive={dive} confirmedStep="webhook" />
      {gateways.length > 0 && (
        <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-rule pt-6">
          <p className="text-sm text-ink-muted">Payment gateways I’ve integrated</p>
          <TechTokenList items={gateways} label="Payment gateways" />
        </div>
      )}
    </Section>
  );
}
