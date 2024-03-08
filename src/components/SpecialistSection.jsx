import React from "react";

function SpecialistsSection() {
  return (
    <>
      <section className="pb-0" id="especialist">
        <div className="container">
          <div className="row">
            <div className="col-12 py-3" data-aos="fade-right">
              <div
                className="bg-holder bg-size"
                style={{
                  backgroundImage: "url(assets/img/gallery/doctors-us.png)",
                  backgroundPosition: "top center",
                  backgroundSize: "contain",
                }}
              ></div>
              <h1 className="text-center text-uppercase">
                Nuestros Especialistas
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div
          className="bg-holder bg-size"
          style={{
            backgroundImage: "url(assets/img/gallery/doctors-bg.png)",
            backgroundPosition: "top center",
            backgroundSize: "contain",
          }}
        ></div>
        <div className="container">
          <div className="row flex-center">
            <div className="col-xl-10 px-0">
              <div
                className="carousel slide"
                data-bs-ride="carousel"
                id="carouselExampleDark"
              >
                <a
                  className="d-none carousel-control-prev carousel-icon z-index-2"
                  data-bs-slide="prev"
                  href="#carouselExampleDark"
                  role="button"
                >
                  <span className="visually-hidden">Previous</span>
                </a>
                <a
                  className="d-none carousel-control-next carousel-icon z-index-2"
                  data-bs-slide="next"
                  href="#carouselExampleDark"
                  role="button"
                >
                  <span className="visually-hidden">Next</span>
                </a>

                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    data-bs-interval="10000"
                  >
                    <div className="row h-100 m-lg-7 mx-3 mt-6 mx-md-4 my-md-7">
                      <div className="col-md-2 mb-8 mb-md-0"></div>

                      <div className="col-md-4 mb-8 mb-md-0">
                        <div
                          className="card card-span h-100 shadow"
                          data-aos="flip-left"
                        >
                          <div className="card-body d-flex flex-column flex-center py-5">
                            <img
                              alt="..."
                              src="assets/img/gallery/anita.png"
                              width="128"
                            />
                            <h3 className="mt-3">Paola Cobo Serna</h3>
                            <p className="mb-0 fs-xxl-1">
                              Podóloga - Fisioterapeuta
                            </p>
                            <p className="text-600 mb-4">
                              20 años de experiencia
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 mb-8 mb-md-0">
                        <div
                          className="card card-span h-100 shadow"
                          data-aos="flip-right"
                        >
                          <div className="card-body d-flex flex-column flex-center py-5">
                            <img
                              alt="..."
                              src="assets/img/gallery/jane.png"
                              width="128"
                            />
                            <h3 className="mt-3">Molly Rodríguez</h3>
                            <p className="mb-0 fs-xxl-1">
                              Podóloga - Fisioterapeuta
                            </p>
                            <p className="text-600 mb-4">
                              20 años de experiencia
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SpecialistsSection;
