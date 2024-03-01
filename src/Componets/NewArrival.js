import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGitCompare } from "react-icons/go";
import shopitems from "./ShopPageApi";
import { Link } from "react-router-dom";
function NewArrival({ handlerAddProduct }) {
  return (
    <>
      <div className="container-fluid mt-5">
        <h3 className="text-center fw-bold">NEW ARRIVALS</h3>

        <div className="row my-5 mx-2">
          {shopitems.slice(0, 8).map((item) => {
            const { id, iamge, name, price, hot } = item;
            return (
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 px-3 pb-5">
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
                      onClick={() => handlerAddProduct(item)}
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
                  <h3 className="img-name pt-3">{name}</h3>
                  <span className="fw-bold text-danger">${price}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default NewArrival;
