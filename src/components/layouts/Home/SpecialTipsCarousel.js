import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import SpecialTipCard from "./SpecialTipCard";
import img1 from "../../../assets/img/Home/image.png";
import img2 from "../../../assets/img/Home/Rectangle11.png";
import img3 from "../../../assets/img/Home/Rectangle12.png";
import img4 from "../../../assets/img/Home/Rectangle13.png";
import arrowleft from "../../../assets/img/icons/arrow-left.svg";
import arrowright from "../../../assets/img/icons/arrow-right.png";
import Filterrow from "../../common/Filterrow";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="outlined-icon center  ml-[24px]" onClick={onClick}>
      <img src={arrowright} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="outlined-icon center" onClick={onClick}>
      {" "}<img src={arrowleft} />
    </div>
  );
}
const SpecialTipsCarousel = () => {
  const slider1 = useRef();

  useEffect(() => {}, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

  };
  const next = () => {
    slider1.current.slickNext();
  };
  const previous = () => {
    slider1.current.slickPrev();
  };
  return (
    <div>
      <div className="mb-[40px] flex justify-between  items-center">
        <Filterrow />{" "}
        <div className="flex">
          <SampleNextArrow onClick={next} />
          <SamplePrevArrow onClick={previous} />
        </div>
      </div>
      <Slider ref={slider => (slider1.current = slider)} {...settings}>
        <SpecialTipCard img={img1} />
        <SpecialTipCard img={img2} />
        <SpecialTipCard img={img3} />
        <SpecialTipCard img={img4} />
        <SpecialTipCard img={img1} />
        <SpecialTipCard img={img2} />
        <SpecialTipCard img={img3} />
        <SpecialTipCard img={img4} />
        <SpecialTipCard img={img1} />
      </Slider>
    </div>
  );
};

export default SpecialTipsCarousel;
