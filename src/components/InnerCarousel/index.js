import React from "react";
import "../InnerCarousel/style.scss";

function InnerCarousel(props) {
  return (
    <div className="products-wrapper">
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
    </div>
  );
}

export default InnerCarousel;
