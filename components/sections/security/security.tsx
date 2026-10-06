import { security } from "@/data/portfolio";
import { Section } from "@/components/sections/shared/section";
import { FlowEvidence } from "@/components/sections/shared/flow-evidence";

/** First of the three deep dives; its id is the nav's "Systems" anchor. */
export function Security() {
  return (
    <Section id={security.id} title={security.title} intro={security.intro}>
      <FlowEvidence dive={security} />
    </Section>
  );
}
