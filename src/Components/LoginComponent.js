import React, { useEffect, useState } from "react";

const arr = [
  {
    name: "Stef",
    age: 23,
  },
  {
    name: "Stef 1",
    age: 23,
  },
  {
    name: "Stef 2",
    age: 23,
  },
  {
    name: "Stef 3",
    age: 23,
  },
];

export const LoginComponent = () => {
  const [valueLogin, setValueLogin] = useState({
    name: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setValueLogin((valueLogin) => ({
      ...valueLogin,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    console.log(valueLogin);
  };

  useEffect(() => {}, [valueLogin]);
  console.log(valueLogin);

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row mt-5">
            <div className="col-6">
              <input
                type="text"
                className="form-control mb-2"
                name="name"
                value={valueLogin.name}
                onChange={handleInputChange}
              />
              <input
                type="password"
                className="form-control mb-2"
                name="password"
                value={valueLogin.password}
                onChange={handleInputChange}
              />
              <button className="btn btn-success float-right">Login</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
