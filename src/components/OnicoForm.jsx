import { track } from "@vercel/analytics";
import React, { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";

function OnicoForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    localidad: "",
    horario: "",
    problema: "",
  });

  const whatsappNumber = "573506503396";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Rastrear envío de formulario con Vercel Analytics
    track("Formulario Onicocriptosis Enviado", {
      localidad: formData.localidad,
      horario: formData.horario,
    });

    // Rastrear conversión en Google Ads
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-663189947/CONVERSION_LABEL", // Reemplazar CONVERSION_LABEL cuando Google Ads lo proporcione
        event_callback: () => {
          console.log("Conversión registrada en Google Ads");
        },
      });
    }

    // Crear mensaje para WhatsApp
    const mensaje = `
🦶 *Nueva Consulta - Onicocriptosis*

📝 *Nombre:* ${formData.nombre}
📞 *Teléfono:* ${formData.telefono}
📍 *Localidad:* ${formData.localidad}
⏰ *Mejor Horario:* ${formData.horario}
🩺 *Problema:* ${formData.problema}
    `.trim();

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      mensaje
    )}`;

    // Redirigir a WhatsApp
    window.open(whatsappLink, "_blank");

    // Opcional: También enviar a Google Sheets
    setLoading(true);
    const form = document.querySelector("form");
    const formDataObj = new FormData(form);

    fetch(
      "https://script.google.com/macros/s/AKfycbysXkQ86H_i2kOeEmcrtucJ5GmXtxLlsFZ0F977ZidycJVWbygbaQnbepUWISmvr3Rstg/exec",
      {
        method: "POST",
        body: formDataObj,
      }
    )
      .then((res) => res.text())
      .then((data) => {
        setResponseMessage(
          "✅ ¡Formulario enviado! Te contactaremos pronto por WhatsApp."
        );
        setFormSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        setResponseMessage(
          "Solicitud enviada a WhatsApp. ¡Nos pondremos en contacto contigo!"
        );
        setFormSubmitted(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          nombre: "",
          telefono: "",
          localidad: "",
          horario: "",
          problema: "",
        });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  return (
    <section className="py-5 bg-light" id="formulario">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
            <h2 className="display-5 fw-bold mb-4">Agenda Tu Consulta</h2>
            <p className="lead text-muted mb-4">
              Completa el formulario y nos pondremos en contacto contigo de
              inmediato para agendar tu cita.
            </p>

            <div className="mb-4">
              <h4 className="fw-bold mb-3">📍 Nuestras Ubicaciones</h4>
              <div className="mb-3">
                <p className="mb-1">
                  <strong>Suba</strong>
                </p>
                <p className="text-muted small">
                  Atención domiciliaria disponible
                </p>
              </div>
              <div className="mb-3">
                <p className="mb-1">
                  <strong>Usaquén</strong>
                </p>
                <p className="text-muted small">Consultorio especializado</p>
              </div>
              <div className="mb-3">
                <p className="mb-1">
                  <strong>Otras localidades</strong>
                </p>
                <p className="text-muted small">
                  Consulta disponibilidad en tu zona
                </p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-3 shadow-sm">
              <h5 className="fw-bold mb-3">⏰ Horarios de Atención</h5>
              <p className="mb-2">
                <strong>Lunes a Viernes:</strong> 8:00 AM - 6:00 PM
              </p>
              <p className="mb-2">
                <strong>Sábados:</strong> 9:00 AM - 2:00 PM
              </p>
              <p className="mb-0 text-muted small">
                *Citas urgentes disponibles previa consulta
              </p>
            </div>

            <div
              className="mt-4 p-4 rounded-3"
              style={{ backgroundColor: "#E3F2FD" }}
            >
              <h5 className="fw-bold mb-2">💬 Contacto Directo por WhatsApp</h5>
              <p className="mb-3 small">
                ¿Prefieres contactarnos directamente? Escríbenos ahora:
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  "Hola, necesito información sobre tratamiento de onicocriptosis"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-lg w-100"
              >
                <BsWhatsapp className="me-2" />
                Chatear por WhatsApp
              </a>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div className="card border-0 shadow-lg">
              <div
                className="card-header text-white text-center py-3"
                style={{
                  background:
                    "linear-gradient(135deg, #8a5080 0%, #C5A7C1 100%)",
                }}
              >
                <h4
                  className="mb-0 fw-bold text-white"
                  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
                >
                  Formulario de Agendamiento
                </h4>
              </div>
              <div className="card-body p-4">
                {formSubmitted ? (
                  <div className="text-center py-5">
                    <div
                      className="mx-auto mb-4 d-flex align-items-center justify-content-center"
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        backgroundColor: "#30A64A",
                      }}
                    >
                      <span style={{ fontSize: "3rem" }}>✓</span>
                    </div>
                    <h5 className="text-success fw-bold">{responseMessage}</h5>
                  </div>
                ) : loading ? (
                  <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Enviando...</span>
                    </div>
                    <p className="mt-3">Enviando tu solicitud...</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="nombre" className="form-label fw-bold">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        className="form-control border-0 bg-light"
                        id="nombre"
                        name="nombre"
                        placeholder="Ingresa tu nombre completo"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="telefono" className="form-label fw-bold">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        className="form-control border-0 bg-light"
                        id="telefono"
                        name="telefono"
                        placeholder="+57 300 123 4567"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="localidad" className="form-label fw-bold">
                        Localidad / Zona *
                      </label>
                      <select
                        className="form-select border-0 bg-light"
                        id="localidad"
                        name="localidad"
                        value={formData.localidad}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Seleccione su localidad</option>
                        <option value="Suba">Suba</option>
                        <option value="Usaquén">Usaquén</option>
                        <option value="Chapinero">Chapinero</option>
                        <option value="Santa Fe">Santa Fe</option>
                        <option value="San Cristóbal">San Cristóbal</option>
                        <option value="Usme">Usme</option>
                        <option value="Tunjuelito">Tunjuelito</option>
                        <option value="Bosa">Bosa</option>
                        <option value="Kennedy">Kennedy</option>
                        <option value="Fontibón">Fontibón</option>
                        <option value="Engativá">Engativá</option>
                        <option value="Barrios Unidos">Barrios Unidos</option>
                        <option value="Teusaquillo">Teusaquillo</option>
                        <option value="Los Mártires">Los Mártires</option>
                        <option value="Antonio Nariño">Antonio Nariño</option>
                        <option value="Puente Aranda">Puente Aranda</option>
                        <option value="Candelaria">Candelaria</option>
                        <option value="Rafael Uribe Uribe">
                          Rafael Uribe Uribe
                        </option>
                        <option value="Ciudad Bolívar">Ciudad Bolívar</option>
                        <option value="Otra">Otra / Alrededores</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="horario" className="form-label fw-bold">
                        Mejor Horario para Contacto *
                      </label>
                      <select
                        className="form-select border-0 bg-light"
                        id="horario"
                        name="horario"
                        value={formData.horario}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Seleccione un horario</option>
                        <option value="Mañana (8AM - 12PM)">
                          Mañana (8AM - 12PM)
                        </option>
                        <option value="Tarde (12PM - 4PM)">
                          Tarde (12PM - 4PM)
                        </option>
                        <option value="Tarde-Noche (4PM - 6PM)">
                          Tarde-Noche (4PM - 6PM)
                        </option>
                        <option value="Cualquier horario">
                          Cualquier horario
                        </option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="problema" className="form-label fw-bold">
                        Describe tu Problema *
                      </label>
                      <select
                        className="form-select border-0 bg-light"
                        id="problema"
                        name="problema"
                        value={formData.problema}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Seleccione su problema</option>
                        <option value="Uña encarnada (Onicocriptosis)">
                          Uña encarnada (Onicocriptosis)
                        </option>
                        <option value="Hongos en las uñas">
                          Hongos en las uñas
                        </option>
                        <option value="Ambos problemas">Ambos problemas</option>
                        <option value="Otro problema podológico">
                          Otro problema podológico
                        </option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-lg btn-primary rounded-pill order-1 order-lg-0 aos-init aos-animate"
                      style={{
                        width: "100%",
                      }}
                    >
                      <BsWhatsapp className="me-2" />
                      Enviar y Contactar por WhatsApp
                    </button>

                    <p className="text-center text-muted small mt-3 mb-0">
                      Al enviar, aceptas que te contactemos para agendar tu cita
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnicoForm;
