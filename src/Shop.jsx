import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Manga from "./Manga.jsx";
function Shop() {
  //needs a prop maybe?
  //const { name } = useParams();
  //{name === "manga" && <Manga />}
  return (
    <>
      <p>IM THE SHOP PAGE</p>
      <Link to="/">
        <p>HOME</p>
      </Link>
    </>
  );
}
export default Shop;
