import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

function Cart({
  cartItems,
  handlerAddProduct,
  handlerRemoveProduct,
  handlerCartClear,
}) {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <>
      <div className="container-fluid " style={{ paddingTop: "97px" }}>
        <h3 className="about-h4  fw-bold  fs-2 ps-5 pt-4">Shopping Cart</h3>
        <div>
          {cartItems.length >= 1 && (
            <div
              className="d-block m-auto  text-center py-2 mb-3"
              onClick={handlerCartClear}
              style={{ width: "200px", cursor: "pointer" }}
            >
              Clear Cart
            </div>
          )}
        </div>

        <div className="text-center text-capitalize fs-5 mb-4">cart items</div>

        {cartItems.length === 0 && (
          <div className="text-capitalize text-center p-5 fs-4">
            no items are added
          </div>
        )}

        <div>
          {cartItems.map((item) => (
            <div className="row container" key={item.id}>
              <div className="col-lg-2 p-2">
                <img src={item.iamge} alt={item.name} className="w-100" />
              </div>
              <div className="col-lg-10 w-75 px-5 d-flex align-items-center justify-content-between">
                <span>{item.name}</span>
                <div className="d-flex">
                  <div
                    className=" px-3  py-2 rounded border-0 me-3"
                    onClick={() => handlerAddProduct(item)}
                  >
                    <AiOutlinePlus className="fs-4" />
                  </div>
                  <div
                    className="px-3 py-2  rounded border-0"
                    onClick={() => handlerRemoveProduct(item)}
                  >
                    <AiOutlineMinus className="fs-4" />
                  </div>
                </div>
                <div>
                  {item.quantity}*{item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-block m-auto mt-4 container" style={{ width: "65%" }}>
          <div className="d-flex justify-content-between">
            total price <span>${totalPrice}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
