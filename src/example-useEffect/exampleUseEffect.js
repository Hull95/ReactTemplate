import { useEffect, useRef, useState } from "react";
import TextExampleToShow from "./textExampleToShow";

const ExampleUseEffect = () => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);
  const [counter, setCounter] = useState(false);
  const [toggleButton, setToggleButton] = useState(true);

  const changeToggleButton = () => {
    setToggleButton(!toggleButton);
  };

  useEffect(() => {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-12 col-lg ">
          <button onClick={toggle}>Show / Hide</button>
          {show && <TextExampleToShow />}
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-12 col-lg ">
          <p>Counter: {counter} </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-12 col-lg ">
          <div onClick={changeToggleButton}>{toggleButton ? "Da" : "Ne"}</div>
        </div>
      </div>
    </div>
  );
};

export default ExampleUseEffect;
