import SEO from "../components/seo/SEO";

import ServicesHero from "../components/sections/services/ServicesHero";
import ServicesOverview from "../components/sections/services/ServicesOverview";
import ServicesWhyChoose from "../components/sections/services/ServicesWhyChoose";
import ServicesProcess from "../components/sections/services/ServicesProcess";
import CTA from "../components/sections/home/CTA";

export default function Services() {
  return (
    <main>
      <SEO
        title="Creative Media & Branding Services — Hill City Media"
        description="Explore Hill City Media's creative services including printing, digital marketing, videography, media production and corporate identity solutions."
        path="/services"
      />

      <ServicesHero />
      <ServicesOverview />
      <ServicesWhyChoose />
      <ServicesProcess />
      <CTA />
    </main>
  );
}