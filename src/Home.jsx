import { Link } from "react-router-dom";
import "./home.css";
import Navbar from "./Navbar";
function Home({ cart, setCart }) {
  return (
    <div className="home">
      <Navbar cart={cart} setCart={setCart} />
      <div className="explore-container">
        <h2 className="home-opening">Your Shop for Manga</h2>
        <span className="home-text">
          Discover Manga ranging from old classics to the newest, trending ones!
        </span>
        <Link to="shop">
          <button className="explore-btn"> Explore Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
