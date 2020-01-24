import React, { useImperativeHandle, useRef, forwardRef } from "react";

function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    writeValue: value => {
      inputRef.current.value = value;
    },
    isFocused: () => {
      return document.activeElement === inputRef.current;
    }
  }));
  return <input ref={inputRef} />;
}

FancyInput = forwardRef(FancyInput);
export default FancyInput;
