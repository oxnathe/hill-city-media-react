import PrintingHero from "../components/sections/printing/PrintingHero";
import PrintingServicesOverview from "../components/sections/printing/PrintingServicesOverview";
import PrintingWhyChoose from "../components/sections/printing/PrintingWhyChoose";
import CTA from "../components/sections/home/CTA";

export default function PrintingServices() {
  return (
    <main>
      <PrintingHero />

      <PrintingServicesOverview />

      <PrintingWhyChoose />

      <CTA />
    </main>
  );
}