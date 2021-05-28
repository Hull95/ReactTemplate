import React, { useEffect, useState } from "react";
import usePrevious from "use-previous";

export const ToggleComponent = () => {
  const [toggle, setToggle] = useState("False");
  return (
    <>
      <button
        className={toggle ? "btn btn-success" : "btn btn-primary"}
        onClick={() => setToggle(!toggle)}>
        {toggle ? "False" : "True"}
      </button>
    </>
  );
};

export const SubmitLoader = () => {
  const [submit, setSubmit] = useState(false);

  const HandleSubmitSpiner = () => {
    setSubmit(!submit);
    setTimeout(() => {
      setSubmit(submit);
    }, 2000);
  };

  return (
    <>
      <button
        className="btn btn-danger"
        onClick={HandleSubmitSpiner}
        disabled={submit}>
        {submit === false ? "Submit" : "Loading..."}
      </button>
    </>
  );
};

export const PreviousValue = () => {
  const [number, setNumber] = useState([0, 1, 2, 3, 4]);

  const handleClick = () => {
    for (let num in number) {
      setInterval(() => {
        let randomNum = Math.floor(Math.random() * num);
        console.log(randomNum);
      }, 2000);
    }
  };

  return (
    <>
      <div className="container">
        <button className="btn btn-danger" onClick={handleClick}>
          Set random combination
        </button>
        <div className="row mt-5">
          <div className="col-12 col-md-12 col-lg-12 col-xl-12">
            <span className="sv-padding-previous-v mr-2"></span>
            <span className="sv-padding-previous-v mr-2"></span>
            <span className="sv-padding-previous-v mr-2"></span>
            <span className="sv-padding-previous-v mr-2"></span>
            <span className="sv-padding-previous-v mr-2"></span>
            <span className="sv-padding-previous-v mr-2"></span>
            <span className="sv-padding-previous-v"></span>
          </div>
        </div>
      </div>
    </>
  );
};
