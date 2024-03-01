import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGitCompare } from "react-icons/go";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BsGridFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import shopitems from "./ShopPageApi";
import { NavLink } from "react-router-dom";

function Shop({ handlerAddProduct }) {
  const [data, setData] = useState(shopitems);
  const [view, setView] = useState(false);
  const [search, setSearch] = useState("");
  const filterResult = (cateItem) => {
    const result = shopitems.filter((curData) => {
      return curData.category === cateItem;
    });
    setData(result);
  };

  return (
    <>
      <div className="container-fluid" style={{ paddingTop: "97px" }}>
        <div className="row">
          <div className="col-lg-3">
            <div>
              <div className="px-2">
                <form>
                  <div className="py-4">
                    <input
                      type="search"
                      className="form-control rounded-pill py-2 ps-4"
                      id="exampleFormControlInput1"
                      placeholder="Search"
                      onChange={(event) => {
                        setSearch(event.target.value);
                      }}
                    />
                  </div>
                </form>
              </div>
              <div className="category-box px-3">
                <h3 className="text-capitalize ">
                  <strong>category</strong>
                </h3>
                <div>
                  <div
                    className="text-capitalize border-0 bg-transparent fs-5"
                    onClick={() => setData(shopitems)}
                  >
                    All
                  </div>
                </div>
                <div>
                  <div
                    className="text-capitalize border-0 bg-transparent fs-5"
                    onClick={() => filterResult("Earrings")}
                  >
                    Earrings
                  </div>
                </div>
                <div>
                  <div
                    className="text-capitalize border-0 bg-transparent fs-5 "
                    onClick={() => filterResult("necklaces")}
                  >
                    Necklaces
                  </div>
                </div>
                <div>
                  <div
                    className="text-capitalize border-0 bg-transparent fs-5"
                    onClick={() => filterResult("rings")}
                  >
                    Rings
                  </div>
                </div>
                <div>
                  <div
                    className="text-capitalize border-0 bg-transparent fs-5 "
                    onClick={() => filterResult("bracelets")}
                  >
                    Bracelets
                  </div>
                </div>
                <div>
                  <div
                    className="text-capitalize border-0 bg-transparent fs-5 "
                    onClick={() => filterResult("glasses")}
                  >
                    Glasses
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="d-flex pt-3 ps-4">
                <div className="fs-3 pe-3" onClick={() => setView(false)}>
                  <BsFillGrid3X3GapFill />
                </div>
                <div className="fs-3" onClick={() => setView(true)}>
                  <BsGridFill />
                </div>
              </div>
            </div>
            <div className="row">
              {/* <MainProduct /> */}

              {view === false ? (
                <>
                  <div className="row my-5 px-4">
                    {data
                      .filter((val) => {
                        if (search === "") {
                          return val;
                        } else if (
                          val.name.toLowerCase().includes(search.toLowerCase())
                        ) {
                          return val;
                        }
                      })

                      .map((d) => {
                        // const { id, iamge, name, price, currprice, hot } = d;
                        return (
                          <div className="col-lg-4 px-4 pb-5" key={d.id}>
                            <div className="position-relative new-box">
                              <Link to={`/singleProduct/${d.id}`}>
                                <img
                                  src={d.iamge}
                                  alt={d.name}
                                  className="w-100 d-block overflow-hidden new-img"
                                />
                              </Link>
                              <div className="position-absolute hot-box bg-white px-3 py-1 rounded-pill text-uppercase text-danger">
                                {d.hot}
                              </div>

                              <div className="new-overlay">
                                <div
                                  className="btn text-uppercase d-block m-auto rounded-pill px-2 py-2 btn-add fw-bold"
                                  onClick={() => handlerAddProduct(d)}
                                >
                                  add to cart
                                </div>
                              </div>
                              <div className="icon-overlay">
                                <div className="icon-box text-center  mb-2">
                                  <AiOutlineHeart className="text-dark" />
                                </div>
                                <div className="icon-box text-center bg-white mb-2">
                                  <AiOutlineSearch className="text-dark" />
                                </div>
                                <div className="icon-box text-center bg-white mb-2">
                                  <GoGitCompare className="text-dark" />
                                </div>
                              </div>
                            </div>
                            <div className="img-body">
                              <h3 className="img-name pt-3">{d.name}</h3>
                              <span className="fw-bold text-danger">
                                ${d.price}
                                {/* <span className="text-decoration-line-through text-dark ps-1">
                                  {d.price}
                                </span> */}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </>
              ) : (
                <>
                  <div className="row my-5 px-4">
                    {data
                      .filter((val) => {
                        if (search === "") {
                          return val;
                        } else if (
                          val.name.toLowerCase().includes(search.toLowerCase())
                        ) {
                          return val;
                        }
                      })

                      .map((d) => {
                        const { id, iamge, name, price, currprice, hot } = d;
                        return (
                          <div className="col-lg-6 px-4 pb-5">
                            <div className="position-relative new-box">
                              <Link to={`/singleProduct/${id}`}>
                                <img
                                  src={iamge}
                                  alt={name}
                                  className="w-100 d-block overflow-hidden new-img"
                                />
                              </Link>
                              <div className="position-absolute hot-box bg-white px-3 py-1 rounded-pill text-uppercase text-danger">
                                {hot}
                              </div>

                              <div className="new-overlay">
                                <div
                                  className="btn text-uppercase d-block m-auto rounded-pill px-2 py-2 btn-add fw-bold"
                                  onClick={() => handlerAddProduct(d)}
                                >
                                  add to cart
                                </div>
                              </div>
                              <div className="icon-overlay">
                                <div className="icon-box text-center  mb-2">
                                  <AiOutlineHeart />
                                </div>
                                <div className="icon-box text-center bg-white mb-2">
                                  <AiOutlineSearch />
                                </div>
                                <div className="icon-box text-center bg-white mb-2">
                                  <GoGitCompare />
                                </div>
                              </div>
                            </div>
                            <div className="img-body">
                              <h3 className="img-name pt-3">{name}</h3>
                              <span className="fw-bold text-danger">
                                {currprice}
                                <span className="text-decoration-line-through text-dark ps-1">
                                  {price}
                                </span>
                              </span>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
