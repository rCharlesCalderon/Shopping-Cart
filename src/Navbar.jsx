import { Link } from "react-router-dom";
import "./main.css";
import "./navbar.css";
import blonde from "./images/blonde-avatar.png";
import exitImg from "./images/x.png";
import trashImg from "./images/trash.png";
import { useState } from "react";
import { func } from "prop-types";

function Navbar({ cart, setCart }) {
  const [checkout, setCheckout] = useState(false);
  function closeCheckout() {
    setCheckout(false);
  }

  (function cartStyling() {})();
  function handleShop() {
    setCheckout(!checkout);
  }
  function handleMangaDel(id) {
    let mangaCart = [...cart].filter((item) => item.mal_id !== id);
    setCart(mangaCart);
    console.log(cart);
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
        <div className="blur-background">
          <div className="cart-container">
            <button>
              <img
                src={exitImg}
                className="exitImg"
                onClick={closeCheckout}
              ></img>
            </button>
            <h3>Your Basket</h3>
            {cart.map((obj) => {
              return (
                <div className="items-container" key={obj.mal_id}>
                  {console.log(obj)}
                  <div className="item">
                    <div className="item-img">
                      <img src={obj.images.jpg.image_url}></img>
                    </div>
                    <div className="item-info">
                      <span>{obj.title}</span>
                      <span>Quantity: {obj.quantity}</span>
                      <span>Price: {obj.price}</span>
                      <span>Sum: {obj.sum}</span>
                      <div className="trash">
                        <img
                          src={trashImg}
                          onClick={() => {
                            handleMangaDel(obj.mal_id);
                          }}
                        ></img>
                      </div>
                    </div>
                  </div>

                  <hr></hr>
                </div>
              );
            })}
            <div className="checkout-container">
              {cart.length === 0 ? (
                <span className="empty-cart">Cart Is empty</span>
              ) : (
                <div className="full-cart">
                  <span>Total Price</span>
                  <span>
                    $
                    {cart
                      .reduce((accumulator, obj) => accumulator + obj.sum, 0)
                      .toFixed(2)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
