import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data/data";
import Modal from "./CustomModal/GalleryClick/Modal";
import pag from "../components/Pagination/Pagination.module.css";
import { useNavigate } from "react-router-dom";
import Img from "./Img";
const Kolosov = ({ cart, addToCart }) => {
  const [searchValue, setSearchValue] = useState("");
  const [clickImg, setClickImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const navigate = useNavigate();

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickImg(item.image);
    navigate(`${item.path}`);
  };

  const [page, setPage] = useState(1);

  const itemsPerPage = 12;
  const pagesCount = Math.ceil(data.collections.length / itemsPerPage);

  const itemsShowed = data.collections.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  function handleAddToCart(el) {
    addToCart(el);
      localStorage.setItem("number", JSON.stringify(el));

  }

  return (
    <>
      <h2>Фантастические миры</h2>

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
          .map((item, index, key) => {
            return (
              <div className="wrapper-images" key={item.image}>
                <Img
                  src={item.image}
                  alt={item.name}
                  onClick={() => handleClick(item, index)}
                />
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



export default Kolosov;

