import React from "react";
import "../InnerCarousel/style.scss";

function InnerCarousel(props) {
  return (
    <div className="products-wrapper">
      {props.filter.map((product) => {
        return (
          <div className="product-wrapper">
            <img src={product.img} alt="image" className="product-image" />
            <span className="product-price">${product.price}</span>
          </div>
        );
      })}
    </div>
  );
}

export default InnerCarousel;
