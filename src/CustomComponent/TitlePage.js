import React from "react";

const TitlePage = ({ nameTitle = "" }) => {
  return (
    <>
      <div className="row text-center d-flex justify-content-center pt-4 pb-4">
        <div className="col-12 col-md-12 col-lg-12 col-xl-12">
          <h1>{`${nameTitle}`}</h1>
        </div>
      </div>
      <hr />
    </>
  );
};

export default TitlePage;
