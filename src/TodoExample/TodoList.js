import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import TitlePage from "../CustomComponent/TitlePage";

function TodoList() {
  const { register, handleSubmit } = useForm();
  const [infoText, setInfoText] = useState("");
  const [lastname, setLastName] = useState("");
  const [error, setError] = React.useState(null);
  const [id, setId] = useState("");
  const [items, setItems] = useState([
    {
      id: "1",
      infoText: "Robin",
      lastname: "Wieruch",
    },
    {
      id: "2",
      infoText: "Dave",
      lastname: "Davidds",
    },
  ]);

  const onSubmit = () => {
    setItems((items) => [...items, { infoText, lastname, id }]);

    setInfoText("");
    setLastName("");
    setId("");
  };

  const handleChange = (e) => {
    setInfoText(e.target.value);

    const value = e.target.value[0];

    const isLowerCase = value === value.toLowerCase();

    setError(isLowerCase ? null : "Mora se pisati malim slovima");
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeId = (e) => {
    setId(e.target.value);
  };

  const handleDelet = (id) => {
    const newList = items.filter((item) => item.id !== id);
    setItems(newList);
  };

  return (
    <div className="container pt-4 pb-4">
      <TitlePage nameTitle={"Todo list"} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row pt-4 pb-4 ">
          <div className="col-12 col-md-12 col-lg-12 col-xl-12 pt-3 pt-3">
            <input
              type="number"
              className="form-control"
              ref={register}
              name="id"
              value={id}
              onChange={handleChangeId}
            />
          </div>
          <div className="col-12 col-md-12 col-lg-12 col-xl-12 pt-3">
            <input
              type="text"
              className="form-control"
              ref={register}
              name="infoText"
              value={infoText}
              onChange={handleChange}
            />
            <small>{error}</small>
          </div>
          <div className="col-12 col-md-12 col-lg-12 col-xl-12 pt-3">
            <input
              type="text"
              className="form-control"
              ref={register}
              name="lastname"
              value={lastname}
              onChange={handleChangeLastName}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12 col-xl-12 text-right">
            <button
              className="btn btn-success w-25"
              type="submit"
              disabled={Boolean(error)}>
              Add
            </button>
          </div>
        </div>
      </Form>

      <div className="row">
        {items &&
          items.map((item, id) => (
            <div className="col-12 col-md-4 col-lg-4 mt-3" key={id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.infoText}</h5>
                  <p>{item.lastname}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelet(item.id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TodoList;
