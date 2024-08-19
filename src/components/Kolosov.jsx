import { Link } from "react-router-dom";
import { useState } from "react";
import data from "../data/data";
import Modal from "./CustomModal/GalleryClick/Modal";

const Kolosov = ({props}) => {
  const [modalPrize, setModalPrize] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const [clickImg, setClickImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);


  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickImg(item.image);
  };

  return (
    <>
      <h2>Фантастические миры Леонида Колосова</h2>

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

      <div className="wrapper">
        {data.collections
          .filter((obj) =>
            obj.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => {
            return (
              <div className="wrapper-images" key={index}>
                <img
                  src={item.image}
                  alt={item.name}
                  onClick={() => handleClick(item, index)}
                />
                <h4>{item.name}</h4>
                <h5>{item.size}</h5>
                <p>{item.format}</p>
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
    </>
  );
};

export default Kolosov;

