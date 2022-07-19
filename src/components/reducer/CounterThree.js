import React, { useReducer } from "react";

const initialCount = 0;
const reducer = (currentCount, action) => {
  switch (action) {
    case "increment":
      return currentCount + 1;
    case "decrement":
      return currentCount - 1;
    case "reset":
      return initialCount;
    default:
      return currentCount;
  }
};

function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialCount);
  const [countTwo, dispatch2] = useReducer(reducer, initialCount);
  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <div>
        <div>Count Two - {countTwo}</div>
        <button onClick={() => dispatch2("increment")}>Increment</button>
        <button onClick={() => dispatch2("decrement")}>Decrement</button>
        <button onClick={() => dispatch2("reset")}>Reset</button>
      </div>
    </div>
  );
}

export default CounterThree;
