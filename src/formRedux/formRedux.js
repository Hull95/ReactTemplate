import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams, Link } from "react-router-dom";
import { getData } from "../action";
import DarkMode from "./DarkMode";

function FormRedux(props) {
  const { id } = useParams();
  const content = useSelector((state) => state.getDataForm);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="row pt-2 pb-2">
          <div className="col-12 col-md-12 col-lg-6 col-xl-6">
            <h1>Pregled podataka</h1>
          </div>
          <div className="col-12 col-md-12 col-lg-6 col-xl-6">
            <Link className="btn btn-success" to="/create_post">
              Add new post
            </Link>
          </div>
          <div>
            <DarkMode />
          </div>
        </div>

        <div className="row">
          {content.data.map((item, id) => (
            <div className="col-12 col-md-4 col-lg-4 mt-3" key={id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    <small className="text-muted">Autor: {item.author}</small>
                  </p>
                </div>
                <div className="card-footer">
                  <Link
                    className="btn btn-danger mr-2"
                    to={`/preview_post/${item.id}`}>
                    Detail
                  </Link>
                  <Link
                    className="btn btn-success"
                    to={`/edit_post/${item.id}`}>
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FormRedux;
