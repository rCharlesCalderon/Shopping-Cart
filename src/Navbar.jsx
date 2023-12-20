import { Link } from "react-router-dom";
import "./main.css";
import "./navbar.css";
import blonde from "./images/blonde-avatar.png";
import { useState } from "react";

function Navbar({ cart }) {
  const [checkout, setCheckout] = useState(false);
  function handleShop() {
    setCheckout(!checkout);
  }
  return (
    <div className="header">
      <img src={blonde} className="blonde"></img>
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/shop">
        <span>Shop</span>
      </Link>
      <Link to="">
        {" "}
        <span onClick={handleShop}>Shopping Cart</span>
      </Link>
      {checkout && (
        <div className="cart">
          {cart.map((obj) => {
            return <img src={obj.images.jpg.image_url}></img>;
          })}
        </div>
      )}
    </div>
  );
}

export default Navbar;
