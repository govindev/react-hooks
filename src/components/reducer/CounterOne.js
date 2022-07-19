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

function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialCount);
  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default CounterOne;
