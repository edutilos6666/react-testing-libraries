import React from "react";
import Sticky from "react-stickynode";
import BarChartExample from "../PrimeReactExamples/ChartExample/BarChartExample";

const ReactStickyNodeExample = props => {
  return (
    <div className="d-flex flex-column">
      <Sticky enabled={true} top={50} bottomBoundary={1200}>
        <h1>Hello World</h1>
      </Sticky>
      <BarChartExample />
    </div>
  );
};

export default ReactStickyNodeExample;
