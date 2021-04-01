import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchResult, setSearchResult] = useState([]);

  // const searchFilterData = blogs.filter((blogs) => {
  //   return blogs.title.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  useEffect(() => {
    // setSearchResult(searchFilterData);
  }, [blogs]);

  return (
    <div className="container">
      <div className="row mb-4 mt-4">
        <div className="col-12 col-md-12 col-lg-12">
          <h2>{title}</h2>
        </div>
      </div>

      <div className="row">
        {/* <div className="col-12 col-md-12 col-lg-4 text-left">
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}></input>
        </div> */}
        <div className="col-12 col-md-12 col-lg-4 text-left">
          <button className="btn btn-success">Search</button>
        </div>
        <div className="col-12 col-md-12 col-lg-4 text-right">
          <a className="btn btn-success" href="/create_blog">
            Add new blog
          </a>
        </div>
      </div>

      <div className="row">
        {blogs.map((blog, index) => (
          <div className="col-12 col-md-4 col-lg-4 mt-3" key={index}>
            <Link to={`/blogs/${blog.id}`}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.body}</p>
                  <p className="card-text">
                    <small className="text-muted">Autor: {blog.author}</small>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
