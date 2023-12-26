import { useEffect, useState } from "react";
import "./aboutManga.css";
import { Link, Outlet, useParams } from "react-router-dom";
import cartImg from "./images/cart.png";

const AboutManga = ({ setCart, cart }) => {
  const [manga, setManga] = useState(null);
  const [mangaSum, setMangaSum] = useState(10.99);
  const [mangaQuantity, setMangaQuantity] = useState(1);
  const { id } = useParams();
  console.log(cart);
  function addShopCart() {
    let mangaObj = {
      ...manga,
      sum: mangaSum,
      quantity: mangaQuantity,
      price: 10.99,
    };
    let findManga = cart.findIndex((obj) => mangaObj.mal_id === obj.mal_id);
    if (findManga !== -1) {
      let updatedObj = [...cart];
      let prevObj = [...cart][findManga];
      let addSums = mangaSum + prevObj.sum;
      let totalSum = parseFloat(addSums.toFixed(2));
      updatedObj[findManga] = {
        ...mangaObj,
        sum: totalSum,
        quantity: mangaQuantity + prevObj.quantity,
      };
      setCart(updatedObj);
      console.log(cart);
    } else {
      setCart([...cart, mangaObj]);
    }
  }

  function subtractCart() {
    let subSum = mangaSum - 10.99;
    let quantity = mangaQuantity - 1;
    if (mangaQuantity > 0) {
      let sum = parseFloat(subSum.toFixed(2));
      setMangaSum(sum);
      setMangaQuantity(quantity);
    }
  }
  function handleAdd() {
    let quantity = mangaQuantity + 1;

    setMangaSum((previousSum) => {
      let sum = previousSum + 10.99;

      return parseFloat(sum.toFixed(2));
    });
    setMangaQuantity(quantity);
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
            <button onClick={subtractCart}>-</button>
            <span>{mangaQuantity}</span>
            <button onClick={handleAdd}>+</button>
          </div>
          <div className="cart-button-container">
            <button onClick={addShopCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutManga;
