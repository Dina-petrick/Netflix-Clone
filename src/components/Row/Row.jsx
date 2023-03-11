import React, { useEffect, useRef, useState } from "react";
import axios from "../../utils/axios";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// custom css
import "./Row.css";
const Row = ({ title, fetchURL, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const [showControls, setShowControls] = useState(false);
  const listRef = useRef();
  const [sliderPostion, setSliderPosition] = useState(0);
  const handleDirection = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 70;
    if (direction === "left" && sliderPostion > 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      setSliderPosition(sliderPostion - 1);
    }
    if (direction === "right" && sliderPostion < 4) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSliderPosition(sliderPostion + 1);
    }
  };
  const base_URL = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchURL]);
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div
        className="row__data"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <div className={`slider_action left ${!showControls ? "none" : ""}`}>
          <AiOutlineLeft
            className="leftArrow"
            onClick={() => handleDirection("left")}
          />
        </div>
        <div className="row__posters" ref={listRef}>
          {movies.map(
            (movie) =>
              ((isLarge && movie.poster_path) ||
                (!isLarge && movie.backdrop_path)) && (
                <img
                  key={movie.id}
                  className={`row__poster ${isLarge && "row__posterLarge"}`}
                  src={`${base_URL}${
                    isLarge ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt=""
                />
              )
          )}
        </div>
        <div className={`slider_action right ${!showControls ? "none" : ""}`}>
          <AiOutlineRight
            className="rightArrow"
            onClick={() => handleDirection("right")}
          />
        </div>
      </div>
    </div>
  );
};
export default Row;
