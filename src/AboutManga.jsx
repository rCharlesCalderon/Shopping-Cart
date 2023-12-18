import { useEffect, useState } from "react";
import "./aboutManga.css";
import { Link, Outlet, useParams } from "react-router-dom";

const AboutManga = () => {
  const { id } = useParams();

  const [manga, setManga] = useState(null);
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/manga/${id}/full`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setManga(result);
        console.log(result);
      });
  }, []);

  return (
    <>
      <div className="about-container">
        {manga && <img src={manga.data.images.jpg.image_url}></img>}
      </div>
    </>
  );
};

export default AboutManga;
