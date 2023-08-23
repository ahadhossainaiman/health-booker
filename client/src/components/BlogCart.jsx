import React from "react";
import "../styles/blogCart.css";
import { Rating } from "@smastrom/react-rating";
import { FaStreetView } from "react-icons/fa";
// import { GrView } from "react-icons/fa";

const BlogCart = (blog) => {
  const doctorBlog = blog.blog;
  console.log(doctorBlog);
  return (
    <div className="container ">
      <div className="card">
        <img className="" src={doctorBlog.image} alt="" />
        <div className="card-content">
          <h2 className="h2">{doctorBlog.author}</h2>
          <h1 className="h1">{doctorBlog.title}</h1>

          <p className="excerpt">{doctorBlog.content}</p>
          <h2 className="h3">Publish Date:{doctorBlog.published_date}</h2>
          <Rating
            style={{ maxWidth: 180 }}
            value={doctorBlog.rating}
            readOnly
          />
          <p className="author">
            <FaStreetView />
            View:
            {doctorBlog.total_view}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCart;
