import React from "react";
import { Chart } from "primereact/chart";

const PolarAreaChartExample = props => {
  const data = {
    datasets: [
      {
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#E7E9ED",
          "#36A2EB"
        ],
        label: "My dataset"
      }
    ],
    labels: ["Red", "Green", "Yellow", "Grey", "Blue"]
  };

  return (
    <div>
      <div className="content-section introduction">
        <div className="feature-intro">
          <h1>PolarAreaChart</h1>
          <p>
            Polar area charts are similar to pie charts, but each segment has
            the same angle - the radius of the segment differs depending on the
            value.
          </p>
        </div>
      </div>

      <div className="content-section implementation">
        <Chart type="polarArea" data={data} />
      </div>
    </div>
  );
};

export default PolarAreaChartExample;
