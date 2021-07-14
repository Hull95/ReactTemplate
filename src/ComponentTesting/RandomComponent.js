import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoAction, deleteOldPostData } from "../action/TodoAction";
import { Link, Redirect, useParams } from "react-router-dom";

export const RandomComponent = (props) => {
  const { id } = useParams();
  const previewTodoData = useSelector((state) => state.getDataTodo);
  const delete_redirect = useSelector(
    (state) => state.getDataTodo.delete_redirect
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TodoAction());
  }, [dispatch]);

  const handleDeleteTodo = () => {
    dispatch(deleteOldPostData(id));
  };

  if (delete_redirect) {
    return <Redirect to="/componentsRandom" />;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6 col-xl-6">
            <Link className="btn btn-success" to="/create_todo_post">
              Add new post
            </Link>
          </div>
        </div>
        <div className="row">
          {previewTodoData.data.map((item, key) => (
            <div className="col-4 border m-3" key={key}>
              <h3>{item.title}</h3>
              <Link
                className="btn btn-success"
                to={`/edit_post_todo/${item.id}`}>
                Edit
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
