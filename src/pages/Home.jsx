import SEO from "../components/seo/SEO";

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
      <SEO
        title="Hill City Media — We Elevate Brands"
        description="Hill City Media is a creative media and branding agency providing printing, digital marketing, videography, corporate identity, and visual communication solutions."
        path="/"
      />

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