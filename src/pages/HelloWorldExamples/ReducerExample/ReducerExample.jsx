import React, { useReducer } from "react";
import ReducerUI from "./ReducerUI";

const ReducerExample = () => {
  const initialState = { count: 0 };
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return {
          count: state.count + 1
        };

      case "decrement":
        return {
          count: state.count - 1
        };
      default:
        throw new Error();
    }
  }

  function reset(initialCount) {
    return {
      count: initialCount
    };
  }

  function reducer2(state, action) {
    switch (action.type) {
      case "increment":
        return {
          count: state.count + 1
        };

      case "decrement":
        return {
          count: state.count - 1
        };

      case "reset":
        return {
          count: action.payload
        };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const [state2, dispatch2] = useReducer(reducer2, 0, reset);
  return (
    <div className="d-flex flex-column">
      <ReducerUI
        title="Reducer with 2 parameters"
        state={state}
        dispatch={dispatch}
        actionTypes={["increment", "decrement"]}
      />
      <ReducerUI
        title="Reducer with 3 parameters"
        state={state2}
        dispatch={dispatch2}
        actionTypes={["increment", "decrement", "reset"]}
      />
    </div>
  );
};

export default ReducerExample;
