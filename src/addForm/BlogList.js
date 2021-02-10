import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleClickDelete }) => {
  return (
    <div className="container">
      <div className="row mb-4 mt-4">
        <div className="col-12 col-md-12 col-lg-12">
          <h2>{title}</h2>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Body</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, index) => (
            <tr key={index}>
              <Link to={`/blogs/${blog.id}`}>
                <td>{index + 1}</td>
                <td>{blog.author}</td>
                <td>{blog.body}</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogList;
