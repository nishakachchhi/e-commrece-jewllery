import React from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import LogoSilder from "./LogoSilder";
import CollectionSection from "./CollectionSection";
// import VideoPlayer from "./VideoPlayer";
import NewArrival from "./NewArrival";
import BlogSection from "./BlogSection";
import HomeForm from "./HomeForm";

function Home({ handlerAddProduct, isDarkMode }) {
  return (
    <>
      {/* hero silder section */}
      <div className="silder-box ">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
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
            <div className="carousel-item active">
              <img
                src="asset/img/silder-1.jpg"
                className="d-block w-100 silder-1"
                alt="..."
                // style={{ maxHeight: "650px" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <p className="text-uppercase fs-5">
                  now only $7 - limited time only
                </p>
                <h1 className="text-capitalize display-5 fw-bolder pb-4">
                  mix and match earring set
                </h1>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="asset/img/silder-3.jpg"
                className="d-block w-100 silder-1"
                // style={{ maxHeight: "650px" }}
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <p className="text-uppercase fs-5">20% off engagement rings</p>
                <h1 className="text-capitalize display-5 fw-bolder pb-4">
                  diamond wedding ring sets
                </h1>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="asset/img/silder-2.jpg"
                className="d-block w-100 silder-1"
                alt="..."
                // style={{ maxHeight: "650px" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <p className="text-uppercase fs-5">
                  up to 10% off - limited time set
                </p>
                <h1 className="text-capitalize display-5 fw-bolder pb-4">
                  gold necklace set
                </h1>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev prev-btn"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="bg-white rounded-circle prev-btn"
              aria-hidden="true"
            >
              <GrPrevious className="fs-3 icon-color" />
            </span>
          </button>
          <button
            className="carousel-control-next prev-btn"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="bg-white rounded-circle prev-btn"
              aria-hidden="true"
            >
              <GrNext className="fs-3 icon-color" />
            </span>
          </button>
        </div>
      </div>

      {/* brand section */}

      <LogoSilder />

      {/* Collection section */}

      <CollectionSection />

      {/* New arrival section */}

      <NewArrival handlerAddProduct={handlerAddProduct} />

      {/* videoplayer section */}

      {/* <VideoPlayer /> */}

      {/* blog section  */}

      <BlogSection isDarkMode={isDarkMode} />

      {/* Homeform section */}

      <HomeForm />
    </>
  );
}

export default Home;
