import winter from "../data/winter";
import { useState, useEffect } from "react";
import Modal from "./CustomModal/GalleryClick/Modal";
import { Link } from "react-router-dom";
import pag from '../components/Pagination/Pagination.module.css'
import Img from "./Img";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

const WinterCollect = ({ cart, addToCart }) => {
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

  const isInCart = (item) => cart.some((el) => el.name === item.name);

  const itemsPerPage = 12;
  const pagesCount = Math.ceil(winter.collections.length / itemsPerPage);

  const itemsShowed = winter.collections.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  function handleAddToCart(el) {
    addToCart(el);
    localStorage.setItem("number", JSON.stringify(el));
  } 
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

useEffect(() => {
  document.title = "Зимние пейзажи";
}, []);

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />

      <h2>Зимние пейзажи</h2>

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

      <div className={pag.all}>
        <ul className={pag.page}>
          {[...Array(pagesCount)].map((_, i) => {
            return (
              <li
                key={i}
                onClick={() => setPage(i + 1)}
                className={
                  pag.page === i + 1 ? { ...pag.page, active: true } : ""
                }
              >
                {i + 1}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="wrapper">
        {itemsShowed
          .filter((obj) =>
            obj.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => {
            return (
              <div className="wrapper-images" key={item.image}>
                <Img
                  src={item.image}
                  alt={item.name}
                  onClick={() => handleClick(item, index)}
                />
                <h5>{item.author}</h5>
                <h4>{item.name}</h4>
                <p>{item.format}</p>
                <p>{item.size}</p>

                <button
                  href="#"
                  onClick={() => handleAddToCart(item)}
                  className={pag.button + " " + pag.typeWinner}
                >
                  <div className={pag.button__line}></div>
                  <div className={pag.button__line}></div>
                  <p className={pag.button__text}>
                    {" "}
                    {isInCart(item) ? "Сохранено" : "Добавить"}
                  </p>
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

      <div className={pag.all}>
        <ul className={pag.page}>
          {[...Array(pagesCount)].map((_, i) => {
            return (
              <li
                key={i}
                onClick={() => setPage(i + 1)}
                className={
                  pag.page === i + 1 ? { ...pag.page, active: true } : ""
                }
              >
                {i + 1}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};


export default WinterCollect;
