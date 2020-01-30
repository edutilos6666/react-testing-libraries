import React, { useState } from "react";
import Carousel from "flat-carousel";

const FlatCarouselExample = props => {
  const [numbers, setNumbers] = useState([
    "first",
    "second",
    "third",
    "fourth"
  ]);
  return (
    <Carousel>
      {numbers.map((one, index) => (
        <div
          key={index}
          className="demo-item"
          style={{ border: "1px solid black", width: "100px", height: "100px" }}
        >
          {one}
        </div>
      ))}
    </Carousel>
  );
};

export default FlatCarouselExample;
