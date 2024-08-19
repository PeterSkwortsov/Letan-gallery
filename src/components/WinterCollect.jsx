import data from "../data/scvor";
import { useState } from "react";
import Modal from "./CustomModal/GalleryClick/Modal";

const WinterCollect = () => {
  const [clickImg, setClickImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickImg(item.image);
  };




  return (
    <>
      <h2>Зимние пейзажи</h2>

      <div className="wrapper">
        {data.collections.map((item, index) => {
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
          <Modal clickImg={clickImg} currentIndex={currentIndex} setClickImg={setClickImg} />
        )}
      </div>
    </>
  );
};

export default WinterCollect;
