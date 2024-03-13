import React from "react";
import { AboutData } from "../Data/data";

function AboutSection() {
  const { AboutSection, BgSection, Content } = AboutData[0];

  return (
    <>
      {/* Sección Nosotros */}
      <section className="pb-0" id="about">
        <div className="container">
          <div className="row">
            <div className="col-12 py-3" data-aos="fade-right">
              <div
                className="bg-holder bg-size"
                style={AboutSection.style}
              ></div>
              <h1 className="text-center text-uppercase">
                {AboutSection.title}
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="bg-holder bg-size" style={BgSection.style}></div>
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-md-6 order-lg-1 mb-5 mb-lg-0"
              data-aos="flip-right"
            >
              <img
                alt="..."
                className="fit-cover rounded-circle w-100"
                src={Content.imageSrc}
              />
            </div>
            <div className="col-md-6 text-center text-md-start">
              <h2 className="fw-bold mb-4" data-aos="fade-left">
                {Content.heading}
              </h2>
              {Content.paragraphs.map((paragraph, index) => (
                <p key={index} data-aos="fade-left">
                  {paragraph}
                </p>
              ))}
              <div className="py-3">
                <button
                  className="btn btn-lg btn-outline-primary rounded-pill"
                  data-aos="flip-right"
                  type="submit"
                >
                  ¡AGENDE SU CITA AHORA!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
