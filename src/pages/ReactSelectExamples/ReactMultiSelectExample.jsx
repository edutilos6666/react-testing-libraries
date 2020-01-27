import React, { useState } from "react";
import Select from "react-select";
import { permOptions } from "./generateRandomOptions";

const ReactMultiSelectExample = () => {
  const options = [...permOptions];
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
  };

  const optionValues2 = [
    { fname: "foo", lname: "bar" },
    { fname: "pako", lname: "deko" },
    { fname: "ceko", lname: "messi" }
  ];

  const options2 = optionValues2.map(one => {
    return {
      value: `${one.fname}-${one.lname}`,
      label: `${one.fname}-${one.lname}`
    };
  });
  const [selectedOptions2, setSelectedOptions2] = useState([]);
  const handleChange2 = selectedOption => {
    console.log(selectedOption);
    if (selectedOption === null) {
      setSelectedOptions2(selectedOption);
      return;
    }
    setSelectedOptions2(
      selectedOption.map(one => {
        const label = one.label.split("-")[0];
        return { label: label, value: one.value };
      })
    );
  };

  return (
    <div className="d-flex flex-column">
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        isMulti={true}
      />

      <Select
        value={selectedOptions2}
        onChange={handleChange2}
        options={options2}
        isMulti={true}
      />
    </div>
  );
};

export default ReactMultiSelectExample;
