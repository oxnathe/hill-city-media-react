import SEO from "../components/seo/SEO";

import AboutHero from "../components/sections/about/AboutHero";
import AboutStory from "../components/sections/about/AboutStory";
import AboutWhatWeDo from "../components/sections/about/AboutWhatWeDo";
import AboutWhyChoose from "../components/sections/about/AboutWhyChoose";
import AboutProcess from "../components/sections/about/AboutProcess";
import AboutStats from "../components/sections/about/AboutStats";

import CTA from "../components/sections/home/CTA";

export default function About() {
  return (
    <main>
      <SEO
        title="About Hill City Media — Creative Media & Branding Agency"
        description="Learn about Hill City Media, a creative media and branding agency helping businesses build stronger brands through printing, digital marketing, videography, corporate identity and visual communication."
        path="/about"
      />

      <AboutHero />
      <AboutStory />
      <AboutWhatWeDo />
      <AboutWhyChoose />
      <AboutProcess />
      <AboutStats />
      <CTA />
    </main>
  );
}