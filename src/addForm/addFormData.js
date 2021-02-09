import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const AddForm = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const handleClickDelete = (id) => {
  //   const deleteBlog = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(deleteBlog);
  // };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("Nije moguce ucitati ove podatke");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="Tabela sa podacima" />}
    </div>
  );
};

export default AddForm;
