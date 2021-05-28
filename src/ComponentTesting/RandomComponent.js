import React, { useState } from "react";

export const RandomComponent = () => {
  const [infoText, setInfoText] = useState("");
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
    setItems((items) => [...items, { infoText }]);
  };

  const handleChangeInfoText = (e) => {
    setInfoText(e.target.value);
  };

  const handleDelete = (id) => {
    const newList = items.filter((item) => item.id !== id);
    setItems(newList);
  };

  return (
    <>
      <div className="container">
        <div className="row pt-5">
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              name="infoText"
              value={infoText}
              onChange={handleChangeInfoText}
            />
            <button className="btn" type="submit" onClick={onSubmit}>
              +
            </button>
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-4">
            {items &&
              items.map((item, id) => (
                <div className="col-12 col-md-4 col-lg-4 mt-3" key={id}>
                  <p>{item.infoText}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleDelete(item.id)}>
                    -
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
