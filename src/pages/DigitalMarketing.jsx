import SEO from "../components/seo/SEO";

import DigitalHero from "../components/sections/digital/DigitalHero";
import DigitalServicesOverview from "../components/sections/digital/DigitalServicesOverview";
import DigitalWhyChoose from "../components/sections/digital/DigitalWhyChoose";
import CTA from "../components/sections/home/CTA";

export default function DigitalMarketing() {
  return (
    <main>
      <SEO
        title="Digital Marketing Services — Hill City Media"
        description="Grow your brand online with creative digital marketing services from Hill City Media, including social media, content and digital brand communication."
        path="/services/digital-marketing"
      />

      <DigitalHero />
      <DigitalServicesOverview />
      <DigitalWhyChoose />
      <CTA />
    </main>
  );
}