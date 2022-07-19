import React, { useReducer } from "react";

const initialState = {
    firstCounter: 0,
    secondCounter: 10
};
const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return { ...currentState, firstCounter: currentState.firstCounter + action.value };
    case "decrement":
        return { ...currentState, firstCounter: currentState.firstCounter - action.value };
    case "increment2":
        return { ...currentState, secondCounter: currentState.secondCounter + action.value };
    case "decrement2":
        return { ...currentState, secondCounter: currentState.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

function CounterTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count 1 - {state.firstCounter}</div>
      <div>Count 1 - {state.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1})}>Counter1Increment</button>
      <button onClick={() => dispatch({ type: "decrement", value: 1})}>Counter1Decrement</button>
      <button onClick={() => dispatch({ type: "increment", value: 5})}>Counter1Increment5</button>
      <button onClick={() => dispatch({ type: "decrement", value: 5})}>Counter1Decrement5</button>
      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 1})}>Counter2Increment</button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1})}>Counter2Decrement</button>
        <button onClick={() => dispatch({ type: "increment2", value: 5})}>Counter2Increment5</button>
        <button onClick={() => dispatch({ type: "decrement2", value: 5})}>Counter2Decrement5</button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterTwo;
