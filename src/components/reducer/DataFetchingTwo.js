import axios from "axios";
import React, { useEffect, useReducer } from "react";

const reducer = (currentState, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, post: {}, error: "" };
    case "FETCH_SUCCESS":
      return { loading: false, post: action.value, error: "" };
    case "FETCH_ERROR":
      return { loading: false, post: {}, error: action.value };
    default:
      return currentState;
  }
};
const initialState = {
  loading: false,
  post: {},
  error: "",
};
function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: "LOADING" });
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", value: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", value: "Something went wrong !" });
      });
  }, []);
  return (
    <div>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? state.error : ""}
    </div>
  );
}

export default DataFetchingTwo;
