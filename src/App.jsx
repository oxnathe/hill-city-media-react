import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import PrintingServices from "./pages/PrintingServices";
import DigitalMarketing from "./pages/DigitalMarketing";
import Videography from "./pages/Videography";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

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
      </Routes>

      <Footer />
    </>
  );
}