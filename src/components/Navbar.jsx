import React from "react";
import thpLogo from "../assets/gallery/logo.svg";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top d-block"
      data-navbar-on-scroll="data-navbar-on-scroll"
    >
      <div className="bg-secondary">
        <div className="container">
          <div className="py-1">
            <ul className="breadcrumb flex-row-reverse align-baseline mb-0">
              <li>
                <a className="text-white fs--1" href="tel:+573506503396">
                  Llámanos al Cel: 57+ 350 650 3396
                </a>
              </li>
              <li className="px-2">
                <span className="text-white fs--1 mb-0">/</span>
              </li>
              <li>
                <a
                  className="text-white fs--1"
                  href="https://goo.gl/maps/wV154JB3mfVPjPKs9"
                  target="_blank"
                >
                  Dirección: Trans 60 #115-58 CL 116 con Av Suba CC Ilarco,
                  Torre: A - Consultorio: 504
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container py-3">
        <a className="navbar-brand" href="index.html">
          <img alt="logo" src={thpLogo} width="220" />
        </a>
        <button
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-bs-target="#navbarSupportedContent"
          data-bs-toggle="collapse"
          type="button"
        ></button>
        <div
          className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto pt-2 pt-lg-0 font-base">
            <li className="nav-item px-2">
              <a aria-current="page" className="nav-link" href="#home">
                Inicio
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#service">
                Servicios
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#especilist">
                Especialistas
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#testimony">
                Testimonios
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#contact">
                Contacto
              </a>
            </li>
          </ul>
          <a
            className="btn btn-lg btn-primary rounded-pill rounded-pill order-1 order-lg-0 ms-lg-4"
            href="https://wa.me/573506503396?text=¡Recupera%20la%20salud%20de%20tus%20pies!%20Pregunta%20ya%20cómo%20agendar%20tu%20cita%20hoy%20mismo.%20Quiero%20agendar%20mi%20cita."
            target="_blank"
          >
            ¡AGENDA AHORA!
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
