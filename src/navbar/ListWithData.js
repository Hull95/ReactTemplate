import React, { useState } from "react";

function ListWithData() {
  const [name, setName] = useState("Marko");

  const handleClickChange = () => {
    setName("Stefan");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-3 col-lg-3">
          <button className="btn btn-success" onClick={handleClickChange}>
            Change name
          </button>
        </div>
        <div className="col-12 col-md-3 col-lg-3">
          <label>{name}</label>
        </div>
      </div>
    </div>
  );
}

export default ListWithData;
