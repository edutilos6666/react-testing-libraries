import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";

const DropdownExample = props => {
  const [city, setCity] = useState(null);
  const [car, setCar] = useState(null);
  const [car2, setCar2] = useState("BMW");

  function carTemplate(option) {
    if (!option.value) {
      return option.label;
    } else {
      var logoPath = "/resources/images/" + option.label + ".jpg";

      //   var logoPath = BMW;

      return (
        <div className="p-clearfix">
          <img
            alt={option.label}
            src={logoPath}
            style={{ display: "inline-block", margin: "5px 0 0 5px" }}
            width="24"
          />
          <span style={{ float: "right", margin: ".5em .25em 0 0" }}>
            {option.label}
          </span>
        </div>
      );
    }
  }

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" }
  ];

  const cars = [
    { label: "Audi", value: "Audi" },
    { label: "BMW", value: "BMW" },
    { label: "Fiat", value: "Fiat" },
    { label: "Honda", value: "Honda" },
    { label: "Jaguar", value: "Jaguar" },
    { label: "Mercedes", value: "Mercedes" },
    { label: "Renault", value: "Renault" },
    { label: "VW", value: "VW" },
    { label: "Volvo", value: "Volvo" }
  ];

  return (
    <div>
      <div className="content-section introduction">
        <div className="feature-intro">
          <h1>Dropdown</h1>
          <p>
            Dropdown is used to select an item from a collection of options.
          </p>
        </div>
      </div>

      <div className="content-section implementation">
        <h3>Basic</h3>
        <Dropdown
          value={city}
          options={cities}
          onChange={e => setCity(e.value)}
          placeholder="Select a City"
          optionLabel="name"
        />
        <div style={{ marginTop: ".5em" }}>
          {city ? "Selected City: " + city.name : "No city selected"}
        </div>

        <h3>Editable</h3>
        <Dropdown
          value={car}
          options={cars}
          onChange={e => setCar(e.value)}
          editable={true}
          placeholder="Select a Brand"
        />
        <div style={{ marginTop: ".5em" }}>
          {car ? "Selected Car: " + car : "No car selected"}
        </div>

        <h3>Advanced</h3>
        <Dropdown
          value={car2}
          options={cars}
          onChange={e => setCar2(e.value)}
          itemTemplate={carTemplate}
          filter={true}
          filterPlaceholder="Select Car"
          filterBy="label,value"
          showClear={true}
        />
        <div style={{ marginTop: ".5em" }}>
          {car2 ? "Selected Car: " + car2 : "No car selected"}
        </div>
      </div>
    </div>
  );
};

export default DropdownExample;
