import SEO from "../components/seo/SEO";

import VideographyHero from "../components/sections/videography/VideographyHero";
import VideographyServicesOverview from "../components/sections/videography/VideographyServicesOverview";
import VideographyWhyChoose from "../components/sections/videography/VideographyWhyChoose";
import CTA from "../components/sections/home/CTA";

export default function Videography() {
  return (
    <main>
      <SEO
        title="Videography & Media Production — Hill City Media"
        description="Professional videography and media production services for businesses, brands, campaigns and events from Hill City Media."
        path="/services/videography"
      />

      <VideographyHero />
      <VideographyServicesOverview />
      <VideographyWhyChoose />
      <CTA />
    </main>
  );
}