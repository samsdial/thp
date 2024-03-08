import React from "react";

function AboutSection() {
  return (
    <>
      <section className="pb-0" id="about">
        <div className="container">
          <div className="row">
            <div className="col-12 py-3" data-aos="fade-right">
              <div
                className="bg-holder bg-size"
                style={{
                  backgroundImage: "url(assets/img/gallery/about-us.png)",
                  backgroundPosition: "top center",
                  backgroundSize: "contain",
                }}
              ></div>
              <h1 className="text-center text-uppercase">Nosotros</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div
          className="bg-holder bg-size"
          style={{
            backgroundImage: "url(assets/img/gallery/about-bg.png)",
            backgroundPosition: "top center",
            backgroundSize: "contain",
          }}
        ></div>

        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-md-6 order-lg-1 mb-5 mb-lg-0"
              data-aos="flip-right"
            >
              <img
                alt="..."
                className="fit-cover rounded-circle w-100"
                src="assets/img/gallery/health-care.png"
              />
            </div>

            <div className="col-md-6 text-center text-md-start">
              <h2 className="fw-bold mb-4" data-aos="fade-left">
                Servicio especializado
              </h2>

              <p data-aos="fade-left">
                Nuestros especialistas tienen más de 20 años de experiencia y
                conocimientos actualizados en las últimas técnicas y
                tratamientos para el cuidado de los pies. Además, nos aseguramos
                de brindar un trato amable y cercano a nuestros pacientes, para
                que se sientan seguros y cómodos en todo momento. Puedes confiar
                en nosotros para recibir la mejor atención y cuidado para tus
                pies.
              </p>

              <p data-aos="fade-left">
                <strong>
                  ¡Contáctanos para programar tu consulta y empezar a cuidar de
                  tus pies hoy mismo!.
                </strong>
              </p>

              <div className="py-3">
                <button
                  className="btn btn-lg btn-outline-primary rounded-pill"
                  data-aos="flip-right"
                  type="submit"
                >
                  ¡AGENDE SU CITA AHORA !
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
