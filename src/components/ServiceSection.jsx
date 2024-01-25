import React from "react";

function ServiceSection() {
  const services = [
    {
      title: "Tratamiento de Hongos",
      description:
        "Ofrecemos tratamientos efectivos para hongos en las uñas y la piel.",
      icon: "icon-service-1.png",
    },
    {
      title: "Cirugía de Juanetes",
      description:
        "Especializados en cirugía de juanetes para mejorar la salud de tus pies.",
      icon: "icon-service-2.png",
    },
    {
      title: "Ortopedia Podológica",
      description:
        "Diseñamos plantillas ortopédicas personalizadas para tu comodidad.",
      icon: "icon-service-3.png",
    },
  ];

  return (
    <section id="services" className="service-section">
      <div className="container">
        <div className="section-title text-center">
          <h2>Nuestros Servicios</h2>
          <p>Descubre los servicios de podología que ofrecemos.</p>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-4" key={index}>
              <div className="service-item">
                <div className="service-icon">
                  {/* <img src={`assets/img/${service.icon}`} alt={service.title} /> */}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
