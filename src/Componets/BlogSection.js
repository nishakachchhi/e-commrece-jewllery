import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import BlogPosts from "./BlogPostApi";

function BlogSection({ isDarkMode }) {
  // const blog = [
  //   {
  //     id: 1,
  //     img: "asset/img/blog_1.jpg",

  //     title: "top 6 evil eye earings that will rock your world",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum",
  //     data: "Nov 12, 2022",
  //     admin: "admin",
  //     product: "Fine Watches , handbags",
  //   },
  //   {
  //     id: 2,
  //     img: "asset/img/blog-2.jpg",
  //     title: "top 10 bags adding colour to  your wardrobe",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum",
  //     data: "Nov 15, 2022",
  //     admin: "admin",
  //     product: "bracelets , handbags",
  //   },
  //   {
  //     id: 3,
  //     img: "asset/img/blog-3.jpg",

  //     title: "Is it Better to Buy Limited Edition Watches?",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum",
  //     data: "Nov 14, 2022",
  //     admin: "admin",
  //     product: "Fine Watches",
  //   },
  // ];

  return (
    <>
      <div className="container-fluid mt-5">
        <h3 className="text-center fw-bold">LATEST IN BLOG</h3>

        <div className="row my-5">
          {BlogPosts.slice(0, 3).map((blog) => {
            const { id, Image, title, description, data, admin, product } =
              blog;
            return (
              <>
                <div className="col-lg-4 col-md-12 col-sm-12 col-12 px-3">
                  {/* <Link
                    to={`/blogSinglePage/${id}`}
                    className="text-decoration-none text-dark"
                  > */}
                  <div
                    className="position-relative blog-box overflow-hidden"
                    key={id}
                  >
                    <img src={Image} alt="" className="w-100 d-block" />
                    <div className="overlay-blog">
                      <div className="text-white py-3 px-4">
                        <h4 className="color text-capitalize">{title}</h4>
                        <p className="blog-p">{description}</p>
                        <Link className=" text-white bg-transparent text-decoration-none text-uppercase btn-continue">
                          continue
                          <span className="ps-2 fs-5">
                            <HiOutlineArrowNarrowRight />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="blog-body text-uppercase py-3">
                    <span className={` ${isDarkMode ? "text-white" : ""}`}>
                      {data}
                    </span>
                    <span className="px-3">
                      <span style={{ color: " #afafaf" }}>BY</span>
                      <span
                        to="#"
                        className={`ps-3 text-decoration-none ${
                          isDarkMode ? "text-white" : ""
                        }`}
                      >
                        {admin}
                      </span>
                    </span>
                    <span>
                      <span style={{ color: " #afafaf" }}>in</span>
                      <span
                        to="#"
                        className={`ps-3 text-decoration-none ${
                          isDarkMode ? "text-white" : ""
                        }`}
                      >
                        {product}
                      </span>
                    </span>
                  </div>
                  {/* </Link> */}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BlogSection;
