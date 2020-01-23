import React from "react";
import { Chart } from "primereact/chart";

const DoughnutChartExample = props => {
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
          <h1>DoughnutChart</h1>
          <p>
            A doughnut chart is a variant of the pie chart, with a blank center
            allowing for additional information about the data as a whole to be
            included.
          </p>
        </div>
      </div>

      <div className="content-section implementation">
        <Chart type="doughnut" data={data} />
      </div>

      <DoughnutChartExampleDoc></DoughnutChartExampleDoc>
    </div>
  );
};

const DoughnutChartExampleDoc = props => {
  return <h1>DoughnutChartExampleDoc</h1>;
};

export default DoughnutChartExample;
