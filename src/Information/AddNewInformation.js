import { useState } from "react";

const AddNewInformation = ({ setItems, setMode }) => {
  const [infoName, setInfoName] = useState("");
  const [infoBody, setInfoBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems((items) => [...items, { infoName, infoBody }]);
    setMode("preview");
  };

  const handleClickBack = () => {
    setMode("preview");
  };

  return (
    <div className="container mt-3">
      <form onSubmit={handleSubmit}>
        <div className="form-row justify-content-md-center">
          <div className="form-group col-12 col-md-6 col-lg-6">
            <label>Information name</label>
            <input
              type="text"
              className="form-control"
              required
              value={infoName}
              onChange={(e) => {
                setInfoName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-row justify-content-md-center">
          <div className="form-group col-12 col-md-6 col-lg-6">
            <label>Information description</label>
            <textarea
              type="text"
              className="form-control"
              required
              value={infoBody}
              onChange={(e) => setInfoBody(e.target.value)}
            />
          </div>
        </div>
        <div className="form-row justify-content-md-center">
          <div className="form-group text-right col-12 col-md-6 col-lg-6">
            <button className="btn btn-primary mr-2" onClick={handleClickBack}>
              Back
            </button>
            <button className="btn btn-success">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewInformation;
