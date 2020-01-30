import React, { useState } from "react";
import Swiper from "react-id-swiper";

import "swiper/css/swiper.css";

const SimpleSwiperWithParams = () => {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    spaceBetween: 30
  };

  return (
    <Swiper {...params}>
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
      <div>Slide 4</div>
      <div>Slide 5</div>
    </Swiper>
  );
};

const SwiperWithImages = () => {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    spaceBetween: 30
  };
  const [images] = useState([1, 2, 3, 4]);

  return (
    <Swiper {...params}>
      {images.map((one, index) => (
        <div style={{ width: "50px", height: "50px" }}>
          <img
            key={index}
            src={`/assets/${one}.jpeg`}
            width="30px"
            height="30px"
          />
        </div>
      ))}
    </Swiper>
  );
};

const ReactIDSwiperExample = props => {
  return (
    <div className="d-flex flex-column">
      <SimpleSwiperWithParams />
      <SwiperWithImages />
    </div>
  );
};

export default ReactIDSwiperExample;
