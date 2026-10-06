import { SiteHeader } from "@/components/sections/navigation/site-header";
import { Hero } from "@/components/sections/hero/hero";
import { Credibility } from "@/components/sections/credibility/credibility";
import { About } from "@/components/sections/about/about";
import { Capabilities } from "@/components/sections/capabilities/capabilities";
import { Experience } from "@/components/sections/experience/experience";
import { Projects } from "@/components/sections/projects/projects";
import { Security } from "@/components/sections/security/security";
import { Payments } from "@/components/sections/payments/payments";
import { Performance } from "@/components/sections/performance/performance";
import { Skills } from "@/components/sections/skills/skills";
import { Education } from "@/components/sections/education/education";
import { Contact } from "@/components/sections/contact/contact";
import { SiteFooter } from "@/components/sections/footer/site-footer";
import { BackToTop } from "@/components/sections/navigation/back-to-top";
import { RevealObserver } from "@/components/sections/shared/reveal-observer";
import { JsonLd } from "@/components/sections/shared/json-ld";
import { MAIN_CONTENT_ID } from "@/data/navigation";
import { personJsonLd } from "@/lib/structured-data";

/**
 * One page. Section order follows the nav (Work, Experience, Systems,
 * Skills, Contact), so the active underline only ever moves forward as the
 * reader scrolls. "What I build" leads straight into the work it points at.
 */
export default function Home() {
  return (
    <>
      <JsonLd data={personJsonLd()} />
      <SiteHeader />
      <main id={MAIN_CONTENT_ID} tabIndex={-1} className="outline-none">
        <Hero />
        <Credibility />
        <About />
        <Capabilities />
        <Projects />
        <Experience />
        <Security />
        <Payments />
        <Performance />
        <Skills />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
      <BackToTop />
      <RevealObserver />
    </>
  );
}
