import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import VenueSection from "./components/Venue";
import { StarsCanvas } from "./components/canvas";
import LastYearEventPage from "./pages/LastYearEventPage";

const HomePage = () => (
  <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <VenueSection />
    <div className="relative z-0">
      <Contact />
      {/* <StarsCanvas /> */}
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ncicps2025" element={<LastYearEventPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
