import React from "react";
import { SpecialistData } from "../Data/data";

function SpecialistSection() {
  const { SpecialistSection, SpeciaList } = SpecialistData[0];
  return (
    <>
      <section className="pb-0" id="especilist">
        <div className="container">
          <div className="row">
            <div className="col-12 py-3" data-aos="fade-right">
              <div
                className="bg-holder bg-size"
                style={SpecialistSection.style}
              ></div>
              <h1 className="text-center text-uppercase">
                {SpecialistSection.title}
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
          <div className="row h-100 m-lg-7 mx-3 mt-6 mx-md-4 my-md-7">
            <div className="col-md-2 mb-8 mb-md-0"></div>
            {SpeciaList.map((specialist, index) => (
              <div key={index} className="col-md-4 mb-8 mb-md-0">
                <div
                  className="card card-span h-100 shadow"
                  data-aos="flip-left"
                >
                  <div className="card-body d-flex flex-column flex-center py-5">
                    <img alt="..." src={specialist.imgSrc} width="128" />
                    <h3 className="mt-3">{specialist.h3}</h3>
                    <p className="mb-0 fs-xxl-1">{specialist.p1}</p>
                    <p className="text-600 mb-4">{specialist.p2}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default SpecialistSection;
