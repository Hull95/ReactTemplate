import { useState } from "react";

const CreateNewBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Milos");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setLoading(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setLoading(false);
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-12">Create blog</div>
      </div>
      <div className="row">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Blog title</label>
            <input
              type="text"
              className="form-control"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Blog body</label>
            <textarea
              className="form-control"
              rows="3"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Blog author</label>
            <select
              className="form-control"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}>
              <option value="Milos">Milos</option>
              <option value="Ivan">Ivan</option>
            </select>
          </div>
          {!loading && <button className="btn btn-success">Add blog</button>}
          {loading && (
            <button className="btn btn-success" disabled>
              Adding new blog...
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateNewBlog;
