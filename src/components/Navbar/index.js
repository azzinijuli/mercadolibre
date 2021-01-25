import React, { useState } from "react";
import "../Navbar/style.scss";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

function Navbar(props) {
  const [search, setSearch] = useState("");
  const { id } = useParams();
  let history = useHistory();

  function handleClick() {
    props.handleCallback(search);
    history.push(`/shop/${id}/${search}`);
  }

  function handleChange(e) {
    const inputValue = e.target.value;
    setSearch(inputValue);
  }

  return (
    <nav className="navbar">
      <div className="input-wrapper">
        <div>
          <img
            className="nav-logo"
            src="https://i.postimg.cc/q7Rk4Btn/283142-1.jpg"
            alt="nav-logo"
          />
        </div>
        <input
          onChange={handleChange}
          type="search"
          className="input"
          placeholder="Buscar productos, marcas y más..."
        />
        <button onClick={handleClick}>Buscar</button>
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
