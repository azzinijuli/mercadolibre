import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import dataprod from "../../data/dataprod.json";
import "../Shop/style.scss";

function Shop() {
  const [based, setBased] = useState([]);
  const [sale, setSale] = useState([]);
  const [interest, setInterest] = useState([]);
  const [searchItems, setSearchItems] = useState("");

  function handleCallback(searchParam) {
    setSearchItems(searchParam);
  }

  function filterProducts() {
    const based = filter("based");
    const sale = filter("sale");
    const interest = filter("interest");

    setBased(based);
    setSale(sale);
    setInterest(interest);
  }

  function filter(type) {
    return dataprod.filter((product) => {
      return product.type == type;
    });
  }

  useEffect(() => {
    filterProducts();
  }, []);

  return (
    <main className="home">
      <Navbar handleCallback={handleCallback} searchItems={searchItems} />
      <Carousel title="Basado en tu última visita" filter={based} />
      <Carousel title="Ofertas" filter={sale} />
      <Carousel title="También te puede interesar" filter={interest} />
    </main>
  );
}

export default Shop;
