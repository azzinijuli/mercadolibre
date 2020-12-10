import React from "react";
import "../Carousel/style.scss";

function Carousel(props) {
  return (
    <>
      <div className="cards-container">
        {props.products
          .filter((item) => {
            return item.title.toLowerCase().includes(props.filterSearch);
          })
          .map((item, key) => {
            return (
              <div className="card" key={key}>
                <img className="card-picture" src={item.thumbnail} alt="pic" />
                <div className="card-info">
                  <p className="card-title">{item.title}</p>
                  <p className="card-price">$ {item.price}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Carousel;
