import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { viewData, viewDataClear } from "../action/index";
import { useHistory } from "react-router-dom";

const PreviewDetailPost = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const previewDataPost = useSelector((state) => state.getDataForm.previewPost);
  const history = useHistory();

  const handleClickBack = () => {
    history.push("/formRedux");
  };

  useEffect(() => {
    dispatch(viewData(id));
    return () => {
      dispatch(viewDataClear(id));
    };
  }, []);

  if (
    Object.keys(previewDataPost).length === 0 &&
    previewDataPost.constructor === Object
  ) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="row justify-content-md-center mt-3">
        <div className="col-12 col-md-6 col-lg-6">
          <div className="form-row">
            <div className="form-group col-12 col-md-12 col-lg-12">
              <label>Title</label>
              <input
                type="text"
                id="title"
                name="title"
                defaultValue={previewDataPost.title}
                className="form-control"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-12 col-md-12 col-lg-12">
              <label>Blog title</label>
              <input
                type="text"
                id="blog_title"
                name="blog_title"
                defaultValue={previewDataPost.blog_title}
                className="form-control"
              />
            </div>
          </div>
          <button className="btn btn-primary" onClick={handleClickBack}>
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default PreviewDetailPost;
