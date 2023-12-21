import { useEffect, useState } from "react";
import "./aboutManga.css";
import { Link, Outlet, useParams } from "react-router-dom";


const AboutManga = ({ setCart, cart }) => {
  const { id } = useParams();
  function handleManga() {
    setCart([...cart, manga]);
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
        {console.log(manga)}
        <div className="manga-genre-container">
          {manga && (
            <img src={manga.images.jpg.image_url} className="manga-book"></img>
          )}
          <h3>Genres</h3>
          <div className="manga-genre-info">
            {manga &&
              manga.genres.map((obj, index) => {
                return <span key={index}>{obj.name},</span>;
              })}
          </div>
        </div>
        <div className="manga-detail-container">
          <span>{manga && manga.title}</span>
          <p>{manga && manga.background}</p>
          <p className="price">${manga && manga.price}</p>
          <div className="quantity">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <div className="cart-button-container">
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutManga;
