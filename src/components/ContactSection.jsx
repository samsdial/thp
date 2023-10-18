import React from "react";
import DataSection from "./DatosSection";

function ContactSection() {
  return (
    <>
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-title text-center">
            <h2>Contacto</h2>
            <p>¿Tienes alguna pregunta o comentario? ¡Contáctanos!</p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-info">
                <h3>Información de Contacto</h3>
                <ul>
                  <li>
                    <i className="fas fa-map-marker-alt"></i> Dirección: Tu
                    Dirección, Ciudad, País
                  </li>
                  <li>
                    <i className="fas fa-phone"></i> Teléfono: +1 (123) 456-7890
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i> Correo Electrónico:
                    info@tudominio.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form">
                <h3>Envíanos un Mensaje</h3>
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Correo Electrónico"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Asunto"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Mensaje"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DataSection />
    </>
  );
}

export default ContactSection;
