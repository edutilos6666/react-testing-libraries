import React from "react";
import { Chart } from "primereact/chart";

const PieChartExample = props => {
  const data = {
    labels: ["A", "B", "C"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }
    ]
  };

  return (
    <div style={{ height: "150px" }}>
      <div className="content-section introduction">
        <div className="feature-intro">
          <h1>PieChart</h1>
          <p>
            A pie chart is a circular statistical graphic, which is divided into
            slices to illustrate numerical proportion.
          </p>
        </div>
      </div>

      <div className="content-section implementation">
        <Chart type="pie" data={data} />
      </div>
    </div>
  );
};

export default PieChartExample;
