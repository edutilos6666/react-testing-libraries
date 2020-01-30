import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ReactSlickExample = props => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const [images] = useState([1, 2, 3, 4]);
  return (
    <Slider {...settings}>
      {images.map((one, index) => (
        <img
          key={index}
          src={`/assets/${one}.jpeg`}
          width="30px"
          height="30px"
        />
      ))}
    </Slider>
  );
};

export default ReactSlickExample;
