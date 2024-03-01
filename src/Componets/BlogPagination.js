import React, { useState } from "react";
import BlogPosts from "./BlogPostApi";
import { Link } from "react-router-dom";

function BlogPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 2;
  const indexOfLastPage = currentPage * postPerPage; //1*9=9
  const indexOfFirstPage = indexOfLastPage - postPerPage; //9-9=0
  const currentPost = BlogPosts.slice(indexOfFirstPage, indexOfLastPage); //0,9
  const pageNumbers = Math.ceil(BlogPosts.length / postPerPage);
  const numbers = [...Array(pageNumbers + 1).keys()].slice(1);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (currentPage !== pageNumbers) {
      setCurrentPage(currentPage + 1);
    }
  }
  function changeCurrentPage(id) {
    setCurrentPage(id);
  }
  return (
    <>
      {currentPost.map((blogpost) => {
        const { id, Image, title, data, admin, product, comments } = blogpost;
        return (
          <div className="col-lg-12 pb-5" key={id}>
            <img src={Image} alt={title} className="w-100" />
            <div className="blog-body text-uppercase py-3">
              <span>{data}</span>
              <span className="px-3">
                <span style={{ color: " #afafaf" }}>BY</span>
                <span to="#" className="ps-2 text-decoration-none">
                  {admin}
                </span>
              </span>
              <span>
                <span style={{ color: " #afafaf" }}>in</span>
                <span to="#" className="ps-3 text-decoration-none">
                  {product}
                </span>
              </span>

              <span className="ps-3">{comments} Comments</span>
            </div>
            <h2 className=" text-capitalize fw-bold text-hover">{title}</h2>
            <p
              className="pb-4"
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "rgba(132,132,132,1)",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              pretium mollis ex, vel interdum augue faucibus sit amet. Proin
              tempor purus ac suscipit sagittis. Nunc finibus euismod enim, eu
              finibus nunc ullamcorper et. Fusce finibus non odio vel viverra.
              Aliquam condimentum dictum gravida. Sed eu odio id lorem fermentum
              faucibus.
            </p>
          </div>
        );
      })}

      <nav className="d-flex justify-content-center">
        <ul className="pagination">
          {currentPage === 1 ? (
            ""
          ) : (
            <li className="page-item btn-blog pe-3">
              <Link
                className="page-link text-dark"
                href="#"
                aria-label="Previous"
                onClick={prePage}
                style={{ borderRadius: "50%", border: "none" }}
              >
                <span aria-hidden="true">&larr;</span>
              </Link>
            </li>
          )}
          {numbers.map((p, i) => (
            <li className="page-item px-3 " key={i}>
              <Link
                className={`page-link ${
                  currentPage === p ? "pageActive" : " "
                }`}
                to="#"
                onClick={() => changeCurrentPage(p)}
                style={{ borderRadius: "50%", color: "black", border: "none" }}
              >
                {p}
              </Link>
            </li>
          ))}

          {currentPage === pageNumbers ? (
            ""
          ) : (
            <li className="page-item ps-3 ">
              <Link
                className="page-link"
                href="#"
                aria-label="Next"
                onClick={nextPage}
                style={{ borderRadius: "50%", border: "none" }}
              >
                <span aria-hidden="true" className="text-dark">
                  &rarr;
                </span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default BlogPagination;
