import React from "react";
import heroBg from "../assets/gallery/hero-bg.png";
import hero from "../assets/gallery/hero.png";

function HeroSection() {
  return (
    <>
      <div
        className="bg-holder bg-size"
        style={{
          backgroundImage: heroBg,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      ></div>
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="hero-content">
                <h1 className="hero-title">
                  Bienvenido a nuestra clínica podológica
                </h1>
                <p className="hero-subtitle">
                  Recupera la salud de tus pies con la atención de nuestros
                  especialistas.
                </p>
                <a
                  href="#contact"
                  className="btn btn-primary btn-lg rounded-pill"
                >
                  Contáctanos
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="hero-image">
                <img src={hero} alt="Podología" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
