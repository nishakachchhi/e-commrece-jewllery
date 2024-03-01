import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Componets/Home";
import About from "./Componets/About";
import Shop from "./Componets/Shop";
import Blog from "./Componets/Blog";
import Contact from "./Componets/Contact";
import SingleProduct from "./Componets/SingleProduct";
import Cart from "./Componets/Cart";
import ErrorPage from "./Componets/ErrorPage";
import Header from "./Componets/Header";
import Footer from "./Componets/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogSinglePage from "./Componets/BlogSinglePage";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  let modebg = isDarkMode === true ? "bg-dark " : "bg-light";
  let modetext = isDarkMode === true ? "text-light" : "text-dark";

  useEffect(
    function () {
      document.body.classList.toggle("body-black");
    },
    [isDarkMode]
  );

  const handlerAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...productExist,
                quantity: productExist.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const handlerRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...productExist,
                quantity: productExist.quantity - 1,
              }
            : item
        )
      );
    }
  };
  const handlerCartClear = () => {
    setCartItems([]);
  };
  return (
    <>
      <Router>
        <Header
          cartItems={cartItems}
          isDarkMode={isDarkMode}
          modebg={modebg}
          modetext={modetext}
          toggleMode={() => setIsDarkMode(!isDarkMode)}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                cartItems={cartItems}
                handlerAddProduct={handlerAddProduct}
                handlerRemoveProduct={handlerRemoveProduct}
                handlerCartClear={handlerCartClear}
                isDarkMode={isDarkMode}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/shop"
            element={
              <Shop
                cartItems={cartItems}
                handlerAddProduct={handlerAddProduct}
                handlerRemoveProduct={handlerRemoveProduct}
              />
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/singleProduct/:productId"
            element={
              <SingleProduct
                cartItems={cartItems}
                handlerAddProduct={handlerAddProduct}
                handlerRemoveProduct={handlerRemoveProduct}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                handlerAddProduct={handlerAddProduct}
                handlerRemoveProduct={handlerRemoveProduct}
                handlerCartClear={handlerCartClear}
              />
            }
          />
          <Route path="*" element={<ErrorPage />} />
          {/* <Route
            path="/blogSinglePage/:productId"
            element={<BlogSinglePage />}
          /> */}
        </Routes>
        <Footer isDarkMode={isDarkMode} />
      </Router>
    </>
  );
}

export default App;
