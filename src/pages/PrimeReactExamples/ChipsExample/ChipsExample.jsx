import React, { useState } from "react";
import { Chips } from "primereact/chips";

const ChipsExample = props => {
  const [values1, setValues1] = useState([]);
  const [values2, setValues2] = useState([]);
  const customChip = item => {
    return (
      <div>
        <span>{item} - (active) </span>
        <i className="pi pi-user-plus" style={{ fontSize: "14px" }}></i>
      </div>
    );
  };

  return (
    <div>
      <div className="content-section introduction">
        <div className="feature-intro">
          <h1>Chips</h1>
          <p>Chips is used to enter multiple values on an input field.</p>
        </div>
      </div>

      <div className="content-section implementation p-fluid">
        <h3>Basic</h3>
        <Chips value={values1} onChange={e => setValues1(e.value)}></Chips>

        <h3>Template</h3>
        <Chips
          value={values2}
          onChange={e => setValues2(e.value)}
          max={5}
          itemTemplate={customChip}
        ></Chips>
      </div>
    </div>
  );
};

export default ChipsExample;
