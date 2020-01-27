import React from "react";
import ChartistGraph from "react-chartist";

export default function ChartistBarChartExample() {
  const data = {
    labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"],
    series: [[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]]
  };

  const options = {
    high: 10,
    low: -10,
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 2 === 0 ? value : null;
      }
    }
  };

  const type = "Bar";

  return (
    <div className="d-flex flex-column pt-5 pb-5">
      <h2>ChartistBarChartExample</h2>
      <ChartistGraph data={data} options={options} type={type} />
    </div>
  );
}
