
import tatiana1 from '../../images/ImgTatyana1.jpg';
import planet from '../../images/IconPalette.svg';
import scetch from '../../images/IconSketch.svg';
import pastel from '../../images/IconPalette2.svg';

import { motion } from 'framer-motion';
const BiographyTatya = () => {



 


    return (
      <>
     

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
              Основной материал - пастель. Работы небольшие. Это пейзажи, натюрморты, цветы.
            </li>
          </ul>
        </div>

      </>
    );
}

export default BiographyTatya