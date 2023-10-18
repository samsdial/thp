import ContactSection from "./components/ContactSection";
import FotterSection from "./components/FotterSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ServiceSection from "./components/ServiceSection";
import SpecialistsSection from "./components/SpecialistsSection";
import TestimonialSection from "./components/TestimonialSection";

function App() {
  return (
    <main className="main">
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <SpecialistsSection />
      <TestimonialSection />
      <ContactSection />
      <FotterSection />
    </main>
  );
}

export default App;
