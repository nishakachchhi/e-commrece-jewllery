import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";

function Contact() {
  return (
    <div className=" px-5 overflow-hidden">
      <div style={{ paddingTop: "97px" }}>
        <h4 className="about-h4  fw-bold  fs-2 ps-3 pt-5">Contact us</h4>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="px-3">
                <div className="border-1 pt-5 pb-4 px-3">
                  <h4 className="pb-1">
                    <span className="fs-4">
                      <FiPhoneCall />
                    </span>
                    <span className="ps-3 fs-4 fw-bold">Call to Us:</span>
                  </h4>
                  <p className="contact-p ">
                    We’re available 24/7, 7 days a week.
                    <br />
                    <div className="text-decoration-none fs-5">
                      <strong>+ 08 9229 8228</strong>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="px-3">
                <div className="border-1 pt-5 pb-4 px-3">
                  <h4 className="pb-1">
                    <span className="fs-3">
                      <HiOutlineMail />
                    </span>
                    <span className="ps-3 fs-4 fw-bold">Write to Us:</span>
                  </h4>
                  <p className="contact-p ">
                    Fill out our form and we will contact you within 24 hours.
                    <br />
                    <div className="text-decoration-none  fs-5">
                      Email: Support1234@Jaroti
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="px-3">
                <div className="border-1 pt-5 pb-4 px-3">
                  <h4 className="pb-1">
                    <span className="fs-3">
                      <GrLocation />
                    </span>
                    <span className="ps-3 fs-4 fw-bold">Headquarter:</span>
                  </h4>
                  <p className="contact-p ">
                    Monday – Friday: 9:00-20:00 Saturday: 11:00 – 15:00
                    <br />
                    <div className="text-decoration-none">
                      123 Atlantic, Brooklyn, New York, USA
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* map section */}

      <div>
        <iFrame
          className="w-100"
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d19436.336321713778!2d-1.8875472!3d52.4874271!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1694001435560!5m2!1sen!2sin"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iFrame>
      </div>

      <div className="container-fuild  mt-5 mb-5">
        <div className="row">
          <div className="col-lg-7">
            <div className="ps-lg-4">
              <h2 className="fw-bold">We would love to hear from you.</h2>
              <form>
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-100 p-3 rounded-pill border-1 mt-5 mb-3 ps-3"
                />
                <input
                  type="email"
                  placeholder="E-mail*"
                  className="w-100 p-3 rounded-pill border-1 my-3 ps-3"
                />
                <input
                  type="text"
                  placeholder="Subject*"
                  className="w-100 p-3 rounded-pill border-1 my-3 ps-3"
                />
                <textarea
                  type="text"
                  placeholder="meassage"
                  className=" w-100 my-3 ps-3 pt-4"
                  style={{ borderRadius: "40px" }}
                  rows={8}
                ></textarea>
              </form>
              <button className="btn text-uppercase bg-dark text-white rounded-pill fw-bold px-4 py-3 fs-6 d-block m-auto mt-5">
                send meassage
              </button>
            </div>
          </div>
          <div
            className="col-lg-5 col-md-12 col-sm-12 col-12"
            style={{ paddingLeft: "110px" }}
          >
            <h1 className="fw-bold">Offline Stores?</h1>
            <div className="mt-5">
              <h5 className="fw-bold">Address 1</h5>
              <p className="fs-5">
                123 Atlantic, Brooklyn, New York, USA <br /> (+403) 374 748 3839
              </p>
              <p>
                Monday – Friday: 9:00 – 21:00
                <br /> Saturaday: 11:00 – 21:00
              </p>
            </div>
            <div className="mt-4">
              <h5 className="fw-bold">Address 2</h5>
              <p className="fs-5">
                345 Brick, Spitalfields, London, UK
                <br /> (+403) 374 748 3839
              </p>
              <p>
                Monday – Friday: 9:00 – 21:00
                <br /> Saturaday: 11:00 – 21:00
              </p>
            </div>
            <div className="mt-4">
              <h5 className="fw-bold">Address 3</h5>
              <p className="fs-5">
                Knight Valley Dr, Nashville, USA
                <br /> (+403) 374 748 3839
              </p>
              <p>
                Monday – Friday: 9:00 – 21:00
                <br /> Saturaday: 11:00 – 21:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
