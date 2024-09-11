import { useState } from "react";
import pag from './Pagination.module.css'
import flowers from "../../data/flowers";
import Modal from "../CustomModal/GalleryClick/Modal";

 



const Pagination = () => {

 const [searchValue, setSearchValue] = useState("");
 const [clickImg, setClickImg] = useState(null);
 const [currentIndex, setCurrentIndex] = useState(null);

 const handleClick = (item, index) => {
   setCurrentIndex(index);
   setClickImg(item.image);
 };


    const [page, setPage] = useState(1);
 

    return (
      <>
        <div className="wrapper">
          {flowers.collections
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

                  <a href="#" className={pag.button + " " + pag.typeA}>
                    <div className={pag.button__line}></div>
                    <div className={pag.button__line}></div>
                    <p className={pag.button__text}>Нравится</p>
                    <div className={pag.button__drow1}></div>
                    <div className={pag.button__drow2}></div>
                  </a>
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
            {[...Array(6)].map((_, i) => {
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

}


export default Pagination


