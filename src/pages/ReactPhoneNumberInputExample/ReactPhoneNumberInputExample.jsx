import React, { useState } from "react";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl
} from "react-phone-number-input";

const ReactPhoneNumberInputExample = () => {
  const [value, setValue] = useState();
  return (
    <div className="d-flex flex-column">
      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
      />

      <span>National: {value && formatPhoneNumber(value)}</span>
      <span>International: {value && formatPhoneNumberIntl(value)}</span>
    </div>
  );
};

export default ReactPhoneNumberInputExample;
