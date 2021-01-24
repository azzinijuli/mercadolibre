import React from "react";
import Card from "../Card";
import "../InnerCarousel/style.scss";
import Slider from "react-slick";

function InnerCarousel(props) {
  const filter = props.filter;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="inner-carousel">
      <Slider {...settings}>
        {filter.map((product, key) => {
          return (
            <div className="product-wrapper" key={key}>
              <Card product={product} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default InnerCarousel;
