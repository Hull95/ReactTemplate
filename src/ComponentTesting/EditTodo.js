import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";
import { TodoActionEdit, viewData, viewDataClear } from "../action/TodoAction";

export const EditTodo = () => {
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const previewPost = useSelector((state) => state.getDataTodo.previewPost);
  const edit_redirect = useSelector((state) => state.getDataTodo.edit_redirect);

  const onSubmit = (data) => {
    dispatch(TodoActionEdit(data, id));
  };

  useEffect(() => {
    dispatch(viewData(id));
    return () => {
      dispatch(viewDataClear(id));
    };
  }, []);

  if (edit_redirect) {
    return <Redirect to="/componentsRandom" />;
  }

  return (
    <>
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
                  defaultValue={previewPost.title}
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
                  defaultValue={previewPost.blog_title}
                  className="form-control"
                  ref={register({ required: true, maxLength: 30 })}
                />
              </div>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
