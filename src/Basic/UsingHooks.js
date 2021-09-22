import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return 0;

    default:
      throw new Error("Unexpected action");
  }
};

const UsingHooks = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>{state}</div>
      <button onClick={() => dispatch("increment")}> +1 </button>
      <button onClick={() => dispatch("decrement")}> -1 </button>
      <button onClick={() => dispatch("reset")}> Reset </button>
    </>
  );
};

export default UsingHooks;
