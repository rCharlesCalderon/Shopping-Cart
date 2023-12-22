import { useEffect, useState } from "react";
import "./aboutManga.css";
import { Link, Outlet, useParams } from "react-router-dom";

const AboutManga = ({ setCart, cart }) => {
  const [manga, setManga] = useState(null);
  const [mangaSum, setMangaSum] = useState(10.99);
  const [mangaQuantity, setMangaQuantity] = useState(1);
  const { id } = useParams();
  function handleQuantity() {
    let sum = mangaSum + 10.99;
    let quantity = mangaQuantity + 1;
    let mangaObj = {
      ...manga,
      sum: sum,
      quantity: quantity,
      price: 10.99,
    };
    setMangaSum(sum);
    setMangaQuantity(quantity);
    setCart([mangaObj]);
  }

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/manga/${id}/full`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setManga(result.data);
      });
  }, []);

  return (
    <>
      <div className="about-container">
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
          <p className="price">${mangaSum}</p>
          <div className="quantity">
            <button onClick={console.log(cart)}>-</button>
            <span>{mangaQuantity}</span>
            <button onClick={handleQuantity}>+</button>
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
