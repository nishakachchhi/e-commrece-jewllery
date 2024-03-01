import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiMoon } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiSun } from "react-icons/bi";
function Header({ cartItems, isDarkMode, toggleMode, modetext }) {
  return (
    <>
      <div>
        {/* navigation bar */}
        <nav
          //style={{ zIndex: "99" }}
          className={`navbar navbar-expand-lg  position-fixed z-index w-100 ${
            isDarkMode ? "card-dark navbar-dark" : "card-light navbar-light"
          }  py-4 px-3`}
        >
          <div className="container-fluid">
            <NavLink className="navbar-brand " to="#">
              {isDarkMode === false ? (
                <img src="asset/img/logo.png" alt="logo" className="logo-img" />
              ) : (
                <img
                  src="../asset/img/logo-white.png"
                  alt="logo-white"
                  className="logo-img"
                />
              )}
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item ps-5">
                  <NavLink
                    className={`nav-link text-color ${modetext}`}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link ps-5 text-color ${modetext}`}
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className={`nav-link ps-5 text-color ${modetext}`}
                    to="/shop"
                  >
                    Shop
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link ps-5 text-color ${modetext}`}
                    to="/blog"
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link ps-5 text-color ${modetext}`}
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex align-items-center">
                <button className={`btn text-color ${modetext}`} type="submit">
                  <span className="me-2">
                    <BiUser className="fs-4" />
                  </span>
                  <span className="fs-5">Log in</span>
                </button>
                <div className=" ms-3" onClick={toggleMode}>
                  {isDarkMode ? (
                    <NavLink to="#">
                      <BiSun className="fs-3 text-light" />
                    </NavLink>
                  ) : (
                    <NavLink to="#">
                      <BiMoon className="fs-3 text-dark" />
                    </NavLink>
                  )}
                </div>
                <div className="position-relative ms-4">
                  <NavLink to="/cart">
                    <AiOutlineShoppingCart
                      className={`fs-3 text-color ${modetext}`}
                    />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-dark ">
                      {cartItems.length === 0 ? "0" : cartItems.length}
                    </span>
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
