import React from "react";
import { GalleryData } from "../Data/data";

function GallerySection() {
  const data = GalleryData[0];

  return (
    <section>
      <div
        className="bg-holder bg-size"
        style={data.gallerySection.style}
      ></div>
      <div className="container">
        <div className="row">
          {data.columns.map((item, index) => (
            <div key={index} className="col-sm-6 col-lg-3 mb-4">
              <div
                className="card h-100 shadow card-span rounded-3"
                data-aos={`flip-${
                  index % 3 === 0 ? "up" : index % 3 === 1 ? "left" : "down"
                }`}
              >
                <img
                  alt={item.alt}
                  className="card-img-top card-img-bottom rounded-top-3"
                  src={item.imgSrc}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
