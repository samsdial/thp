import React from "react";
import { FooterData } from "../Data/data";

function FooterSection() {
  const data = FooterData[0];

  return (
    <>
      <section className="py-0 bg-secondary">
        <div
          className="bg-holder opacity-25"
          style={data.section.bgHolder}
        ></div>

        <div className="container">
          <div className="row py-8">
            <div
              className="col-12 col-sm-12 col-lg-5 mb-4 order-0 order-sm-0"
              data-aos="fade-left"
            >
              <a className="text-decoration-none" href="#">
                <img
                  alt=""
                  height="51"
                  src={data.section.columns[3].logo.src}
                />
              </a>

              <p className="text-light my-4 mr-5">
                {data.section.columns[3].logo.text}
                <br />
                {data.section.columns[3].logo.textSub}
              </p>
            </div>

            {data.section.columns.slice(1, 3).map((column, index) => (
              <div
                key={index}
                className="col-6 col-sm-4 col-lg-3 mb-3 order-3 order-sm-2"
                data-aos="fade-left"
              >
                {column.title && (
                  <h5 className="lh-lg fw-bold mb-4 text-light font-sans-serif">
                    {column.title}
                  </h5>
                )}
                <ul className="list-unstyled mb-md-4 mb-lg-0">
                  {column.items.map((item, idx) => (
                    <li key={idx} className="lh-lg">
                      {item.href ? (
                        <a className="footer-link" href={item.href}>
                          {item.text}
                        </a>
                      ) : (
                        <p className="text-white mb-0">{item.text}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div
              className="col-3 col-sm-auto mb-3 order-2 order-sm-3"
              data-aos="fade-down"
            >
              <h5 className="lh-lg fw-bold text-light mb-4 font-sans-serif"></h5>
              <ul className="item mb-3 p-0">
                {data.section.columns[3].items.map((item, idx) => (
                  <li key={idx} className="mb-3">
                    <a
                      className="btn-icon"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.icon === "facebook" && (
                        <svg
                          fill="#C5A7C1"
                          height="30"
                          viewBox="0 0 30 30"
                          width="30"
                          x="0px"
                          xmlns="http://www.w3.org/2000/svg"
                          y="0px"
                        >
                          <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
                        </svg>
                      )}
                      {item.icon === "instagram" && (
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
                      )}
                    </a>
                  </li>
                ))}
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
                {data.copy.leftText}
              </p>
            </div>

            <div className="col-12 col-sm-8 col-md-6">
              <p className="fs--1 my-2 text-center text-md-end text-200">
                {data.copy.rightText}
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
                  href={data.copy.linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.copy.linkText}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FooterSection;
