import React, { useState } from "react";
import Loader from "react-loaders";
// import "loaders.css/src/animations/pacman.scss";
// import "./index.scss";

const ReactLoadersExample = props => {
  const [active] = useState(true);
  const [size] = useState("lg");
  const renderLoader = type => {
    return (
      <div className="loader-container">
        <Loader key={type} type={type} active={active} size={size} />
        <p>{type}</p>
      </div>
    );
  };
  return <div className="d-flex flex-column">{renderLoader("ball-pulse")}</div>;
};

export default ReactLoadersExample;
