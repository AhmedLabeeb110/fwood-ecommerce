import { NavLink, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Products";
import Shop from "../pages/Contact";
// Individual posts
import Product from "./Product";


import { BiSearchAlt2, BiHeart, BiCart } from "react-icons/bi";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <div className="nav">
        <NavLink to="/">
          <h2 className="logo">Miralou</h2>
        </NavLink>
        <ul className="navlinks">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/products">PRODUCTS</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </ul>
        <ul className="navicons">
          <li>
            <BiSearchAlt2 />
          </li>
          <li>
            <BiHeart />
          </li>
          <li>
            <BiCart />
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/allproducts/:id" element={<Product />} />
      </Routes>
    </div>
  );
};

export default NavBar;
