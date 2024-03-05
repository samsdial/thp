import Carousel from "./components/Carousel";
import EyeCare from "./components/EyeCare";
import Navbar from "./components/Navbar";
import ServiceSection from "./components/ServiceSection";

function App() {
  return (
    <main className="main">
      <Navbar />
      <Carousel />
      <ServiceSection />
      <EyeCare />
      {/* <HeroSection /> */}
      {/* <SpecialistsSection /> */}
      {/* <TestimonialSection /> */}
      {/* <ContactSection /> */}
      {/* <FotterSection /> */}
    </main>
  );
}

export default App;
