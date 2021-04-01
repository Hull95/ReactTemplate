import { useForm } from "react-hook-form";
import { createNewPostRedux } from "../action/index";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const NewPostRedux = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(createNewPostRedux(data));
    history.push("/formRedux");
  };

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
                  className="form-control"
                  ref={register({ required: true, maxLength: 30 })}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group text-right col-12 col-md-12 col-lg-12">
                <button className="btn btn-success">Add new post</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPostRedux;
