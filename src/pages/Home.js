import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="heroSection">
        <div className="title">Authentic Malay Healthcare</div>
        <div className="heading">
          The best solution for moisturizing the skin
        </div>
        <p className="hero-para">
          Only included the most potential active waveo chocos
        </p>
        <div id="hero-btn">
        <NavLink to="/products"><button>Buy Now</button></NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
