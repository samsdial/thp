import React from "react";

function SpecialistsSection() {
  const specialists = [
    {
      name: "Dr. Juan Pérez",
      specialty: "Cirugía de Juanetes",
      image: "specialist-1.jpg",
    },
    {
      name: "Dra. María Rodríguez",
      specialty: "Tratamiento de Hongos",
      image: "specialist-2.jpg",
    },
    {
      name: "Dr. Carlos Sánchez",
      specialty: "Ortopedia Podológica",
      image: "specialist-3.jpg",
    },
  ];

  return (
    <section id="specialists" className="specialists-section">
      <div className="container">
        <div className="section-title text-center">
          <h2>Nuestros Especialistas</h2>
          <p>Conoce a nuestro equipo de especialistas en podología.</p>
        </div>
        <div className="row">
          {specialists.map((specialist, index) => (
            <div className="col-lg-4" key={index}>
              <div className="specialist-item">
                <div className="specialist-image">
                  {/* <img
                    src={`assets/img/${specialist.image}`}
                    alt={specialist.name}
                  /> */}
                </div>
                <h3 className="specialist-name">{specialist.name}</h3>
                <p className="specialist-specialty">{specialist.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpecialistsSection;
