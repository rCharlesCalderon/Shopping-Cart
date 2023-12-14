import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Shop() {
  return (
    <>
      <p>IM THE SHOP PAGE</p>
      <Link to="/">
        <p>HOME</p>
      </Link>
      <Outlet />
    </>
  );
}
export default Shop;
