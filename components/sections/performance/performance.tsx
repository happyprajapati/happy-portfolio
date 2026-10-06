import { performance } from "@/data/portfolio";
import { Section } from "@/components/sections/shared/section";
import { FlowEvidence } from "@/components/sections/shared/flow-evidence";

export function Performance() {
  return (
    <Section id={performance.id} title={performance.title} intro={performance.intro}>
      <FlowEvidence dive={performance} />
    </Section>
  );
}
