import React, { useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./index.css";
import classnames from "classnames";

const ReactAwesomeSliderExample = props => {
  const [numbers] = useState(["first", "second", "third", "fourth"]);
  return (
    <AwesomeSlider>
      {numbers.map((one, index) => (
        <div key={index} className={classnames("slide", one)}>
          {one}
        </div>
      ))}
    </AwesomeSlider>
  );
};

export default ReactAwesomeSliderExample;
