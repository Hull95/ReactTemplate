import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const CreateNewBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const [addrtype, setAddrtype] = useState([
    "",
    "Srdjan",
    "Marko",
    "Ivan",
    "Marta",
  ]);

  const onSubmit = () => {
    const blog = { title, body, author };
    setLoading(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setLoading(false);
      history.push("/");
    });
  };

  const handleClickBack = () => {
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12 col-md-12 col-lg-12 text-center">
          Create blog
        </div>
      </div>
      <div className="row justify-content-md-center mt-3">
        <div className="col-12 col-md-6 col-lg-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
              <div className="form-group col-12 col-md-12 col-lg-12">
                <label>Blog title</label>
                <input
                  type="text"
                  id="blog_title"
                  name="blog_title"
                  className="form-control"
                  aria-invalid={errors.blog_title ? "true" : "false"}
                  onChange={(e) => setTitle(e.target.value)}
                  ref={register({ required: true, maxLength: 30 })}
                />
                {errors.blog_title && errors.blog_title.type === "required" && (
                  <span role="alert" className="sv-form-field-required">
                    Blog title is required!
                  </span>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-12 col-md-12 col-lg-12">
                <label>Blog author</label>
                <select
                  className="form-control"
                  as="select"
                  name="author"
                  ref={register({ required: true })}
                  onChange={(e) => setAuthor(e.target.value)}>
                  {addrtype.map((value, key) => (
                    <option key={key} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
                {errors.author && errors.author.type === "required" && (
                  <span role="alert" className="sv-form-field-required">
                    Blog author is required!
                  </span>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-12 col-md-12 col-lg-12">
                <label>Blog body</label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group text-right col-12 col-md-12 col-lg-12">
                <button
                  className="btn btn-primary mr-2"
                  onClick={handleClickBack}>
                  Back
                </button>
                {!loading && <button className="btn btn-success">Save</button>}
                {loading && (
                  <button className="btn btn-success" disabled>
                    Adding new blog...
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewBlog;
