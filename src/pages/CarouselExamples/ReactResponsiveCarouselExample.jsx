import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ReactResponsiveCarouselExample = props => {
  return (
    <Carousel showArrows={true}>
      <div>
        <img src="/assets/1.jpeg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="/assets/2.jpeg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="/assets/3.jpeg" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="/assets/4.jpeg" />
        <p className="legend">Legend 4</p>
      </div>
    </Carousel>
  );
};

export default ReactResponsiveCarouselExample;
