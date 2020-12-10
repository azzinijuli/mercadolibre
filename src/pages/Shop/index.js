import React, { useState, useEffect } from "react";
import "../Shop/style.scss";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import { useParams } from "react-router-dom";

function Shop() {
  const { id } = useParams();
  const [search, setSearch] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      `https://api.mercadolibre.com/sites/${id}/search?q=chocolates`
    );
    const dataJson = await data.json();
    setProducts(dataJson.results);
  }

  function handleCallback(inputValue) {
    setSearch(inputValue);
  }

  return (
    <section>
      <Navbar handleCallback={(e) => handleCallback(e)} />
      <Carousel filterSearch={search} products={products} />
    </section>
  );
}

export default Shop;
