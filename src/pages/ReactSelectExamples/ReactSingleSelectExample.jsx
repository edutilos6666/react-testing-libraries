import React, { useState } from "react";
import Select from "react-select";
import { permOptions } from "./generateRandomOptions";

const ReactSingleSelectExample = () => {
  const options = [...permOptions];
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
  };

  return (
    <Select value={selectedOption} onChange={handleChange} options={options} />
  );
};

export default ReactSingleSelectExample;
