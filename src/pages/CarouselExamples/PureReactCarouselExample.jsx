import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const PureReactCarouselExample = () => {
  return (
    <div
      className="d-flex flex-column w-50"
      style={{ height: "500px", width: "500px" }}
    >
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={10}
        totalSlides={3}
        isPlaying={true}
        hasMasterSpinner={false}
        style={{ border: "1px solid black" }}
      >
        <Slider>
          <Slide index={0}>I am the first Slide.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </div>
  );
};

export default PureReactCarouselExample;
