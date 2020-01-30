import React, { useState } from "react";
import ProgressButton from "react-progress-button";

const ReactProgressButtonExample = () => {
  const [buttonState, setButtonState] = useState("");

  const handleClick = () => {
    setButtonState("loading");
    // make asynchronous call
    setTimeout(() => {
      setButtonState("success");
    }, 3000);
  };

  return (
    <div>
      <ProgressButton onClick={handleClick} state={buttonState}>
        Go!
      </ProgressButton>
    </div>
  );
};

export default ReactProgressButtonExample;
