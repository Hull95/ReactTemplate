import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-12">
          <h2>That page cannot be found</h2>
        </div>
        <div className="col-12 col-md-12 col-lg-12">
          <Link to="/"> Back to blog </Link>
        </div>
      </div>
    </div>
  );
};

export default Page404;
