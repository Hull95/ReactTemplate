import { useState } from "react";
import AddNewInformation from "./AddNewInformation";

const GetDataInformation = ({ title }) => {
  const [items, setItems] = useState([]);
  const [mode, setMode] = useState("preview");

  const handleClickAdd = () => {
    setMode("create");
  };

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-12 col-md-12 col-lg-12">
          <h3>{title}</h3>
        </div>
      </div>

      {mode === "preview" && (
        <div>
          <div className="row mt-3">
            <div className="col-12 col-md-12 col-lg-12 text-right">
              <button className="btn btn-success" onClick={handleClickAdd}>
                Add new information
              </button>
            </div>
          </div>
          <div className="row">
            {items &&
              items.map((information, index) => (
                <div className="col-12 col-md-4 col-lg-4 mt-3" key={index}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{information.infoName}</h5>
                      <p className="card-text">{information.infoBody}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {mode === "create" && (
        <AddNewInformation setItems={setItems} setMode={setMode} />
      )}
    </div>
  );
};

export default GetDataInformation;
