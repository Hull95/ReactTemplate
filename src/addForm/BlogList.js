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
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{blog.author}</td>
              <td>{blog.body}</td>
              {/* <td>
                <button onClick={() => handleClickDelete(blog.id)}>
                  Delete
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogList;
