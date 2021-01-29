import React from "react";
import "../Carousel/style.scss";
import InnerCarousel from "../InnerCarousel";

function Carousel(props) {
  return (
    <>
      <section className="carousel-container">
        <h3 className="carousel-title">{props.title}</h3>
        <InnerCarousel filter={props.filter} />
      </section>
    </>
  );
}

export default Carousel;

/*{props.products
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
  })}*/
