import { Link } from "react-router-dom";
import "./main.css";
function Navbar() {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="">CART IMG GOES HERE</Link>
    </div>
  );
}

export default Navbar;
