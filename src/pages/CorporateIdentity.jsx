import SEO from "../components/seo/SEO";

import CorporateHero from "../components/sections/corporate/CorporateHero";
import CorporateServicesOverview from "../components/sections/corporate/CorporateServicesOverview";
import CorporateWhyChoose from "../components/sections/corporate/CorporateWhyChoose";
import CTA from "../components/sections/home/CTA";

export default function CorporateIdentity() {
  return (
    <main>
      <SEO
        title="Corporate Identity & Branding — Hill City Media"
        description="Build a recognizable and professional brand with corporate identity and branding solutions from Hill City Media."
        path="/services/corporate-identity"
      />

      <CorporateHero />
      <CorporateServicesOverview />
      <CorporateWhyChoose />
      <CTA />
    </main>
  );
}
