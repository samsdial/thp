import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import FloatIcon from "./components/FloatIcon";
import FooterSection from "./components/FooterSection";
import GoogleAdsTag from "./components/GoogleAdsTag";
import Navbar from "./components/Navbar";
import OnicoBenefits from "./components/OnicoBenefits";
import OnicoForm from "./components/OnicoForm";
import OnicoHero from "./components/OnicoHero";
import OnicoInfo from "./components/OnicoInfo";
import OnicoTestimonials from "./components/OnicoTestimonials";
import SEOHead from "./components/SEOHead";

function Onicocriptosis() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <main className="main">
      <SEOHead
        title="Onicocriptosis en Bogotá - Tratamiento de Uñas Encarnadas | THERAPIES"
        description="Tratamiento profesional de onicocriptosis (uñas encarnadas) en Bogotá. Especialistas certificados, diagnóstico gratuito, primera consulta disponible hoy. ¡Agenda ahora!"
        keywords="onicocriptosis, uñas encarnadas, tratamiento uñas encarnadas Bogotá, podología Bogotá, uñas encarnadas Suba, uñas encarnadas Usaquén, tratamiento sin dolor, podólogo especialista"
      />
      <GoogleAdsTag conversionId="AW-663189947" />
      <Navbar />
      <OnicoHero />
      <OnicoBenefits />
      <OnicoInfo />
      <OnicoForm />
      <OnicoTestimonials />
      <FooterSection />
      <FloatIcon />
    </main>
  );
}

export default Onicocriptosis;
