import SEO from "../components/seo/SEO";

import PrintingHero from "../components/sections/printing/PrintingHero";
import PrintingServicesOverview from "../components/sections/printing/PrintingServicesOverview";
import PrintingCatalogue from "../components/sections/printing/PrintingCatalogue";

export default function PrintingServices() {
  return (
    <main>
      <SEO
        title="Printing Services in Nigeria — Hill City Media"
        description="Professional commercial and large format printing services from Hill City Media, delivering high-quality materials that help businesses present their brands with confidence."
        path="/services/printing"
      />

      <PrintingHero />
      <PrintingServicesOverview />
      <PrintingCatalogue />
    </main>
  );
}