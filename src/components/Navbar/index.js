import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "../Navbar/style.scss";

function Navbar(props) {
  const [search, setSearch] = useState("");
  const { id } = useParams();
  const history = useHistory();
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;
  const clockIcon = <FontAwesomeIcon icon={faClock} />;
  const [getter, handleSearch] = useLocalStorage();

  function handleClick() {
    history.push(`/shop/${id}/${search}`);
    handleSearch(search);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      history.push(`/shop/${id}/${search}`);
      handleSearch(search);
    }
  }

  function handleChange(e) {
    const inputValue = e.target.value;
    setSearch(inputValue);
  }

  return (
    <nav className="navbar">
      <div className="logo-wrapper">
        <img
          className="nav-logo"
          src="https://i.postimg.cc/q7Rk4Btn/283142-1.jpg"
          alt="nav-logo"
        />
      </div>
      <div className="form-wrapper">
        <input
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          type="text"
          className="input"
          placeholder="Buscar productos, marcas y más..."
        />
        <button onClick={handleClick} className="search-button">
          {searchIcon}
        </button>
        <div className="recent-searches">
          {getter.map((item, key) => {
            return (
              <li className="recent-search" key={key}>
                <span className="clock-icon">{clockIcon}</span>
                {item}
              </li>
            );
          })}
        </div>
      </div>
      <div className="shipping-wrapper">
        <span className="free-shipping">Envíos gratis por Mercado Puntos</span>
      </div>
    </nav>
  );
}

export default Navbar;

/*<div className="buttons-wrapper">
        <span className="shipping">Enviar a Buenos Aires</span>
        <ul className="buttons">
          <li className="button options">Categorías</li>
          <li className="button options">Ofertas</li>
          <li className="button options">Historial</li>
          <li className="button options">Supermercado</li>
          <li className="button options">Tiendas oficiales</li>
          <li className="button options">Vender</li>
          <li className="button options">Ayuda</li>
        </ul>
        <ul className="buttons">
          <li className="button account">Creá tu cuenta</li>
          <li className="button account">Ingresá</li>
          <li className="button account">Mis compras</li>
        </ul>
      </div>*/
