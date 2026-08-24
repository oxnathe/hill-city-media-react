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