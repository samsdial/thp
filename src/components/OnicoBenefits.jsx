import React from "react";

function OnicoBenefits() {
  return (
    <section className="py-5 bg-light" id="beneficios">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold text-primary">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="lead text-muted">
              Somos expertos en el tratamiento de onicocriptosis en Bogotá
            </p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-3" data-aos="fade-up">
            <div
              className="card h-100 border-0 shadow-sm text-center p-4"
              style={{ transition: "transform 0.3s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "#E3F2FD",
                }}
              >
                <span style={{ fontSize: "2.5rem" }}>🎓</span>
              </div>
              <h5 className="card-title fw-bold">Especialistas Certificados</h5>
              <p className="card-text text-muted">
                Podólogos con años de experiencia en tratamientos de
                onicocriptosis
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              className="card h-100 border-0 shadow-sm text-center p-4"
              style={{ transition: "transform 0.3s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "#E8F5E9",
                }}
              >
                <span style={{ fontSize: "2.5rem" }}>💉</span>
              </div>
              <h5 className="card-title fw-bold">Tratamiento Sin Dolor</h5>
              <p className="card-text text-muted">
                Procedimientos modernos que minimizan las molestias
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              className="card h-100 border-0 shadow-sm text-center p-4"
              style={{ transition: "transform 0.3s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "#FFF3E0",
                }}
              >
                <span style={{ fontSize: "2.5rem" }}>⏱️</span>
              </div>
              <h5 className="card-title fw-bold">Resultados Rápidos</h5>
              <p className="card-text text-muted">
                Alivio inmediato del dolor y recuperación acelerada
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div
              className="card h-100 border-0 shadow-sm text-center p-4"
              style={{ transition: "transform 0.3s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "#FCE4EC",
                }}
              >
                <span style={{ fontSize: "2.5rem" }}>💰</span>
              </div>
              <h5 className="card-title fw-bold">Precios Accesibles</h5>
              <p className="card-text text-muted">
                Opciones de pago flexibles y planes de tratamiento
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnicoBenefits;

