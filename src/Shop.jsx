import { useFetcher, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import fire from "./images/fire.png";
import leftArrow from "./images/left-arrow.png";
import rightArrow from "./images/right-arrow.png";
import { useEffect, useState } from "react";

import "./shop.css";

function Shop() {
  const [mangas, setMangas] = useState(null);
  const [recManga, SetrecManga] = useState(null);
  const [page, setPage] = useState(1);
  useEffect(() => {
    handlePopularManga(page);
    handleRecommendManga();
  }, []);

  function handleRecommendManga() {
    fetch("https://api.jikan.moe/v4/recommendations/manga", {
      mode: "cors",
    })
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        let resultLimit = results.data.slice(0, 4);

        SetrecManga(resultLimit);
      });
  }
  function handleNextClick() {
    setPage((previousPage) => {
      const nextPage = previousPage + 1;
      handlePopularManga(nextPage);
      return nextPage;
    });
  }
  function handlePreviousClick() {
    if (page > 1) {
      setPage((previousPage) => {
        const nextPage = previousPage - 1;
        handlePopularManga(nextPage);
        return nextPage;
      });
    }
  }
  function handlePopularManga(page) {
    fetch(`https://api.jikan.moe/v4/top/manga?page=${page}`, {
      mode: "cors",
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setMangas(result.data);
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      <div className="shop-container">
        <div className="main-container">
          <div className="recommend-container">
            <h1>Most Popular</h1>
            <div className="manga-container">
              {mangas &&
                mangas.map((obj, index) => {
                  return (
                    <Link to={`${obj.mal_id}`} key={index}>
                      <div className="manga-book">
                        <img src={obj.images.jpg.image_url}></img>
                        <div className="manga-info">
                          <span> {obj.title}</span>
                          <span>$10.99</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
            <div className="footer">
              <button onClick={handlePreviousClick}>
                <img src={leftArrow}></img>Previous
              </button>

              <button onClick={handleNextClick}>
                Next<img src={rightArrow}></img>
              </button>
            </div>
          </div>
          <div className="hottest-container">
            <h1>
              <img src={fire}></img>Recommended
            </h1>
            {recManga &&
              recManga.map((obj, index) => {
                return (
                  <Link to={`${obj.entry[0].mal_id}`} key={index}>
                    <div className="manga-book">
                      <img src={obj.entry[0].images.jpg.image_url}></img>
                      <div className="manga-info">
                        <span> {obj.entry[0].title}</span>
                        <span>$10.99</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Shop;
