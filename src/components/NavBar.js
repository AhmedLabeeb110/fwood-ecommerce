import { Link, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Shop from "../pages/Shop";

import { BiSearchAlt2, BiHeart, BiCart } from "react-icons/bi";

const NavBar = () => {
  return (
    <div className="nav">
      <h2 className="logo">Miralou</h2>
      <ul className="navlinks">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/shop">SHOP</Link>
        </li>
        <li>
          <Link to="products">PRODUCTS</Link>
        </li>
      </ul>
      <ul>
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
};

export default NavBar;
