import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Shop from "./pages/Shop";
import ProductSearch from "./pages/ProductSearch";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/shop/:id" component={Shop} />
    <Route exact path="/shop/:id/:search" component={ProductSearch} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
