import React, { useReducer } from "react";
import CounterA from "./CounterA";
import CounterB from "./CounterA";
import CounterC from "./CounterA";

const initialState = 0;
const reducer = (currentState, action) => {
  switch (action) {
    case "Increment":
      return currentState + 1;
    case "Decrement":
      return currentState - 1;
    case "Reset":
      return initialState;
    default:
      return currentState;
  }
};

export const CounterContext = React.createContext();
function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={{ counterState: count, counterDispatch: dispatch }}>
      <div>
        Count - {count}
        <CounterA />
        <CounterB />
        <CounterC />
      </div>
    </CounterContext.Provider>
  );
}

export default Counter;
