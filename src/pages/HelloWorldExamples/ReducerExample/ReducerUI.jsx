import React from "react";
import { Button } from "react-bootstrap";

const ReducerUI = ({ title, state, dispatch, actionTypes }) => {
  return (
    <div className="d-flex flex-column">
      <h3>{title}</h3>
      <span>
        Count: <strong>{state.count}</strong>
      </span>
      <div className="d-flex flex-row">
        {actionTypes.map((one, index) => (
          <Button
            key={index}
            className="primary"
            onClick={() => dispatch({ type: one, payload: 0 })}
          >
            {one}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ReducerUI;
