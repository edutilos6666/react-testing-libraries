import React from "react";
import PieChartExample from "./PieChartExample";
import DoughnutChartExample from "./DoughnutChartExample";
import BarChartExample from "./BarChartExample";
import PolarAreaChartExample from "./PolarAreaChartExample";
import RadarChartExample from "./RadarChartExample";

const ChartExamples = props => {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-row">
        <div className="col-3">
          <PieChartExample />
        </div>
        <div className="col-3">
          <DoughnutChartExample />
        </div>
        <div className="col-3">
          <PolarAreaChartExample />
        </div>
        <div className="col-3">
          <RadarChartExample />
        </div>
      </div>
      {/* <div className="d-flex flex-row">
        <BarChartExample />
      </div> */}
    </div>
  );
};

export default ChartExamples;
