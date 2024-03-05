import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { CarouselData } from "../Data/data";
import hero from "../assets/gallery/hero.png";
import VideoModal from "./VideoModal";

function Carousel() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const settings = {
    arrows: false,
    dots: false,
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
      <div className="bg-holder bg-size"></div>
      <div className="hero-section pt-10" id="home">
        <Slider {...settings}>
          {CarouselData.map((item, index) => (
            <div key={index} className="container">
              <div className="row min-vh-xl-100 min-vh-xxl-25">
                <div
                  className="col-md-5 col-xl-6 col-xxl-7 order-0 order-md-1 text-end"
                  data-aos="flip-left"
                >
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModalToggle"
                    role="button"
                  >
                    <img
                      alt="hero-header"
                      className="pt-7 pt-md-0 w-100"
                      src={hero}
                    />
                  </a>
                </div>
                <div
                  className="col-md-75 col-xl-6 col-xxl-5 text-md-start text-center py-6"
                  data-aos="fade-left"
                >
                  <h1
                    className="fw-light font-base fs-6 fs-xxl-7 text-purple"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></h1>
                  <p className="fs-1 mb-5 text-light-purple">
                    {item.description}
                  </p>
                  <a
                    href={item.button1.href}
                    className={item.button1.className}
                    role="button"
                    data-aos="flip-left"
                  >
                    {item.button1.text}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <VideoModal show={isModalOpen} onHide={() => setIsModalOpen(false)} />
    </>
  );
}

export default Carousel;
