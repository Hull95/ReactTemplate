import { useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../action";

function FormRedux() {
  const content = useSelector((state) => state.getDataForm);

  console.log(content.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className="App">
      {content.data.map((item, index) => {
        return (
          <ul key={index}>
            <li>{item.author}</li>
            <li>{item.title}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default FormRedux;
