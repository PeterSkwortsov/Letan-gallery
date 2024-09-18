import town from "../data/town";
import { useState, useEffect } from "react";
import Modal from "./CustomModal/GalleryClick/Modal";
import { Link } from "react-router-dom";
import pag from "../components/Pagination/Pagination.module.css";
import GridLoader from "react-spinners/GridLoader";
const TownHistory = ({ cart, addToCart }) => {
  const [clickImg, setClickImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
const [isLoading, setIsLoading] = useState(false);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickImg(item.image);
  };

  const [searchValue, setSearchValue] = useState("");

  const [page, setPage] = useState(1);

  const itemsPerPage = 12;
  const pagesCount = Math.ceil(town.collections.length / itemsPerPage);

  const itemsShowed = town.collections.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );


   useEffect(() => {
     setIsLoading(true);
     setTimeout(() => {
       setIsLoading(false);
     }, 2000);
   }, []);



  function handleAddToCart(el) {
    addToCart(el);
  }

  return (
    <>
      <h2>Городские сюжеты</h2>

      <div className="search">
        <Link to="/" className="btn-main">
          Назад
        </Link>

        <input
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          className="search-input"
          placeholder="Поиск по названию"
        />
      </div>

      <ul className={pag.all}>
        <li className={pag.page}>
          {[...Array(pagesCount)].map((_, i) => {
            return (
              <li
                onClick={() => setPage(i + 1)}
                className={
                  pag.page === i + 1 ? { ...pag.page, active: true } : ""
                }
              >
                {i + 1}
              </li>
            );
          })}
        </li>
      </ul>

      <div className="wrapper">
        {itemsShowed
          .filter((obj) =>
            obj.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => {
            return (
              <div className="wrapper-images" key={index}>
                {isLoading ? (
                  <GridLoader
                    color="#79d9cc"
                    style={{
                      margin: "0 auto",
                      display: "flex",
                      padding: "30px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    size={50}
                  ></GridLoader>
                ) : (
                  isLoading !== item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      onClick={() => handleClick(item, index)}
                    />
                  )
                )}
                <h4>{item.name}</h4>
                <h5>{item.size}</h5>
                <p>{item.format}</p>
                <p>{item.author}</p>

                <button
                  href="#"
                  onClick={() => handleAddToCart(item)}
                  className={pag.button + " " + pag.typeA}
                >
                  <div className={pag.button__line}></div>
                  <div className={pag.button__line}></div>
                  <p className={pag.button__text}>Нравится</p>
                  <div className={pag.button__drow1}></div>
                  <div className={pag.button__drow2}></div>
                </button>
              </div>
            );
          })}
        {clickImg && (
          <Modal
            clickImg={clickImg}
            currentIndex={currentIndex}
            setClickImg={setClickImg}
          />
        )}
      </div>

      <ul className={pag.all}>
        <li className={pag.page}>
          {[...Array(pagesCount)].map((_, i) => {
            return (
              <li
                onClick={() => setPage(i + 1)}
                className={
                  pag.page === i + 1 ? { ...pag.page, active: true } : ""
                }
              >
                {i + 1}
              </li>
            );
          })}
        </li>
      </ul>
    </>
  );
};

export default TownHistory;
