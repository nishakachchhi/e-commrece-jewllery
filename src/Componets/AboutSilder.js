import React from "react";

function AboutSilder() {
  return (
    <>
      <div className="my-5">
        <div
          id="carouselExampleCaptions"
          className="carousel  slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators mb-5">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div
              className="carousel-item active position-relative"
              data-bs-interval="1000"
            >
              <img
                src="asset/img/about-testimonial.jpg"
                className="d-block w-100 testimonal-box"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block text-white position-absolute silder-img">
                <img
                  src="asset/img/avatar-1.jpg"
                  alt=""
                  className="rounded-circle pb-5"
                />
                <p className="fs-4 ">
                  Mattis nec viverra eu, euismod at velit. Phasellus vel quam
                  quis augue congue scelerisque. Proin elit turpis, mattis nec
                  viverra eu.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="asset/img/about-testimonial.jpg"
                className="d-block w-100 testimonal-box"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block position-absolute text-white silder-img">
                <img
                  src="asset/img/avatar-2.jpg"
                  alt=""
                  className="rounded-circle pb-5"
                />
                <p className="fs-4 ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="asset/img/about-testimonial.jpg"
                className="d-block w-100 testimonal-box"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block position-absolute text-white silder-img">
                <img
                  src="asset/img/avatar-3.jpg"
                  alt=""
                  className="rounded-circle pb-5"
                />
                <p className="fs-4 ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSilder;
