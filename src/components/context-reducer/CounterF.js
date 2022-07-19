import React, { useContext } from "react";
import { CounterContext } from "./Counter";

function CounterF() {
  const { counterState, counterDispatch } = useContext(CounterContext);
  return (
    <div>
      Counter F : {counterState}
      <button onClick={() => counterDispatch("Increment")}>Increment</button>
      <button onClick={() => counterDispatch("Decrement")}>Decrement</button>
      <button onClick={() => counterDispatch("Reset")}>Reset</button>
    </div>
  );
}

export default CounterF;
