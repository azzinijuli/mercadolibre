import React from "react";
import "../InnerCarousel/style.scss";
import Slider from "react-slick";

function InnerCarousel(props) {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    variableHeight: true,
  };
  return (
    <div className="products-wrapper">
      <Slider {...settings}>
        {props.filter.map((product) => {
          return (
            <div className="product-wrapper active">
              <div className="image-container">
                <img src={product.img} alt="image" className="product-image" />
              </div>
              <div className="product-description">
                <span className="product-price">$ {product.price}</span>
                <span className="product-name">{product.name}</span>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default InnerCarousel;
