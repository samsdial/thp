import React from "react";
import { ServiceData } from "../Data/data";

function ServiceSection() {
  const { serviceSection, services } = ServiceData[0];

  return (
    <>
      <section className="py-5" id="service">
        <div className="container">
          <div className="row">
            <div className="col-12 py-3" data-aos="fade-right">
              <div
                className="bg-holder bg-size"
                style={serviceSection.style}
              ></div>
              <h1 className="text-center">{serviceSection.title}</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-0">
        <div className="container">
          <div className="row py-5 align-items-center justify-content-center justify-content-lg-evenly">
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                imgSrc={service.imgSrc}
                isImg={service.isImg}
                title={service.title}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceItem({ imgSrc, isImg, title }) {
  console.log("🚀 ~ ServiceItem ~ isImg:", isImg);

  return (
    <div
      className="col-auto col-md-4 col-lg-2 text-xl-start"
      data-aos="fade-up"
    >
      <div className="d-flex flex-column align-items-center">
        <div className="icon-box text-center">
          {isImg && (
            <a className="text-decoration-none" href="#!">
              <div className="card m-auto shadow card-span rounded-circle border border-white">
                <img
                  className="card-img-top card-img-bottom rounded-circle"
                  src={imgSrc}
                  alt={title}
                />
              </div>
            </a>
          )}
          <p
            className={
              !isImg
                ? "mt-5 pt-5 fs-xxl-0 text-center"
                : "mt-3 fs-xxl-0 text-center"
            }
          >
            <a className="text-decoration-none" href="#!">
              {title}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
