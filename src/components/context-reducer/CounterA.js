import React, { useContext } from "react";
import { CounterContext } from "./Counter";

function CounterA() {
  const { counterState, counterDispatch } = useContext(CounterContext);
  return (
    <div>
      Counter A : {counterState}
      <button onClick={() => counterDispatch("Increment")}>Increment</button>
      <button onClick={() => counterDispatch("Decrement")}>Decrement</button>
      <button onClick={() => counterDispatch("Reset")}>Reset</button>
    </div>
  );
}

export default CounterA;
