import React from "react";
import { Link } from "react-router-dom";
import data from "./data/data.json";
import "./App.scss";

function App() {
  return (
    <section className="home-wrapper">
      <div className="logo-countries-container">
        <div className="logo-container">
          <img
            className="logo"
            src="https://i.postimg.cc/sg5KvnsV/codo-codo-mercado-libre-cambia-0-40-768-477.png"
            alt="logo"
          />
        </div>
        <div className="countries-container">
          {data.map((country, key) => {
            return (
              <Link
                className="country-container"
                to={`/shop/${country.site}`}
                key={key}
              >
                <img className="country-flag" src={country.flag} />
                <p className="country-name">{country.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
