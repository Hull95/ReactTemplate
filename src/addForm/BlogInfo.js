import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogInfo = () => {
  const { id } = useParams();
  const { data: blog, isLoading, error } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  const history = useHistory();

  const handleClickBack = () => {
    history.push("/");
  };

  const handleClickDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12 col-md-12 col-lg-12 text-center">
          {isLoading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </div>
      </div>
      {blog && (
        <div className="row justify-content-md-center mt-3">
          <div className="col-12 col-md-6 col-lg-6">
            <div className="form-group">
              <label>{blog.title}</label>
              <input
                type="text"
                className="form-control"
                required
                value={blog.title}
                disabled
              />
            </div>
            <div className="form-group">
              <label>Blog author</label>
              <input
                type="text"
                className="form-control"
                value={blog.author}
                disabled
              />
            </div>
            <div className="form-group">
              <label>Blog body</label>
              <textarea
                className="form-control"
                rows="3"
                value={blog.body}
                disabled
              />
            </div>
            <div className="form-group float-right">
              <button className="btn btn-danger" onClick={handleClickDelete}>
                Delete
              </button>
            </div>
            <div className="form-group float-right mr-2">
              <button className="btn btn-primary" onClick={handleClickBack}>
                Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogInfo;
