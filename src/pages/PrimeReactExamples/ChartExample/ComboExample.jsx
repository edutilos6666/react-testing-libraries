import React from "react";
import { Chart } from "primereact/chart";

const ComboExample = props => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        type: "line",
        label: "Dataset 1",
        borderColor: "#2196F3",
        borderWidth: 2,
        fill: false,
        data: [50, 25, 12, 48, 56, 76, 42]
      },
      {
        type: "bar",
        label: "Dataset 2",
        backgroundColor: "#4CAF50",
        data: [21, 84, 24, 75, 37, 65, 34],
        borderColor: "white",
        borderWidth: 2
      },
      {
        type: "bar",
        label: "Dataset 3",
        backgroundColor: "#FFC107",
        data: [41, 52, 24, 74, 23, 21, 32]
      }
    ]
  };

  const options = {
    responsive: true,
    title: {
      display: true,
      text: "Combo Bar Line Chart"
    },
    tooltips: {
      mode: "index",
      intersect: true
    }
  };

  return (
    <div>
      {/* <div className="content-section introduction">
        <div className="feature-intro">
          <h1>Combo Chart</h1>
          <p>Different chart types can be combined in the same graph.</p>
        </div>
      </div> */}

      <div className="content-section implementation">
        <h3>Combo Chart</h3>
        <Chart type="bar" data={data} options={options} />
      </div>
    </div>
  );
};

export default ComboExample;
