import React from "react";

function CopySection() {
  return (
    <section>
      <section className="py-0 bg-primary">
        <div className="container">
          <div className="row justify-content-md-between justify-content-evenly py-4">
            <div className="col-12 col-sm-8 col-md-6 col-lg-auto text-center text-md-start">
              <p className="fs--1 my-2 fw-bold text-200">
                Todos los derechos reservados &copy; Therapies, 2023
              </p>
            </div>

            <div className="col-12 col-sm-8 col-md-6">
              <p className="fs--1 my-2 text-center text-md-end text-200">
                Hecho por&nbsp;
                <svg
                  className="bi bi-suit-heart-fill"
                  fill="#F95C19"
                  height="12"
                  viewBox="0 0 16 16"
                  width="12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"></path>
                </svg>
                &nbsp;
                <a
                  className="fw-bold text-black-50"
                  href="https://digitaldial.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  digitaldial.co
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default CopySection;
