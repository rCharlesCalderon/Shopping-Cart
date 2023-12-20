import { useEffect, useState } from "react";
import "./aboutManga.css";
import { Link, Outlet, useParams } from "react-router-dom";


const AboutManga = ({ setCart, cart }) => {
  const { id } = useParams();
  function handleManga() {
    setCart([...cart, manga]);
    console.log(cart);
  }
  const [manga, setManga] = useState(null);
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/manga/${id}/full`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        let modifiedObj = {
          ...result.data,
          price: 10.99,
        };
        setManga(modifiedObj);
        console.log(result);
      });
  }, []);

  return (
    <>
      <div className="about-container">
        {manga && <img src={manga.images.jpg.image_url}></img>}
        <button onClick={() => handleManga()}>adad</button>
      </div>
    </>
  );
};

export default AboutManga;
