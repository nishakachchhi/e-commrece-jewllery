import React from "react";

function CollectionSection(isDarkMode) {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12  zoom-in overflow-hidden position-relative">
            <div className="py-4 px-3">
              <div className="zoom-img">
                <img
                  src="asset/img/glasses.jpg"
                  alt="glasses"
                  className="w-100"
                />
                <div className="overlay position-absolute">
                  <div className="text-white">
                    <span className="count fs-5 text-uppercase">
                      4 products
                    </span>
                    <div className="description">
                      Stylish Clear
                      <br /> Eyeglasses
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 zoom-in overflow-hidden position-relative">
            <div className=" py-4 px-3">
              <div className="zoom-img">
                <img src="asset/img/rings.jpg" alt="rings" className="w-100" />
                <div className="overlay-1 position- absolute">
                  <div className="text-white">
                    <span className="count fs-5 text-uppercase">
                      4 products
                    </span>
                    <div className="description">Gold &amp; Silver Rings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 zoom-in overflow-hidden position-relative row-3">
            <div className="py-4 px-3">
              <div className="zoom-img">
                <img src="asset/img/bags.jpg" alt="bags" className="w-100" />
                <div className="overlay-1 position-absolute">
                  <div className="text-white">
                    <span className="count fs-5 text-uppercase">
                      9 products
                    </span>
                    <div className="description">Luxury Handbag</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 zoom-in overflow-hidden position-relative">
            <div className="py-4 px-3">
              <div className="zoom-img">
                <img
                  src="asset/img/earrings.jpg"
                  alt="glasses"
                  className="w-100"
                />
                <div className="overlay position- absolute">
                  <div className="text-white">
                    <span className="count fs-5 text-uppercase">
                      8 products
                    </span>
                    <div className="description">
                      Premium
                      <br /> Collections
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="w-100 ">
              <div className="pt-4  px-3">
                <div className="text-center collection-text">
                  <h2 className="fs-1">
                    Jaroti New
                    <br /> Collection
                  </h2>
                  <p className="fs-5">DIAMOND JEWELRY</p>
                </div>
              </div>
            </div>
            <div className=" pt-5 pb-3 zoom-in overflow-hidden position-relative">
              <div className="px-3">
                <div className="zoom-img">
                  <img
                    src="asset/img/watches.jpg"
                    alt="watches"
                    className="w-100"
                  />
                  <div className="overlay-2 position-absolute">
                    <div className="text-white">
                      <span className="count fs-5 text-uppercase">
                        4 products
                      </span>
                      <div className="description">Watches For Men</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 zoom-in overflow-hidden position-relative">
            <div className="py-4  px-3">
              <div className="zoom-img">
                <img
                  src="asset/img/necklaces.jpg"
                  alt="glasses"
                  className="w-100"
                />
                <div className="overlay position- absolute">
                  <div className="text-white">
                    <span className="count fs-5 text-uppercase">
                      8 products
                    </span>
                    <div className="description">
                      Premium &amp;
                      <br /> Collections
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollectionSection;
