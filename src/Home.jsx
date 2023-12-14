import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <p>IM THE HOMEPAGE </p>
      <Link to="shop">SHOP</Link>
    </>
  );
}

export default Home;
