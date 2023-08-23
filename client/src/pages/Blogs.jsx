import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Empty from "../components/Empty";
import Footer from "../components/Footer";
import BlogCart from "../components/BlogCart";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json").then((res) => res.json().then((data) => setBlogs(data)));
  }, []);
  console.log(blogs);
  return (
    <div>
      <>
        <Navbar />(
        <section className="container doctors">
          <h2 className="page-heading">Doctors Blogs</h2>
          {blogs.length > 0 ? (
            <div className="doctors-card-container">
              {blogs.map((ele) => {
                return <BlogCart key={ele.id} blog={ele}></BlogCart>;
              })}
            </div>
          ) : (
            <Empty />
          )}
        </section>
        )
        <Footer />
      </>
    </div>
  );
};

export default Blogs;
