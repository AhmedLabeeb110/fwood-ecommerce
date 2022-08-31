import { NavLink, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Shop from "../pages/Shop";

import { BiSearchAlt2, BiHeart, BiCart } from "react-icons/bi";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <div className="nav">
        <h2 className="logo">Miralou</h2>
        <ul className="navlinks">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/shop">SHOP</NavLink>
          </li>
          <li>
            <NavLink to="products">PRODUCTS</NavLink>
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
        <Route path="/products" element={<Products />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
};

export default NavBar;
