import { useParams } from "react-router-dom";
import shopitems from "./ShopPageApi";

function SingleProduct({ handlerAddProduct }) {
  const { productId } = useParams();
  const product = shopitems.find((pro) => productId === pro.id);
  // useEffect(() => {
  //   fetch(`https://fakestoreapi.com/products/${productId}`).then((data) =>
  //     setProduct(data)
  //   );
  // }, [productId]);
  console.log(product);
  return (
    <>
      <div className="container-fluid silder-box ">
        <h1 className="">SingleProduct</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex  justify-content-center p-3">
              <div className="position-relative new-box">
                <img src={product.iamge} alt={product.name} className="" />

                <div className="position-absolute hot-box bg-white px-3 py-1 rounded-pill text-uppercase text-danger">
                  {product.hot}
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-3">
              <h5>Id:{productId}</h5>
              <h1 className="fw-bolder">{product.name}</h1>
              <p>
                These gold-plated hoops are sure to add a touch of glamour to
                your evening look. Designed to hug the ears, they’re a sure snug
                fit, finished with pretty pearls swinging off the base. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="fs-3 fw-bold">${product.price}</p>
              <div
                className="btn text-uppercase bg-dark text-white rounded-pill px-5 py-3  fw-bold"
                onClick={() => handlerAddProduct(product)}
              >
                add to cart
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
