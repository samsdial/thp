import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";

function OnicoTestimonials() {
  const testimonials = [
    {
      name: "María González",
      location: "Suba",
      text: "Sufrí durante meses con una uña encarnada. El tratamiento fue rápido, prácticamente sin dolor y los resultados fueron inmediatos. ¡Súper recomendado!",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      location: "Usaquén",
      text: "Excelente atención y profesionalismo. El tratamiento fue muy efectivo y me enseñaron cómo prevenir que vuelva a pasar.",
      rating: 5,
    },
    {
      name: "Andrea López",
      location: "Kennedy",
      text: "Llevaba años con problemas de uñas encarnadas recurrentes. Desde que me trataron aquí, no he vuelto a tener el problema. Gracias!",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className="text-warning">
        {index < rating ? <BsStarFill /> : <BsStar />}
      </span>
    ));
  };

  return (
    <section className="py-5" id="testimonios">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="fade-up">
            <h2 className="display-5 fw-bold text-primary mb-3">
              Lo Que Dicen Nuestros Pacientes
            </h2>
            <p className="lead text-muted">
              Testimonios reales de personas que recuperaron su bienestar
            </p>
          </div>
        </div>

        {/* Testimonios */}
        <div className="row g-4 mb-5">
          {testimonials.map((testimonial, index) => (
            <div
              className="col-md-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="card h-100 border-0 shadow-sm"
                style={{ transition: "transform 0.3s ease" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div className="card-body p-4">
                  <div className="mb-3">{renderStars(testimonial.rating)}</div>
                  <p className="card-text text-muted mb-4">
                    "{testimonial.text}"
                  </p>
                  <div className="d-flex align-items-center">
                    <div
                      className="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white fw-bold me-3"
                      style={{ width: "50px", height: "50px" }}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                      <small className="text-muted">
                        {testimonial.location}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Credibilidad */}
        <div className="row" data-aos="fade-up">
          <div className="col-12">
            <div
              className="p-5 rounded-3 text-white text-center"
              style={{
                background: "linear-gradient(135deg, #8a5080 0%, #C5A7C1 100%)",
              }}
            >
              <h3
                className="fw-bold mb-4 text-white"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
              >
                Nuestra Experiencia Respalda Nuestro Trabajo
              </h3>
              <div className="row g-4">
                <div className="col-md-4">
                  <div
                    className="p-4 rounded-3"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  >
                    <div className="display-3 fw-bold mb-2">+10</div>
                    <h5 className="mb-0 ">Años de Experiencia</h5>
                    <p className="small mb-0 mt-2">
                      Especializados en podología
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="p-4 rounded-3"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  >
                    <div className="display-3 fw-bold mb-2">+5,000</div>
                    <h5 className="mb-0">Pacientes Atendidos</h5>
                    <p className="small mb-0 mt-2">
                      Con resultados satisfactorios
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="p-4 rounded-3"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  >
                    <div className="display-3 fw-bold mb-2">98%</div>
                    <h5 className="mb-0">Tasa de Éxito</h5>
                    <p className="small mb-0 mt-2">
                      En tratamientos de onicocriptosis
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h5
                  className="fw-bold mb-3 text-white"
                  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
                >
                  🏆 Certificaciones y Reconocimientos
                </h5>
                <div className="row justify-content-center">
                  <div className="col-auto">
                    <div className="badge bg-white text-primary p-3 mb-2">
                      Podólogos Certificados
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="badge bg-white text-primary p-3 mb-2">
                      Especialistas en Onicocriptosis
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="badge bg-white text-primary p-3 mb-2">
                      Técnicas Avanzadas
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="badge bg-white text-primary p-3 mb-2">
                      Atención Personalizada
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnicoTestimonials;
