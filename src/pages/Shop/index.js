import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import dataprod from "../../data/dataprod.json";
import { useParams } from "react-router-dom";
import "../Shop/style.scss";

function Shop() {
  const [based, setBased] = useState([]);
  const [sale, setSale] = useState([]);
  const [interes, setInteres] = useState([]);
  const { id } = useParams();
  const [searchItems, setSearchItems] = useState("");
  const [products, setProducts] = useState([]);

  function handleCallback(searchParam) {
    setSearchItems(searchParam);
  }

  async function fetchData() {
    const data = await fetch(
      `https://api.mercadolibre.com/sites/${id}/search?q=${searchItems}`
    );
    const dataJson = await data.json();
    setProducts(dataJson.results);
  }

  function filterProducts() {
    const filteredBased = dataprod.filter((product) => {
      return product.type == "based";
    });
    const filteredSale = dataprod.filter((product) => {
      return product.type == "sale";
    });
    const filteredInteres = dataprod.filter((product) => {
      return product.type == "interes";
    });
    setBased(filteredBased);
    setSale(filteredSale);
    setInteres(filteredInteres);
  }

  useEffect(() => {
    filterProducts();
    fetchData();
  }, [searchItems]);

  console.log(products);

  return (
    <main className="home">
      <Navbar handleCallback={handleCallback} searchItems={searchItems} />
      <Carousel title="Basado en tu última visita" filter={based} />
      <Carousel title="Ofertas" filter={sale} />
      <Carousel title="También te puede interesar" filter={interes} />
    </main>
  );
}

export default Shop;
