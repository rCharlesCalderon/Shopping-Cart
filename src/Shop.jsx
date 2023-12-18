import { useFetcher, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Manga from "./Manga.jsx";
import { useEffect, useState } from "react";

import "./shop.css";

function Shop() {
  const [mangas, setMangas] = useState(null);
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/top/manga`, {
      mode: "cors",
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        let modifiedObj = [...result.data].map((dataInfo) => {
          return {
            ...dataInfo,
            id: crypto.randomUUID(),
            price: 10.99,
          };
        });

        setMangas(modifiedObj);
        console.log(mangas);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <div className="shop-container">
        <div className="ad-container">
          <div className="ad">AD IMG GOES HERE</div>
          <div className="ad">AD IMG GOES HERE</div>
          <div className="ad">AD IMG GOES HERE</div>
        </div>
        <div className="main-container">
          <div className="recommend-container">
            <h1>Hottest</h1>
            <div className="manga-container">
              {mangas &&
                mangas.map((obj) => {
                  return (
                    <Link to={`${obj.mal_id}`} key={obj.id}>
                      <div className="manga-book" key={obj.id}>
                        <img src={obj.images.jpg.image_url}></img>
                        <div className="manga-info">
                          <span> {obj.title}</span>
                          <span>$ {obj.price}</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              {console.log(mangas)}
            </div>
          </div>
          <div className="hottest-container"></div>
        </div>
      </div>
    </>
  );
}
export default Shop;
