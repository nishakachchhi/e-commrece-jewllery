import React from "react";

function AboutWork() {
  return (
    <>
      <div className="container-fluid my-5">
        <h4 className="about-h4  fw-bold">HOW WE WORKS</h4>
        <div className="row mt-4">
          <div className="col-lg-5">
            <div className="row px-3 my-3">
              <div className="col-lg-2 d-flex justify-content-center align-items-center">
                <img src="asset/img/work-1.png" alt="" />
              </div>
              <div className="col-lg-10 px-4">
                <h6 className="work-h6 pb-3 text-center text-lg-start mt-2">
                  Production Design{" "}
                </h6>
                <p className="work-p text-center text-lg-start mt-2">
                  Integer dignissim sagittis quam. Maecenas sem eros, rutrum
                  vitae risus eget, vulputate aliquam nisi.
                </p>
              </div>
            </div>
            <div className="row px-3 my-3">
              <div className="col-lg-2 d-flex justify-content-center align-items-center">
                <img src="asset/img/work-2.png" alt="" />
              </div>
              <div className="col-lg-10 px-4">
                <h6 className="work-h6 pb-3 text-center text-lg-start mt-2">
                  Manufacturing{" "}
                </h6>
                <p className="work-p text-center text-lg-start mt-2">
                  Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam
                  nisi ex gravida neque tempus.
                </p>
              </div>
            </div>
            <div className="row px-3 my-3">
              <div className="col-lg-2 d-flex justify-content-center align-items-center">
                <img src="asset/img/work-3.png" alt="" />
              </div>
              <div className="col-lg-10 px-4">
                <h6 className="work-h6 pb-3 text-center text-lg-start mt-2">
                  Marketing and selling{" "}
                </h6>
                <p className="work-p text-center text-lg-start mt-2">
                  Rutrum vitae risus eget, vulputate aliquam nisi ex gravida
                  neque tempus.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-7 px-4">
            <img src="asset/img/about-2.jpg" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutWork;
