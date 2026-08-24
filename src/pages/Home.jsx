import Hero from "../components/sections/home/Hero";
import Services from "../components/sections/home/Services";
import Portfolio from "../components/sections/home/Portfolio";
import AboutPreview from "../components/sections/home/AboutPreview";
import Process from "../components/sections/home/Process";
import Testimonials from "../components/sections/home/Testimonials";
import Brands from "../components/sections/home/Brands";
import CTA from "../components/sections/home/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <AboutPreview />
      <Process />
      <Testimonials />
      <Brands />
      <CTA />
    </main>
  );
}