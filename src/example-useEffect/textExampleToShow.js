import { useEffect, useRef, useState } from "react";
const TextExampleToShow = () => {
  useEffect(() => {
    console.log("render!");
    return () => {
      console.log("rendering");
    };
  });

  return <div></div>;
};

export default TextExampleToShow;
