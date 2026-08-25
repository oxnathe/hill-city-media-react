import PortfolioHero from "../components/sections/portfolio/PortfolioHero";
import FeaturedWork from "../components/sections/portfolio/FeaturedWork";
import PortfolioShowcase from "../components/sections/portfolio/PortfolioShowcase";
import CTA from "../components/sections/home/CTA";

export default function Portfolio() {
  return (
    <main className="overflow-hidden bg-white">
      <PortfolioHero />
      <FeaturedWork />
      <PortfolioShowcase />
      <CTA />
    </main>
  );
}