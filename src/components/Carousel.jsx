import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { CarouselData } from "../Data/data";
import hero from "../assets/gallery/hero.png";
import VideoModal from "./VideoModal";

function Carousel() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log("hey", CarouselData);

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
            <div key={index + 1 + 2} className="container ">
              <div className="row">
                <div className="col-lg-6 order-lg-2">
                  <div className="hero-image">
                    <img src={hero} alt="Podología" />
                    <button
                      className={item.button2.className}
                      onClick={openModal}
                      data-aos="fade-left"
                    >
                      <span></span>
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 offset-1 order-lg-1">
                  <h1 className="hero-title" data-aos="fade-up">
                    {item.title}
                  </h1>
                  <p className="hero-subtitle" data-aos="fade-up">
                    {item.description}
                  </p>
                  <a
                    href={item.button1.href}
                    className="btn btn-primary btn-lg rounded-pill"
                    data-aos="fade-right"
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
