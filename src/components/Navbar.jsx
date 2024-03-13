import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { BsFillPinMapFill, BsList, BsPhone } from "react-icons/bs";
import { NavbarData } from "../Data/data";
import thpLogo from "../assets/gallery/logo.svg";
// import { Link, Element, animateScroll as scroll } from 'react-scroll';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  const { contact, brand, links, contactButton } = NavbarData;

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top d-block backdrop shadow-transition"
      data-navbar-on-scroll="data-navbar-on-scroll"
    >
      <div className="bg-secondary">
        <div className="container">
          <div className="py-1">
            <ul className="breadcrumb flex-row-reverse align-baseline mb-0">
              <li>
                <a
                  href={contact.phone.link}
                  target="_blank"
                  className="text-white fs--1"
                  rel="noreferrer"
                >
                  <span>
                    <BsPhone />
                  </span>
                  <span className="m-2">Llamanos al Cel:</span>
                  {contact.phone.number}
                </a>
              </li>
              <li className="px-2 d-none d-md-block">
                <span className="text-white fs--1 mb-0">/</span>
              </li>
              <li className="d-none d-md-block">
                <a
                  href={contact.address.link}
                  target="_blank"
                  className="text-white fs--1"
                  rel="noreferrer"
                >
                  <span>
                    <BsFillPinMapFill />
                  </span>
                  <span className="m-2">Dirección::</span>
                  {contact.address.text}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container py-3">
        <a className="navbar-brand" href={brand.link}>
          <img alt="logo" src={thpLogo} width="220" />
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          onClick={handleToggleMenu}
        >
          <BsList />
        </button>
        <div
          className={`collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0 ${
            isMenuOpen ? "show" : ""
          }`}
          id="navbarCollapse"
        >
          <ul className="navbar-nav ms-auto pt-2 pt-lg-0 font-base">
            {links.map((link) => (
              <li key={link.id} className="nav-item px-2">
                <a
                  href={link.href}
                  aria-current="page"
                  className="nav-item nav-link"
                  onClick={handleCloseMenu}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={contactButton.href}
            type="button"
            className={contactButton.className}
            onClick={handleCloseMenu}
            data-aos="zoom-in"
          >
            {contactButton.text}
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
