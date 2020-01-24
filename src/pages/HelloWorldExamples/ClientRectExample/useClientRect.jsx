import React, { useState, useCallback, useEffect } from "react";

function useClientRect() {
  useEffect(() => {
    console.log("hello world");
    return () => {
      console.log("bye world");
    };
  });
  const [rect, setRect] = useState(null);
  const ref = useCallback(node => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);
  return [rect, ref];
}

export default useClientRect;
