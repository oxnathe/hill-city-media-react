import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

import PrintingServices from "./pages/PrintingServices";
import DigitalMarketing from "./pages/DigitalMarketing";
import Videography from "./pages/Videography";
import CorporateIdentity from "./pages/CorporateIdentity";

import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Services */}
        <Route path="/services" element={<Services />} />

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

      <Footer />
    </>
  );
}