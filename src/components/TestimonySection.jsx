import React from "react";
import Slider from "react-slick";
import { TestimonyData } from "../Data/data";

function TestimonySection() {
  const { testimonySection, carousel } = TestimonyData[0];
  const settingsTest = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    fade: true,
  };
  return (
    <>
      <section className="py-5" id="testimony">
        <div className="container">
          <div className="row">
            <div className="col-12 py-3" data-aos="fade-right">
              <div
                className="bg-holder bg-size"
                style={testimonySection.style}
              ></div>
              <h1 className="text-center">{testimonySection.title}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="bg-holder bg-size" style={carousel.style}></div>

        <div className="container">
          <div className="row align-items-center offset-sm-1">
            <Slider {...settingsTest}>
              {carousel.items.map((item, index) => (
                <div key={index} className="item">
                  <div className="row h-100" data-aos="slide-up">
                    <div className="col-sm-3 text-center">
                      <img
                        alt=""
                        className="rounded-circle"
                        src={item.imgSrc}
                        width="100"
                      />
                      <h5 className="mt-3 fw-medium text-secondary">
                        {item.h5}
                      </h5>
                      <p className="fw-normal mb-0">{item.age}</p>
                    </div>

                    <div className="col-sm-9 text-center text-sm-start pt-3 pt-sm-0">
                      <h2>{item.h2}</h2>
                      <div className="my-2"></div>
                      <p>&quot;{item.p}&quot;</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestimonySection;
