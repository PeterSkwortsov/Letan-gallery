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

  const handleRotationRight = () => {
    const totalLength = data.collections.image.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      setClickImg(data.collections[0].image);
      return;
    }
    setCurrentIndex(currentIndex + 1);
    setClickImg(data.collections[currentIndex + 1].image);
}


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
              <h2>{item.name}</h2>
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
