import React from "react";
import { BsWhatsapp } from "react-icons/bs";

function OnicoHero() {
  const whatsappNumber = "573168179876";
  const whatsappMessage =
    "Hola, quiero agendar una consulta para tratamiento de onicocriptosis";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      className="py-5 mt-5"
      style={{
        background: "linear-gradient(135deg, #8a5080 0%, #C5A7C1 100%)",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 mx-auto text-center">
            {/* Titular Principal */}
            <h1
              className="display-3 text-white fw-bold mb-4"
              data-aos="fade-down"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
            >
              Onicocriptosis en Bogotá
            </h1>
            <h2
              className="display-6 text-white mb-5"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Consulta con Especialista
            </h2>

            {/* Beneficios Clave */}
            <div
              className="row g-4 mb-5 text-white"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="col-md-4">
                <div
                  className="p-4 rounded-3"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <div className="display-4 mb-3">✓</div>
                  <h5 className="fw-bold">Diagnóstico Profesional</h5>
                  <p className="mb-0">
                    Evaluación completa por especialistas certificados
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="p-4 rounded-3"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <div className="display-4 mb-3">✓</div>
                  <h5 className="fw-bold">Tratamiento Comprobado</h5>
                  <p className="mb-0">
                    Técnicas avanzadas con resultados garantizados
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="p-4 rounded-3"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <div className="display-4 mb-3">✓</div>
                  <h5 className="fw-bold">Primera Consulta Disponible Hoy</h5>
                  <p className="mb-0">
                    Agenda tu cita de inmediato y empieza tu tratamiento
                  </p>
                </div>
              </div>
            </div>

            {/* Botón CTA Principal */}
            <div data-aos="zoom-in" data-aos-delay="300">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg px-5 py-3 text-white fw-bold"
                style={{
                  backgroundColor: "#25D366",
                  fontSize: "1.3rem",
                  borderRadius: "50px",
                  boxShadow: "0 8px 20px rgba(37, 211, 102, 0.4)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.boxShadow =
                    "0 12px 30px rgba(37, 211, 102, 0.6)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow =
                    "0 8px 20px rgba(37, 211, 102, 0.4)";
                }}
              >
                <BsWhatsapp className="me-2" size={30} />
                AGENDAR CONSULTA AHORA
              </a>
              <p className="text-white mt-3 mb-0">
                <small>⚡ Respuesta inmediata • 📅 Citas disponibles hoy</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnicoHero;
