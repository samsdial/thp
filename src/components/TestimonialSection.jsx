import React from "react";

function TestimonialSection() {
  const testimonials = [
    {
      author: "Ana García",
      quote:
        "El servicio es excelente. El personal es muy amable y profesional.",
    },
    {
      author: "Pedro López",
      quote:
        "Mi experiencia aquí ha sido increíble. Los resultados son notables.",
    },
    {
      author: "Laura Martínez",
      quote:
        "Recomendaría esta clínica a cualquiera que necesite tratamiento podológico.",
    },
  ];

  return (
    <section id="testimonials" className="testimonial-section">
      <div className="container">
        <div className="section-title text-center">
          <h2>Testimonios de Clientes</h2>
          <p>Lo que nuestros clientes satisfechos dicen sobre nosotros.</p>
        </div>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-lg-4" key={index}>
              <div className="testimonial-item">
                <p className="testimonial-quote">{testimonial.quote}</p>
                <p className="testimonial-author">- {testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
