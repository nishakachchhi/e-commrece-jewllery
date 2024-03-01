import React, { useState } from "react";
import AboutWork from "./AboutWork";
import Team from "./Team";
import AboutSilder from "./AboutSilder";
import InstaShop from "./InstaShop";
import LogoImg from "./LogoApi";

function About() {
  const [logos, setlogos] = useState(LogoImg);
  return (
    <>
      <div className="container" style={{ paddingTop: "97px" }}>
        <div className="row">
          <p className="text-center about-p">
            Jaroti was established in 1990. We are
            <br /> artisans who design, make and sell jewelry
            <br /> and gifts for love.
          </p>
        </div>
      </div>

      {/* about section */}

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 px-4">
            <img
              src="asset/img/about-1.jpg"
              alt=""
              className="w-100"
              style={{ height: "500px" }}
            />
          </div>
          <div className="col-lg-5 about-content">
            <h4 className="about-h4 mb-5 fw-bold">ABOUT OUR STORE</h4>
            <p className="p-text">
              Since 1990 dolor sit amet, consectetur adipiscing elit. Quisque{" "}
              <br />
              pretium mollis ex, vel interdum augue faucibus sit amet. Proin
              tempor purus ac suscipit sagittis. Nunc finibus euismod enim, eu
              finibus nuncullamcorper et. Fusce finibus non odio vel viverra.
              Aliquam condimentum dictum gravida.{" "}
            </p>
          </div>
        </div>
      </div>

      {/* about work */}
      <AboutWork />

      {/* team section */}

      <Team />

      {/* about slider */}

      <AboutSilder />

      {/* instashop section */}

      <InstaShop />

      {/* logo section */}

      <div className="container-fluid mt-3">
        <div className="row">
          {logos.slice(0, 6).map((logo) => {
            return (
              <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                <div className="py-5">
                  <img src={logo.image} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default About;
