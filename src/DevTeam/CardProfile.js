import React from "react";

const CardProfile = ({ index, name, position }) => {
  return (
    <div className="col-12 col-md-4 col-lg-4 mt-3" key={index}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            <small className="text-muted">Position: {position}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
