import BlogList from "./BlogList";
import useFetch from "./useFetch";

const AddForm = () => {
  const { data: blogs, isLoading, error } = useFetch(
    "http://localhost:8000/blogs"
  );

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="Tabela sa podacima" />}
    </div>
  );
};

export default AddForm;
