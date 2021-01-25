import React from "react";
import "../Card/style.scss";

function Card(props) {
  const product = props.product;
  return (
    <div className="product-container">
      <div className="image-container">
        <img
          src={product.thumbnail}
          alt="product thumbnail"
          className="product-image"
        />
      </div>
      <div className="product-description">
        <span className="product-price">$ {product.price}</span>
        <span className="product-name">{product.name}</span>
      </div>
    </div>
  );
}

export default Card;
