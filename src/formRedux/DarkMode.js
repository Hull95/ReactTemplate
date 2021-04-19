import React, { useState } from "react";

const DarkMode = () => {
  const [isLight, setIsLight] = useState(true);

  const handleClick = () => {
    setIsLight(!isLight);
  };

  return (
    <>
      <button className="btn" value={isLight} onClick={handleClick}>
        {isLight ? "🔆" : "🌙"}
      </button>
    </>
  );
};

export default DarkMode;
