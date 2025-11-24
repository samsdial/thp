import React from "react";

function OnicoInfo() {
  return (
    <section className="py-5" id="informacion">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="fade-up">
            <h2 className="display-5 fw-bold text-primary mb-3">
              Todo Sobre la Onicocriptosis
            </h2>
            <p className="lead text-muted">
              Información completa sobre el tratamiento de uñas encarnadas
            </p>
          </div>
        </div>

        {/* ¿Qué es onicocriptosis? */}
        <div className="row mb-5 align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="pe-lg-4">
              <h3 className="h2 fw-bold mb-4">¿Qué es la Onicocriptosis?</h3>
              <p className="text-muted mb-3" style={{ fontSize: "1.1rem" }}>
                La onicocriptosis, comúnmente conocida como{" "}
                <strong>uña encarnada</strong>, es una condición dolorosa donde
                el borde de la uña crece dentro de la piel del dedo.
              </p>
              <p className="text-muted mb-3" style={{ fontSize: "1.1rem" }}>
                Esta afección es más común en los dedos gordos de los pies y
                puede causar:
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <span className="text-danger fw-bold">•</span> Dolor intenso
                  al caminar
                </li>
                <li className="mb-2">
                  <span className="text-danger fw-bold">•</span> Enrojecimiento
                  e hinchazón
                </li>
                <li className="mb-2">
                  <span className="text-danger fw-bold">•</span> Infección y
                  supuración
                </li>
                <li className="mb-2">
                  <span className="text-danger fw-bold">•</span> Dificultad para
                  usar calzado
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div
              className="p-5 rounded-3 shadow-lg"
              style={{
                backgroundColor: "#F0F4F9",
                border: "3px solid #283779",
              }}
            >
              <h4 className="fw-bold mb-3 text-primary">
                ⚠️ Causas Principales
              </h4>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong>Corte inadecuado de uñas:</strong> Cortarlas muy
                  cortas o en forma redondeada
                </li>
                <li className="mb-3">
                  <strong>Calzado ajustado:</strong> Zapatos que comprimen los
                  dedos
                </li>
                <li className="mb-3">
                  <strong>Lesiones:</strong> Golpes o traumas en los dedos
                </li>
                <li className="mb-3">
                  <strong>Factores genéticos:</strong> Forma natural de las uñas
                </li>
                <li className="mb-3">
                  <strong>Hiperhidrosis:</strong> Exceso de sudoración en los
                  pies
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Síntomas y Diagnóstico */}
        <div className="row mb-5 align-items-center flex-lg-row-reverse">
          <div className="col-lg-6" data-aos="fade-left">
            <div className="ps-lg-4">
              <h3 className="h2 fw-bold mb-4">Síntomas y Señales de Alerta</h3>
              <p className="text-muted mb-4" style={{ fontSize: "1.1rem" }}>
                Es importante identificar los síntomas a tiempo para evitar
                complicaciones:
              </p>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="p-3 rounded-3 bg-warning bg-opacity-10 border-start border-warning border-4 h-100">
                    <h5 className="fw-bold">Etapa Inicial</h5>
                    <ul className="small mb-0">
                      <li>Sensibilidad al tacto</li>
                      <li>Leve enrojecimiento</li>
                      <li>Molestia al caminar</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 rounded-3 bg-danger bg-opacity-10 border-start border-danger border-4">
                    <h5 className="fw-bold text-white">Etapa Avanzada</h5>
                    <ul className="small mb-0 text-white">
                      <li>Dolor intenso constante</li>
                      <li>Inflamación severa</li>
                      <li>Pus o secreción</li>
                      <li>Dificultad para caminar</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-right">
            <div
              className="p-5 rounded-3 text-white"
              style={{
                background: "linear-gradient(135deg, #8a5080 0%, #C5A7C1 100%)",
              }}
            >
              <h4 className="fw-bold mb-4 text-white">
                🩺 Nuestro Diagnóstico Incluye:
              </h4>
              <div className="d-flex align-items-start mb-3">
                <span className="me-3" style={{ fontSize: "1.5rem" }}>
                  ✓
                </span>
                <div>
                  <strong>Evaluación visual completa</strong>
                  <p className="mb-0 small">
                    Examen detallado de la uña y área afectada
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-3">
                <span className="me-3" style={{ fontSize: "1.5rem" }}>
                  ✓
                </span>
                <div>
                  <strong>Análisis de severidad</strong>
                  <p className="mb-0 small">
                    Determinación del grado de afectación
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-3">
                <span className="me-3" style={{ fontSize: "1.5rem" }}>
                  ✓
                </span>
                <div>
                  <strong>Identificación de causas</strong>
                  <p className="mb-0 small">
                    Evaluación de factores contribuyentes
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <span className="me-3" style={{ fontSize: "1.5rem" }}>
                  ✓
                </span>
                <div>
                  <strong>Plan de tratamiento personalizado</strong>
                  <p className="mb-0 small">
                    Según tus necesidades específicas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cómo es el tratamiento */}
        <div className="row">
          <div className="col-12" data-aos="fade-up">
            <div className="bg-light p-5 rounded-3">
              <h3 className="h2 fw-bold mb-4 text-center text-primary">
                Nuestro Tratamiento Profesional
              </h3>
              <div className="row g-4">
                <div className="col-md-3">
                  <div className="text-center">
                    <div
                      className="mx-auto mb-3 d-flex align-items-center justify-content-center fw-bold text-white"
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        backgroundColor: "#283779",
                        fontSize: "1.5rem",
                      }}
                    >
                      1
                    </div>
                    <h5 className="fw-bold mb-2">Evaluación Inicial</h5>
                    <p className="text-muted small">
                      Examen completo y diagnóstico profesional
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="text-center">
                    <div
                      className="mx-auto mb-3 d-flex align-items-center justify-content-center fw-bold text-white"
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        backgroundColor: "#1B71A1",
                        fontSize: "1.5rem",
                      }}
                    >
                      2
                    </div>
                    <h5 className="fw-bold mb-2">Tratamiento Conservador</h5>
                    <p className="text-muted small">
                      Espiculectomía y cuidado de la uña afectada
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="text-center">
                    <div
                      className="mx-auto mb-3 d-flex align-items-center justify-content-center fw-bold text-white"
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        backgroundColor: "#30A64A",
                        fontSize: "1.5rem",
                      }}
                    >
                      3
                    </div>
                    <h5 className="fw-bold mb-2">Seguimiento</h5>
                    <p className="text-muted small">
                      Control de evolución y cuidados preventivos
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="text-center">
                    <div
                      className="mx-auto mb-3 d-flex align-items-center justify-content-center fw-bold text-white"
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        backgroundColor: "#0DAFCA",
                        fontSize: "1.5rem",
                      }}
                    >
                      4
                    </div>
                    <h5 className="fw-bold mb-2">Prevención</h5>
                    <p className="text-muted small">
                      Educación para evitar recurrencias futuras
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 p-4 bg-white rounded-3 shadow-sm">
                <h5 className="fw-bold mb-3 text-center">
                  💡 Técnicas Avanzadas que Utilizamos
                </h5>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        ✅ <strong>Ortonixia:</strong> Corrección con ortesis
                      </li>
                      <li className="mb-2">
                        ✅ <strong>Espiculectomía:</strong> Eliminación del
                        fragmento encarnado
                      </li>
                      <li className="mb-2">
                        ✅ <strong>Matricectomía parcial:</strong> En casos
                        recurrentes
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        ✅ <strong>Láser terapéutico:</strong> Para reducir
                        inflamación
                      </li>
                      <li className="mb-2">
                        ✅ <strong>Tratamiento preventivo:</strong> Reeducación
                        de la uña
                      </li>
                      <li className="mb-2">
                        ✅ <strong>Cuidados post-tratamiento:</strong>{" "}
                        Seguimiento completo
                      </li>
                    </ul>
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

export default OnicoInfo;
