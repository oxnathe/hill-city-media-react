import SEO from "../components/seo/SEO";

import PortfolioHero from "../components/sections/portfolio/PortfolioHero";
import FeaturedWork from "../components/sections/portfolio/FeaturedWork";
import PortfolioShowcase from "../components/sections/portfolio/PortfolioShowcase";
import CTA from "../components/sections/home/CTA";

export default function Portfolio() {
  return (
    <main className="overflow-hidden bg-white">
      <SEO
        title="Our Work — Hill City Media Portfolio"
        description="Explore selected branding, printing, digital marketing and creative media projects produced by Hill City Media."
        path="/portfolio"
      />

      <PortfolioHero />
      <FeaturedWork />
      <PortfolioShowcase />
      <CTA />
    </main>
  );
}