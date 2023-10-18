import React from "react";
import dotBg from "../assets/gallery/dot-bg.png";
import lgWhite from "../assets/gallery/logo-white.svg";

function FotterSection() {
  return (
    <>
      <section className="py-0 bg-secondary">
        <div
          className="bg-holder opacity-25"
          style={{
            backgroundImage: { dotBg },
            backgroundPosition: "top left",
            marginTop: "-3.125rem",
            backgroundSize: "auto",
          }}
        ></div>
        <div className="container">
          <div className="row py-8">
            <div
              className="col-12 col-sm-12 col-lg-6 mb-4 order-0 order-sm-0 aos-init aos-animate"
              data-aos="fade-left"
            >
              <a className="text-decoration-none" href="#">
                <img alt="" height="51" src={lgWhite} />
              </a>
              <p className="text-light my-4">
                No esperes más para recibir
                <br />
                la atención y cuidado que tus pies necesitan.
              </p>
            </div>
            <div
              className="col-6 col-sm-4 col-lg-3 mb-3 order-3 order-sm-2 aos-init aos-animate"
              data-aos="fade-left"
            >
              <h5 className="lh-lg fw-bold mb-4 text-light font-sans-serif">
                Contacto
              </h5>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg">
                  <p className="text-white mb-0">
                    Lunes - Sábado / 7:00 – 19:00
                  </p>
                </li>
                <li className="lh-lg">
                  <span className="text-white mb-0">Dirección:</span>
                  <a
                    className="footer-link"
                    href="https://goo.gl/maps/wV154JB3mfVPjPKs9"
                    target="_blank"
                  >
                    Trans 60 #115-58 CL 116 con Av Suba CC Ilarco, TO: A CO: 504
                  </a>
                </li>
                <li className="lh-lg">
                  <span className="text-white mb-0">Cel:</span>
                  <a className="footer-link" href="tel:+573506503396">
                    57+ 350 650 3396
                  </a>
                </li>
                <li className="lh-lg">
                  <span className="text-white mb-0">Email:</span>
                  <a
                    className="footer-link"
                    href="mailto:therapiesbog@gmail.com"
                  >
                    therapiesbog@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="col-9 col-sm-4 col-lg-2 mb-3 order-1 order-sm-1 aos-init aos-animate"
              data-aos="fade-right"
            >
              <h5 className="lh-lg fw-bold mb-4 text-light font-sans-serif">
                Menu
              </h5>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg">
                  <a className="footer-link" href="#home">
                    Inicio
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="footer-link" href="#service">
                    Servicio
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="footer-link" href="#especilist">
                    Especialistas
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="footer-link" href="#testimony">
                    Testimonio
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="footer-link" href="#contact">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="col-3 col-sm-4 col-lg-1 mb-3 order-2 order-sm-3 aos-init aos-animate"
              data-aos="fade-down"
            >
              <h5 className="lh-lg fw-bold text-light mb-4 font-sans-serif"></h5>
              <ul className="item mb-3 p-0">
                <li className="mb-3">
                  <a
                    className="btn-icon"
                    href="https://www.facebook.com/profile.php?id=100084678278337"
                    target="_blank"
                  >
                    <svg
                      fill="#C5A7C1"
                      height="30"
                      viewBox="0 0 30 30"
                      width="30"
                      x="0px"
                      xmlns="http://www.w3.org/2000/svg"
                      y="0px"
                    >
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
                    </svg>
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="btn-icon"
                    href="https://www.instagram.com/therapiespodologia/"
                    target="_blank"
                  >
                    <svg
                      fill="#C5A7C1"
                      height="30"
                      viewBox="0 0 30 30"
                      width="30"
                      x="0px"
                      xmlns="http://www.w3.org/2000/svg"
                      y="0px"
                    >
                      <path d="M 15 2 C 7.832 2 2 7.832 2 15 C 2 22.168 7.832 28 15 28 C 22.168 28 28 22.168 28 15 C 28 7.832 22.168 2 15 2 z M 11.666016 6 L 18.332031 6 C 21.457031 6 24 8.5420156 24 11.666016 L 24 18.332031 C 24 21.457031 21.457984 24 18.333984 24 L 11.667969 24 C 8.5429688 24 6 21.457984 6 18.333984 L 6 11.667969 C 6 8.5429688 8.5420156 6 11.666016 6 z M 11.666016 8 C 9.6450156 8 8 9.6459688 8 11.667969 L 8 18.333984 C 8 20.354984 9.6459688 22 11.667969 22 L 18.333984 22 C 20.354984 22 22 20.354031 22 18.332031 L 22 11.666016 C 22 9.6450156 20.354031 8 18.332031 8 L 11.666016 8 z M 19.667969 9.6660156 C 20.035969 9.6660156 20.333984 9.9640312 20.333984 10.332031 C 20.333984 10.700031 20.035969 11 19.667969 11 C 19.299969 11 19 10.700031 19 10.332031 C 19 9.9640312 19.299969 9.6660156 19.667969 9.6660156 z M 15 10 C 17.757 10 20 12.243 20 15 C 20 17.757 17.757 20 15 20 C 12.243 20 10 17.757 10 15 C 10 12.243 12.243 10 15 10 z M 15 12 A 3 3 0 0 0 15 18 A 3 3 0 0 0 15 12 z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-0 bg-primary">
        <div className="container">
          <div className="row justify-content-md-between justify-content-evenly py-4">
            <div className="col-12 col-sm-8 col-md-6 col-lg-auto text-center text-md-start">
              <p className="fs--1 my-2 fw-bold text-200">
                Todos los derechos reservados © Therapies, 2023
              </p>
            </div>
            <div className="col-12 col-sm-8 col-md-6">
              <p className="fs--1 my-2 text-center text-md-end text-200">
                Hecho por&nbsp;{" "}
                <svg
                  className="bi bi-suit-heart-fill"
                  fill="#F95C19"
                  height="12"
                  viewBox="0 0 16 16"
                  width="12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M 4 1 C 2 1 1 3 1 3 C 1 3 3 4 4 5 C 6 4 8 4 10 5 C 10 5 11 4 13 3 C 13 3 12 1 10 1 C 10 1 8 2 7 4 C 7 4 6 2 4 1 Z"></path>
                  <path d="M 5 6 C 5 6 2 8 2 10 C 2 11 3 13 4 13 C 4 13 3 16 6 15 C 6 15 8 15 9 14 C 9 14 10 15 12 15 C 14 15 13 13 13 13 C 13 13 14 11 14 10 C 14 8 11 6 11 6 C 11 6 11 5 9 6 C 9 6 7 5 6 6 C 6 6 6 5 7 5 C 7 5 8 5 9 6 C 9 6 8 7 8 7 C 8 7 7 6 7 6 C 7 6 7 5 6 5 C 6 5 7 6 5 6 C 5 6 5 8 5 9 C 5 10 6 11 6 11 C 6 11 6 12 5 11 C 5 11 4 11 4 10 C 4 9 5 9 5 9 C 5 9 5 6 5 6 Z"></path>
                  <path d="M 11 6 C 10 6 9 6 9 7 C 9 8 9 9 10 9 C 11 9 11 10 11 10 C 11 10 12 9 12 8 C 12 7 11 7 11 6 Z"></path>
                  <path d="M 9 6 C 9 6 9 7 10 7 C 10 7 9 6 9 6 Z"></path>
                </svg>
                &nbsp;
                <a
                  className="fw-bold text-black-50"
                  href="https://digitaldial.co/"
                  target="_blank"
                >
                  digitaldial.co
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FotterSection;
