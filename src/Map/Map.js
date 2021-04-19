import { useEffect, useState, useCallback, useReducer } from "react";

const initialState = 0;
const reducerCount = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Map = () => {
  const [count, dispatch] = useReducer(reducerCount, initialState);

  return (
    <div>
      <p>Rezultat: {count}</p>
      <button onClick={() => dispatch("increment")}>Povecaj</button>
      <button onClick={() => dispatch("decrement")}>Smanji</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default Map;
