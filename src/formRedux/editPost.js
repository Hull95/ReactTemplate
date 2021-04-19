import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  editOldPostData,
  viewData,
  deleteOldPostData,
  viewDataClear,
} from "../action/index";
import { useForm } from "react-hook-form";

const EditPost = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const previewDataPost = useSelector((state) => state.getDataForm.previewPost);
  const edit_redirect = useSelector((state) => state.getDataForm.edit_redirect);
  const delete_redirect = useSelector(
    (state) => state.getDataForm.delete_redirect
  );
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    dispatch(editOldPostData(data, id));
  };

  const handleDeleteButton = () => {
    dispatch(deleteOldPostData(id));
  };

  useEffect(() => {
    dispatch(viewData(id));
    return () => {
      dispatch(viewDataClear(id));
    };
  }, []);

  if (edit_redirect) {
    return <Redirect to="/formRedux" />;
  }

  if (delete_redirect) {
    return <Redirect to="/formRedux" />;
  }

  if (
    previewDataPost.constructor === Object &&
    Object.keys(previewDataPost).length === 0
  ) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="row justify-content-md-center mt-3">
        <div className="col-12 col-md-6 col-lg-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
              <div className="form-group col-12 col-md-12 col-lg-12">
                <label>Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  defaultValue={previewDataPost.title}
                  className="form-control"
                  ref={register({ required: true, maxLength: 30 })}
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
                  ref={register({ required: true, maxLength: 30 })}
                />
              </div>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
          <button className="btn btn-primary" onClick={handleDeleteButton}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
