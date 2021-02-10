import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogInfo = () => {
  const { id } = useParams();
  const { data: blog, isLoading, error } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  return (
    <div className="container">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <div>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <div>{blog.body}</div>
        </div>
      )}
    </div>
  );
};

export default BlogInfo;
