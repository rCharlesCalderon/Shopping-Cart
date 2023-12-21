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
        <span onClick={handleShop}>Cart</span>
      </Link>
      {checkout && (
        <div className="cart">
          <button>X</button>
          <h3>Your Basket</h3>
          {cart.map((obj, index) => {
            return (
              <>
                <div className="cart-item-container" key={index}>
                  <div className="cart-item">
                    <img src={obj.images.jpg.image_url}></img>
                  </div>
                  <div className="cart-item-info">
                    <span>{obj.title}</span>
                    <span>quantity</span>
                    <span>{obj.price}</span>
                    <span>Sum</span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Navbar;
