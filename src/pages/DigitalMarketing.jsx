import DigitalHero from "../components/sections/digital/DigitalHero";
import DigitalServicesOverview from "../components/sections/digital/DigitalServicesOverview";
import DigitalWhyChoose from "../components/sections/digital/DigitalWhyChoose";
import CTA from "../components/sections/home/CTA";

export default function DigitalMarketing() {
  return (
    <main>
      <DigitalHero />
      <DigitalServicesOverview />
      <DigitalWhyChoose />
      <CTA />
    </main>
  );
}