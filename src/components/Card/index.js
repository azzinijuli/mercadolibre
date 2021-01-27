import React from "react";
import "../Card/style.scss";

function Card(props) {
  const product = props.product;
  return (
    <div className="product-container">
      <div
        className="image-container"
        style={{
          backgroundImage: `url(${product.thumbnail.replace(
            /-I.jpg$/,
            "-E.webp"
          )})`,
        }}
      ></div>
      <div className="product-description">
        <span className="product-price">$ {product.price}</span>
        <span className="product-name">{product.title}</span>
      </div>
    </div>
  );
}

export default Card;
