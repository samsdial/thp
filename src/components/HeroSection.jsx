import React from "react";
import hero from "../assets/gallery/hero.png";

function HeroSection() {
  return (
    <>
      <div
        className="bg-holder bg-size"
        style={{
          backgroundImage: hero,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      ></div>
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2"></div>
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
