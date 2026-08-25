import CorporateHero from "../components/sections/corporate/CorporateHero";
import CorporateServicesOverview from "../components/sections/corporate/CorporateServicesOverview";
import CorporateWhyChoose from "../components/sections/corporate/CorporateWhyChoose";
import CTA from "../components/sections/home/CTA";

export default function CorporateIdentity() {
  return (
    <main>
      <CorporateHero />

      <CorporateServicesOverview />

      <CorporateWhyChoose />

      <CTA />
    </main>
  );
}