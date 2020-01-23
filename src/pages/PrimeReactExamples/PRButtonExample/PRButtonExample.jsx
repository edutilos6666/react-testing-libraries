import React from "react";
import { Button } from "primereact/button";

const PRButtonExample = props => {
  return (
    <div className="d-flex flex-column">
      <h3 className="first">Basic</h3>
      <div className="d-flex flex-row">
        <Button label="Click" />
        <Button label="Click" icon="pi pi-check" />
        <Button label="Click" icon="pi pi-check" iconPos="right" />
        <Button icon="pi pi-check" />
        <Button label="Click" disabled="disabled" />
      </div>

      <h3>Severities</h3>
      <div className="d-flex flex-row">
        <Button label="Primary" />
        <Button label="Secondary" className="p-button-secondary" />
        <Button label="Success" className="p-button-success" />
        <Button label="Info" className="p-button-info" />
        <Button label="Warning" className="p-button-warning" />
        <Button label="Danger" className="p-button-danger" />
      </div>

      <h3>Raised Buttons</h3>
      <div className="d-flex flex-row">
        <Button label="Primary" className="p-button-raised" />
        <Button
          label="Secondary"
          className="p-button-raised p-button-secondary"
        />
        <Button label="Success" className="p-button-raised p-button-success" />
        <Button label="Info" className="p-button-raised p-button-info" />
        <Button label="Warning" className="p-button-raised p-button-warning" />
        <Button label="Danger" className="p-button-raised p-button-danger" />
      </div>

      <h3>Rounded Buttons</h3>
      <div className="d-flex flex-row">
        <Button label="Primary" className="p-button-rounded" />
        <Button
          label="Secondary"
          className="p-button-rounded p-button-secondary"
        />
        <Button label="Success" className="p-button-rounded p-button-success" />
        <Button label="Info" className="p-button-rounded p-button-info" />
        <Button label="Warning" className="p-button-rounded p-button-warning" />
        <Button label="Danger" className="p-button-rounded p-button-danger" />
      </div>

      <h3>Button With events</h3>
      <div className="d-flex flex-row">
        <Button
          label="Info with click event"
          className="p-button-rounded b-button-info"
          onClick={evt => {
            console.log(evt.currentTarget);
            window.alert("Info with click event");
          }}
        />
      </div>
    </div>
  );
};

export default PRButtonExample;
