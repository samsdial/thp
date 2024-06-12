import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import AboutSection from "./components/AboutSection";
import Carousel from "./components/Carousel";
import EyeCare from "./components/EyeCare";
import FloatIcon from "./components/FloatIcon";
import FooterSection from "./components/FooterSection";
import GallerySection from "./components/GallerySection";
import Navbar from "./components/Navbar";
import ServiceSection from "./components/ServiceSection";
import SpecialistSection from "./components/SpecialistSection";
import TestimonySection from "./components/TestimonySection";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <main className="main">
      <Navbar />
      <Carousel />
      <ServiceSection />
      <EyeCare />
      <AboutSection />
      <SpecialistSection />
      <TestimonySection />
      <GallerySection />
      {/* <ContactSection /> */}
      <FooterSection />
      <FloatIcon />
    </main>
  );
}

export default Home;
