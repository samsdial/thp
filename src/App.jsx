import "./App.css";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ServiceSection from "./components/ServiceSection";
import SpecialistsSection from "./components/SpecialistsSection";
import TestimonialSection from "./components/TestimonialSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <SpecialistsSection />
      <TestimonialSection />
      <ContactSection />
    </div>
  );
}

export default App;
