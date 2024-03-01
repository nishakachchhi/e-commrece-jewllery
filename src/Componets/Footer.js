import React from "react";
import { Link } from "react-router-dom";
import { TbBrandFacebook } from "react-icons/tb";
import { FiTwitter } from "react-icons/fi";
import { BiLogoInstagram } from "react-icons/bi";
import { ImPinterest2 } from "react-icons/im";

function Footer({ isDarkMode }) {
  return (
    <>
      <div>
        <section className="">
          <footer className="text-md-start">
            <div className="container-fuild px-3 border-bottom pt-5 pb-4">
              <div className="row">
                <div className="col-lg-4 col-md-12">
                  <div
                    href="/"
                    className="d-flex align-items-center mb-3  text-decoration-none"
                  >
                    {isDarkMode === false ? (
                      <img
                        src="../asset/img/logo.png"
                        alt="logo"
                        className="w-25"
                      />
                    ) : (
                      <img
                        src="../asset/img/logo-white.png"
                        alt="logo-white"
                        className="w-25"
                      />
                    )}
                  </div>
                  <p className="fs-p">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages,
                    <br />
                    and more recently with desktop publishing
                    <br /> software.
                  </p>
                  <div className="d-flex">
                    <div
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="facebook"
                      className="pe-3 fs-icon"
                    >
                      <TbBrandFacebook />
                    </div>
                    <div
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="facebook"
                      className="pe-3 fs-icon-1"
                    >
                      <FiTwitter />
                    </div>
                    <div
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="facebook"
                      className="pe-3 fs-icon"
                    >
                      <BiLogoInstagram />
                    </div>
                    <div
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="facebook"
                      className="pe-3 fs-icon-1"
                    >
                      <ImPinterest2 />
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-lg-2 col-md-6 px-1">
                      <h5 className="text-uppercase">SERVICES</h5>

                      <ul className="list-unstyled mb-0">
                        <li className="py-2 fs">
                          <Link
                            to="#!"
                            className="text-decoration-none p-text fs-6 "
                          >
                            Treats Club
                          </Link>
                        </li>
                        <li className="py-2 fs">
                          <Link
                            to="#!"
                            className="text-decoration-none  p-text fs-6"
                          >
                            Piercing Parlour
                          </Link>
                        </li>
                        <li className="py-2 fs">
                          <Link
                            to="#!"
                            className="text-decoration-none  p-text fs-6"
                          >
                            Student Discount
                          </Link>
                        </li>
                        <li className="py-2 fs">
                          <Link
                            to="#!"
                            className="text-decoration-none  p-text fs-6"
                          >
                            Site Map
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 ">
                      <h5 className="text-uppercase">ABOUT</h5>

                      <ul className="list-unstyled mb-0">
                        <li className="py-2 fs">
                          <Link
                            to="#!"
                            className="text-decoration-none  p-text fs-6"
                          >
                            Our Brand
                          </Link>
                        </li>
                        <li className="py-2 fs">
                          <Link
                            to="#!"
                            className="text-decoration-none  p-text fs-6"
                          >
                            Charity
                          </Link>
                        </li>
                        <li className="py-2 fs">
                          <Link
                            to="#!"
                            className="text-decoration-none  p-text fs-6"
                          >
                            CSR
                          </Link>
                        </li>
                        <li className="py-2 fs">
                          <Link
                            to="#!"
                            className="text-decoration-none  p-text fs-6"
                          >
                            Careers
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 ">
                      <h5 className="text-uppercase">DELIVERY & RETURN</h5>

                      <ul className="list-unstyled mb-0">
                        <li className="py-2 fs">
                          <Link
                            to="#!"
                            className="text-decoration-none  p-text fs-6"
                          >
                            Check Order
                          </Link>
                        </li>
                        <li className="py-2 fs">
                          <Link
                            to="#!"
                            className="text-decoration-none  p-text fs-6"
                          >
                            Delivery &amp; Collection
                          </Link>
                        </li>
                        <li className="py-2 fs">
                          <Link
                            to="#!"
                            className="text-decoration-none  p-text fs-6"
                          >
                            Careers
                          </Link>
                        </li>
                        <li className="py-2 fs">
                          <Link
                            to="#!"
                            className="text-decoration-none p-text fs-6"
                          >
                            Delivery Return
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <h5 className="text-uppercase mb-0">CUSTOMER SERVICES</h5>

                      <ul className="list-unstyled">
                        <li className="pt-3 pb-1 fs">
                          <Link
                            to="#!"
                            className="text-decoration-none p-text fs-6"
                          >
                            Terms &amp; Policies
                          </Link>
                        </li>
                        <li className="py-2 fs">
                          <Link
                            to="#!"
                            className="text-decoration-none p-text fs-6"
                          >
                            Contact Us
                          </Link>
                        </li>
                        <li className="py-2 fs">
                          <Link
                            to="#!"
                            className="text-decoration-none p-text fs-6"
                          >
                            Opening Hours
                          </Link>
                        </li>
                        <li className="py-2 fs">
                          <Link
                            to="#!"
                            className="text-decoration-none p-text fs-6"
                          >
                            Size Guides
                          </Link>
                        </li>
                        <li className="py-2 fs">
                          <Link
                            to="#!"
                            className="text-decoration-none p-text fs-6"
                          >
                            Gift Cards
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid padding py-3">
              <footer className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="col-md-4 d-flex align-items-center">
                  <span className="text-muted">
                    © Jaroti. All Rights Reserved.
                  </span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                  <li className="ms-3">
                    <Link className="text-muted" to="#">
                      <img src="../asset/img/payments.png" alt="payment" />
                    </Link>
                  </li>
                </ul>
              </footer>
            </div>
          </footer>
        </section>
      </div>
    </>
  );
}

export default Footer;
