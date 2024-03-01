import React from "react";
import { LuFacebook } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { ImPinterest2 } from "react-icons/im";
import { GoSearch } from "react-icons/go";
import TagsPost from "./TagsPost";
import BlogPagination from "./BlogPagination";

function Blog({ isDarkMode }) {
  return (
    <>
      <div style={{ paddingTop: "97px" }}>
        <h4 className="about-h4  fw-bold  fs-2 ps-3 pt-5">Blog</h4>
        <div className="container-fluid">
          <div className="row pt-5">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="px-2">
                <BlogPagination />
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="px-2 col-lg-12">
                <div className="border py-5 px-5">
                  {isDarkMode === false ? (
                    <img
                      src="asset/img/logo.png"
                      alt="logo"
                      className="logo-img d-block m-auto"
                    />
                  ) : (
                    <img
                      src="asset/img/logo-white.png"
                      alt="logo-white"
                      className="logo-img d-block m-auto"
                    />
                  )}
                  {/* <img
                    src="asset/img/logo.png"
                    alt=""
                    className="logo-img d-block m-auto"
                  /> */}
                  <p className="text-center pt-5">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing and more recently with desktop publishing
                    software.
                  </p>
                  <div className="pt-2 text-center">
                    <span to="#" className="px-3 fs-4">
                      <LuFacebook />
                    </span>
                    <span to="#" className="px-3 fs-4">
                      <FiTwitter />
                    </span>
                    <span to="#" className="px-3 fs-4">
                      <FiInstagram />
                    </span>
                    <span to="#" className="px-3 fs-4">
                      <ImPinterest2 />
                    </span>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="input-group my-5">
                    <input
                      type="text"
                      className="form-control position-relative input-1 rounded-pill ps-4 bg-transparent"
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="btn bg-dark  text-white fw-bold  position-absolute btn-input-1 rounded-circle text-uppercase"
                      type="button"
                      id="button-addon2"
                    >
                      <GoSearch className="fs-4" />
                    </button>
                  </div>
                </div>

                <div className="col-lg-12 ">
                  <h3 className="fs-4 fw-bold category-title mb-4">
                    Categories
                  </h3>
                  <ul className="list-unstyled ">
                    <li className="d-flex justify-content-end li-blog text-hover">
                      <div className="text-decoration-none blog-name ">
                        Bracelets
                      </div>
                      <span>( 2 )</span>
                    </li>
                    <li className="d-flex justify-content-end li-blog text-hover">
                      <div className="text-decoration-none blog-name ">
                        Charms
                      </div>
                      <span>( 2 )</span>
                    </li>
                    <li className="d-flex justify-content-end li-blog text-hover">
                      <div className="text-decoration-none blog-name ">
                        Earrings
                      </div>
                      <span>( 2 )</span>
                    </li>
                    <li className="d-flex justify-content-end li-blog text-hover">
                      <div className="text-decoration-none blog-name ">
                        Fine Watches
                      </div>
                      <span>( 2 )</span>
                    </li>
                    <li className="d-flex justify-content-end li-blog text-hover">
                      <div className="text-decoration-none blog-name ">
                        Handbags
                      </div>
                      <span>( 2 )</span>
                    </li>
                    <li className="d-flex justify-content-end li-blog text-hover">
                      <div className="text-decoration-none blog-name ">
                        Necklaces
                      </div>
                      <span>( 2 )</span>
                    </li>
                    <li className="d-flex justify-content-end li-blog text-hover">
                      <div className="text-decoration-none blog-name ">
                        Rings
                      </div>
                      <span>( 2 )</span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-12 mt-5">
                  <h3 className="fs-4 fw-bold category-title mb-4">
                    Popular Posts
                  </h3>

                  <div className="row pb-3">
                    <div className="col-lg-4 ">
                      <img
                        src="asset/img/blog_1 (1).jpg"
                        alt=""
                        className=" pt-2 w-100"
                      />
                    </div>
                    <div className="col-lg-8">
                      <div className="pb-2">
                        <span className="blog-post">NOV 15, 2022 </span>
                        <span
                          className="text-uppercase ps-3 pe-2 blog-post"
                          style={{ color: "#abb8c3" }}
                        >
                          By
                        </span>
                        <span className="blog-post text-uppercase">Admin</span>
                      </div>
                      <h6 className="fs-5 post-blog fw-bold text-hover">
                        Top 6 Evil Eye Earrings That Will Rock Your World
                      </h6>
                    </div>
                  </div>
                  <div className="row pb-3">
                    <div className="col-lg-4 ">
                      <img
                        src="asset/img/blog-2 (1).jpg"
                        alt=""
                        className=" pt-2 w-100"
                      />
                    </div>
                    <div className="col-lg-8">
                      <div className="pb-2">
                        <span className="blog-post">NOV 15, 2022 </span>
                        <span
                          className="text-uppercase ps-3 pe-2 blog-post"
                          style={{ color: "#abb8c3" }}
                        >
                          By
                        </span>
                        <span className="blog-post text-uppercase">Admin</span>
                      </div>
                      <h6 className="fs-5 post-blog  fw-bold text-hover">
                        Top 10 Bags Adding Colour To Your Wardrobe
                      </h6>
                    </div>
                  </div>
                  <div className="row pb-3">
                    <div className="col-lg-4 ">
                      <img
                        src="asset/img/blog-3 (1).jpg"
                        alt=""
                        className=" pt-2 w-100"
                      />
                    </div>
                    <div className="col-lg-8">
                      <div className="pb-2">
                        <span className="blog-post">NOV 15, 2022 </span>
                        <span
                          className="text-uppercase ps-3 pe-2 blog-post"
                          style={{ color: "#abb8c3" }}
                        >
                          By
                        </span>
                        <span className="blog-post text-uppercase">Admin</span>
                      </div>
                      <h6 className="fs-5 post-blog text-hover fw-bold">
                        Is it Better to Buy Limited Edition Watches?
                      </h6>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 mt-5">
                  <TagsPost />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
