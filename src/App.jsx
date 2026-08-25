import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import StructuredData from "./components/seo/StructuredData";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));

const PrintingServices = lazy(
  () => import("./pages/PrintingServices")
);

const DigitalMarketing = lazy(
  () => import("./pages/DigitalMarketing")
);

const Videography = lazy(
  () => import("./pages/Videography")
);

const CorporateIdentity = lazy(
  () => import("./pages/CorporateIdentity")
);

const Portfolio = lazy(
  () => import("./pages/Portfolio")
);

const Contact = lazy(
  () => import("./pages/Contact")
);

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-white">
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 animate-pulse rounded-full bg-[#e50914]" />
        <span className="h-2 w-2 animate-pulse rounded-full bg-[#ffd400] [animation-delay:150ms]" />
        <span className="h-2 w-2 animate-pulse rounded-full bg-[#080808] [animation-delay:300ms]" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <StructuredData />

      <Navbar />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* About */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* Services */}
          <Route
            path="/services"
            element={<Services />}
          />

          {/* Service Pages */}
          <Route
            path="/services/printing"
            element={<PrintingServices />}
          />

          <Route
            path="/services/digital-marketing"
            element={<DigitalMarketing />}
          />

          <Route
            path="/services/videography"
            element={<Videography />}
          />

          <Route
            path="/services/corporate-identity"
            element={<CorporateIdentity />}
          />

          {/* Portfolio */}
          <Route
            path="/portfolio"
            element={<Portfolio />}
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}