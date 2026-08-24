import ServicesHero from "../components/sections/services/ServicesHero";
import ServicesOverview from "../components/sections/services/ServicesOverview";
import ServicesWhyChoose from "../components/sections/services/ServicesWhyChoose";
import ServicesProcess from "../components/sections/services/ServicesProcess";
import CTA from "../components/sections/home/CTA";

export default function Services() {
  return (
    <main>
      <ServicesHero />
      <ServicesOverview />
      <ServicesWhyChoose />
      <ServicesProcess />
      <CTA />
    </main>
  );
}