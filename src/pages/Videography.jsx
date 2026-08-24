import VideographyHero from "../components/sections/videography/VideographyHero";
import VideographyServicesOverview from "../components/sections/videography/VideographyServicesOverview";
import VideographyWhyChoose from "../components/sections/videography/VideographyWhyChoose";
import CTA from "../components/sections/home/CTA";

export default function Videography() {
  return (
    <main>
      <VideographyHero />
      <VideographyServicesOverview />
      <VideographyWhyChoose />
      <CTA />
    </main>
  );
}