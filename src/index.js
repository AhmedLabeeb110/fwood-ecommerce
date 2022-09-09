import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// Router
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
