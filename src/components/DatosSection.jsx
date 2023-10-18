import React from "react";

function DataSection() {
  return (
    <div className="container pt-5">
      <div className="row">
        <div
          className="col-12 col-sm-12 col-lg-3 mb-5 mb-lg-0 aos-init aos-animate"
          data-aos="fade-up"
        >
          <h5 className="fw-bold mb-4">Horario</h5>
          <p>Lunes - Sábado / 7:00 – 19:00</p>
          <a
            href="https://wa.me/573506503396?text=¡Recupera%20la%20salud%20de%20tus%20pies!%20Pregunta%20ya%20cómo%20agendar%20tu%20cita%20hoy%20mismo.%20Quiero%20agendar%20mi%20cita."
            target="_blank"
          >
            <span className="badge rounded-pill bg-secondary w-100">
              ¡ Contacta a un especialista !
            </span>
          </a>
        </div>

        <div
          className="col-12 col-sm-12 col-lg-5 mb-5 mb-lg-0 aos-init aos-animate"
          data-aos="fade-down"
        >
          <h5 className="fw-bold mb-4">Dirección</h5>
          <p>
            <a href="https://goo.gl/maps/wV154JB3mfVPjPKs9" target="_blank">
              Transversal 60 #115-58 Calle 116 con Av Suba
              <br />
              Centro Comercial Ilarco Torre A Consultorio 504, Bogotá,
              Cundinamarca
            </a>
          </p>
        </div>

        <div
          className="col-12 col-sm-12 col-lg-4 mb-5 mb-lg-0 aos-init aos-animate"
          data-aos="fade-up"
        >
          <h5 className="fw-bold mb-4">Llamanos</h5>
          <ul>
            <li>
              <a href="tel:+573506503396">Cel: 57+ 350 650 3396 </a>
            </li>
            <li>
              <a href="tel:+573222915087">Cel: 57+ 322 291 5087</a>
            </li>
            <li>
              Email:{" "}
              <a href="mailto:therapiesbog@gmail.com">therapiesbog@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DataSection;
