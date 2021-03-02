import { useEffect, useRef, useState } from "react";
const TextExampleToShow = () => {
  useEffect(() => {
    console.log("render!");
    return () => {
      console.log("rendering");
    };
  });

  return <p>Sakrij ovo</p>;
};

export default TextExampleToShow;
