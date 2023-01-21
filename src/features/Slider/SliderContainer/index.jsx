import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SliderContainer = ({ children }) => {
  const settings = {
    dots: false,
    infinite: true,
    // autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default SliderContainer;
