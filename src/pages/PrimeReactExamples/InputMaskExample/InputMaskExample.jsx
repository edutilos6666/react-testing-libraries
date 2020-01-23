import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";

const InputMaskExample = props => {
  const [val1, setVal1] = useState(null);
  const [val2, setVal2] = useState(null);
  const [val3, setVal3] = useState(null);
  const [val4, setVal4] = useState(null);
  const [val5, setVal5] = useState(null);
  const [val6, setVal6] = useState(null);

  return (
    <div>
      <div className="content-section introduction">
        <div className="feature-intro">
          <h1>InputMask</h1>
          <p>
            InputMask component is used to enter input in a certain format such
            as numeric, date, currency, email and phone.
          </p>
        </div>
      </div>

      <div className="content-section implementation inputgrid-demo">
        <div className="p-grid p-fluid">
          <div className="p-col-12 p-md-4">
            <h3>Basic {val1}</h3>
            <InputMask
              mask="99-999999"
              value={val1}
              placeholder="99-999999"
              onChange={e => setVal1(e.value)}
            ></InputMask>
          </div>

          <div className="p-col-12 p-md-4">
            <h3>SSN {val2}</h3>
            <InputMask
              mask="999-99-9999"
              value={val2}
              placeholder="999-99-9999"
              onChange={e => setVal2(e.value)}
            ></InputMask>
          </div>

          <div className="p-col-12 p-md-4">
            <h3>Date {val3}</h3>
            <InputMask
              mask="99/99/9999"
              value={val3}
              placeholder="99/99/9999"
              slotChar="mm/dd/yyyy"
              onChange={e => setVal3(e.value)}
            ></InputMask>
          </div>

          <div className="p-col-12 p-md-4">
            <h3>Phone {val4}</h3>
            <InputMask
              mask="(999) 999-9999"
              value={val4}
              placeholder="(999) 999-9999"
              onChange={e => setVal4(e.value)}
            ></InputMask>
          </div>

          <div className="p-col-12 p-md-4">
            <h3>Phone Ext {val5}</h3>
            <InputMask
              mask="(999) 999-9999? x99999"
              value={val5}
              placeholder="(999) 999-9999? x99999"
              onChange={e => setVal5(e.value)}
            ></InputMask>
          </div>

          <div className="p-col-12 p-md-4">
            <h3>Serial Number {val6}</h3>
            <InputMask
              mask="a*-999-a999"
              value={val6}
              placeholder="a*-999-a999"
              onChange={e => setVal6(e.value)}
            ></InputMask>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputMaskExample;
