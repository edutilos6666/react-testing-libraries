import React, { useState } from "react";
import Loader from "react-loader";

const ReactLoaderExample = props => {
  const [isLoaded, setIsLoaded] = useState(true);

  const toggleLoader = () => {
    setIsLoaded(!isLoaded);
  };

  const renderControl = isLoaded => {
    let buttonText = isLoaded ? "Show Loading Spinner" : "Hide Loading Spinner";
    return <button onClick={() => toggleLoader()}>{buttonText}</button>;
  };

  return (
    <div className="loader-wrapper">
      {renderControl(isLoaded)}
      <Loader loaded={isLoaded}>
        <div className="loaded-contents">Loading finished!</div>
      </Loader>
    </div>
  );
};

export default ReactLoaderExample;
