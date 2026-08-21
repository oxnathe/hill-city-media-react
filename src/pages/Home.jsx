import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Portfolio from "../components/sections/Portfolio";
import AboutPreview from "../components/sections/AboutPreview";
import Process from "../components/sections/Process";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <AboutPreview />
      <Process />
    </main>
  );
}