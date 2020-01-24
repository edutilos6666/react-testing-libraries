import React, { forwardRef, useRef } from "react";
import FancyInput from "./FancyInput";
import { Button } from "react-bootstrap";

const FancyInputExample = (props, ref) => {
  //   const FancyInputEx = forwardRef(FancyInput);
  const fancyInput1Ref = useRef(null);
  const fancyInput2Ref = useRef(null);
  const fancyInput3Ref = useRef(null);

  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-row">
        <FancyInput className="col-4" ref={fancyInput1Ref} />
        <FancyInput ref={fancyInput2Ref} />
        <FancyInput ref={fancyInput3Ref} />
      </div>
      <div className="d-flex flex-row">
        <Button
          className="primary"
          onClick={() => fancyInput1Ref.current.focus()}
        >
          focus on 1.element
        </Button>
        <Button
          className="primary"
          onClick={() => fancyInput2Ref.current.focus()}
        >
          focus on 2.element
        </Button>
        <Button
          className="primary"
          onClick={() => fancyInput3Ref.current.focus()}
        >
          focus on 3.element
        </Button>

        <Button
          className="secondary"
          onClick={() => {
            const text = "pako";
            fancyInput1Ref.current.writeValue(text);
            fancyInput2Ref.current.writeValue(text);
            fancyInput3Ref.current.writeValue(text);
          }}
        >
          Write pako in all inputs
        </Button>
      </div>
    </div>
  );
};

export default FancyInputExample;
