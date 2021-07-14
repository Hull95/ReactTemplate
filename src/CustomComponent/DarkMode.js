import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const DarkMode = () => {
  const [isLight, setIsLight] = useState(() => localStorage.getItem("mode"));

  useEffect(() => {
    if (isLight === "dark") {
      document.body.classList.add("dark-mode");
      localStorage.setItem("mode", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("mode", "light");
    }
  }, [isLight]);

  const handleChangeMode = () => {
    setIsLight((isLight) => (isLight === "light" ? "dark" : "light"));
  };

  return (
    <>
      <button className="btn" onClick={handleChangeMode}>
        {isLight === "light" ? (
          <FiSun className="font-size-20" />
        ) : (
          <FiMoon className="font-size-20 dark-mode-icon" />
        )}
      </button>
    </>
  );
};

export default DarkMode;
