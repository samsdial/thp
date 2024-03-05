import React from "react";
import { EyeCareData } from "../Data/data";

function EyeCare() {
  const { section, content } = EyeCareData[0];
  const { style } = section;
  const { image, title, paragraph, paragraphTwo, call, button } = content;

  return (
    <section className="bg-secondary">
      <div className="bg-holder" style={style}></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 col-xxl-6" data-aos="flip-left">
            <img alt="..." className="img-fluid" src={image} />
          </div>

          <div className="col-md-7 col-xxl-6 text-center text-md-start">
            <h2
              className="fw-bold text-light mb-4 mt-4 mt-lg-0"
              data-aos="fade-right"
            >
              {title}
            </h2>

            <p className="text-light" data-aos="fade-right">
              {paragraph}
            </p>

            <p className="text-light" data-aos="fade-right">
              {paragraphTwo}
            </p>

            <p className="text-light" data-aos="fade-right">
              <strong>{call}</strong>
            </p>

            <div className="py-3">
              <a
                className="btn btn-lg btn-light rounded-pill"
                href="#!"
                data-aos="flip-left"
                role="button"
              >
                {button}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EyeCare;
