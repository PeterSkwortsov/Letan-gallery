import arrow1 from '../../images/arrow.svg';
import arrow2 from '../../images/arr.svg';
import tatiana1 from '../../images/ImgTatyana1.jpg';
import planet from '../../images/IconPalette.svg';
import scetch from '../../images/IconSketch.svg';
import pastel from '../../images/IconPalette2.svg';
import tat from '../../images/ImgTatyana2.png'
import image1 from "../../images/ImgPicture1.jpg";
import image2 from "../../images/ImgPicture2.jpg";
import { useState } from 'react';
import pag from '../Pagination/Pagination.module.css';
import { motion } from 'framer-motion';
const BiographyTatya = () => {



   const modalContent = (
     <div className="modal-block">
       <img src={image1} className="modal-img" style={{ width: "100%", padding: "1.3rem", maxWidth: "800px" }}></img>
       <button
         href="#"
         className={pag.button + " " + pag.typeFlowers}
       >
         <div className={pag.button__line}></div>
         <div className={pag.button__line}></div>
         <p className={pag.button__text}>Закрыть</p>
       </button>
     </div>
   );
   const modalContent2 = (
     <div className="modal-block">
       <img src={image2} className="modal-img" style={{ width: "100%", padding: "1.3rem", maxWidth: "800px" }}></img>
       <button
         href="#"
         className={pag.button + " " + pag.typeFlowers}
       >
         <div className={pag.button__line}></div>
         <div className={pag.button__line}></div>
         <p className={pag.button__text}>Закрыть</p>
       </button>
     </div>
   );


    return (
      <>
        {/* <div className="white-blok">
          <div className="white-blok-span">
            <img src={arrow1}></img>
            <span>
              Мощнейший заряд дает мне именно Нижний Новгород
              <br></br>
              Здесь удается получать вдохновение от рек, городских улиц, в
              старинных стенах мастерской, практически отовсюду
            </span>
            <img src={arrow2}></img>
          </div>
        </div> */}

        <div className="biography-main-tat">
          <div className="biography-img">
            <motion.h2
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
            >
              Татьяна Скворцова
            </motion.h2>
            <motion.img src={tatiana1} whileTap={{ scale: 0.95 }}></motion.img>
          </div>

          <ul className="biography-leonid-list">
            <li>
              <img src={planet}></img>
              Родилась в городе Новокуйбышевске, но живу в Нижнем Новгороде с
              трех лет и по сей день. 
            </li>
            <li>
              <img src={scetch}></img>
              Архитектор. Член союза архитекторов России.
            </li>
            <li>
              <img src={pastel}></img>
              Основной материал - пастель. Работы небольшие пейзажи, натюрморты, цветы.
            </li>
          </ul>
        </div>

        {/* <div className="biography-block-tan">
          <motion.img src={tat} whileTap={{ scale: 0.95 }}></motion.img>
        </div> */}
        {/* 
        <div>
          <div className="white-blok">
            <div className="white-blok-title">
              <h4>
                Отдыхаю, когда беру в руки<br></br> кисти или пастель
              </h4>
            </div>

            <div className="white-blok-span">
              <img src={arrow1}></img>
              <span>
                Когда-то я не предполагала, что именно в этом найду свою
                отдушину. Живописи, академическому рисунку, скульптуре будущих
                архитекторов учат в вузах, но мало кто там занимается с
                интересом. Я тоже воспринимала такое обучение скорее как
                необходимость, не имея подготовки в виде «художки»<br></br>
                <br></br>
                Еще был некий внутренний тормоз. Желание рисовать имелось, но
                что и как? Не знаю, что произошло, но в один прекрасный момент
                увидела сюжеты для картин рядом с собой. И с тех пор я могу
                писать почти всегда и везде. Даже так: с тех пор я не могу не
                писать. Конечно, одно из любимых занятий – посещение
                художественных галерей и выставок, больших и малых
              </span>
              <img src={arrow2}></img>
            </div>
          </div>
        </div>

        <div className="white-blok-title">
          <h4>Мои критики - муж и сын</h4>
        </div>

        <div className="grid-img">
          <div className="grid-img-block">
            <motion.img
              className="grid-img-img"
              src={image1}
              whileTap={{ scale: 0.95 }}
            ></motion.img>

            <h5>Картина «Февральские лучи»</h5>
          </div>

          <p>
            Лучшую эмоциональную оценку сын. А советы рациональные – что
            получилось, что не удалось, что оставить и что подправить, и
            наконец, стоит ли брать результат на выставку – это дело мужа
            <br></br> Мои работы невелики по размерам в сравнении с большинством
            полотен мужа. Я люблю пастель и акварель, а он пишет маслом. На моих
            картинах — знакомые каждому сюжеты, любимый город, родные поля и
            луга, на каждом его холсте – неземной, сказочный мир с чудными
            существами…
          </p>

          <p>
            Мы — два творческих человека в одной мастерской, и мы уживаемся,
            потому что в своем творчестве мы такие разные
          </p>
          <div className="grid-img-block">
            <motion.img
              className="grid-img-img"
              src={image2}
              whileTap={{ scale: 0.95 }}
            ></motion.img>

            <h5>Картина «Тихая Славянка. Павловск»</h5>
          </div>
        </div> */}
      </>
    );
}

export default BiographyTatya