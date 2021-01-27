import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import "../ProductSearch/style.scss";

function ProductSearch() {
  const params = useParams();
  const id = params.id;
  const search = params.search;
  let history = useHistory();
  const [products, setProducts] = useState([]);

  async function fetchData() {
    const data = await fetch(
      `https://api.mercadolibre.com/sites/${id}/search?q=${search}`
    );
    const dataJson = await data.json();
    setProducts(dataJson.results);
  }

  useEffect(() => {
    fetchData();
  }, [search]);
  console.log(products);
  return (
    <>
      <Navbar />
      <div>
        Soy la búsqueda del producto: {params.search}
        <div className="products-grid">
          {products.map((product, key) => {
            return (
              <div className="product-wrapper" key={key}>
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductSearch;
