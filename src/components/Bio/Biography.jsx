import leonid from '../../images/ImgLeonid1.jpg'
import iconPlanet from '../../images/IconPlanet.svg';
import iconPallete from '../../images/IconPalette.svg';
import iconPlane from '../../images/IconPlane.svg';
import ImgLeonid2 from '../../images/ImgLeonid2.png'
import ImgGMushroom from '../../images/ImgGMushroom.jpg'
import ImgLeonid3 from '../../images/ImgLeonid3.png';
import Icon2 from '../../images/Group.svg';
import Icon3 from '../../images/IconPicture.svg';
import icon4 from '../../images/IconJuice.svg'
import icon5 from '../../images/IconBook.svg'
import BiographyTatya from './BiographyTatya';
import { delay, motion } from 'framer-motion';
import { useRef } from "react";

import './Biography.css'
const Biography = () => {

     


     return (
       <>
         <section className="biography" initial="hidden" whileInView="visible">
           <div className="biography-main">
             <div className="biography-img">
               <motion.h2
                 whileHover={{ scale: 1.2 }}
                 whileTap={{ scale: 1.1 }}
                 drag="x"
                 dragConstraints={{ left: -100, right: 100 }}
               >
                 Леонид Колосов
               </motion.h2>
               <motion.img src={leonid} whileTap={{ scale: 0.95 }}></motion.img>
             </div>

             <ul className="biography-leonid-list">
               <li>
                 <motion.img src={iconPlanet}></motion.img>
                 Родился в 1957 г. в селе Сорокино под Тюменской обл.<br></br>В 50-х
                 годах переехал в город Керчь в Крыму, где и провел свою
                 молодость
               </li>
               <li>
                 <img src={iconPallete}></img>
                 Рисовать начал с самого раннего возраста, сначала игрушечных
                 солдатиков, в школе — иллюстрации к сказкам Пушкина, а затем
                 начал прорабатывать свои собственные сюжеты
               </li>
             </ul>
           </div>

          

           <div className="mushroom-season">
             <div className="biography-block">
               <motion.img
                 src={ImgLeonid2}
                 whileTap={{ scale: 0.95 }}
               ></motion.img>
             </div>
             <div className="mushroom-title">
               <ul>
                 <li>
                   С командой единомышленников основали клуб нижегородских
                   художников-ирреалистов — «Странники»
                 </li>
               </ul>
               <ul>
                 <li>
                   Совместно с коллегами, на базе мастерских художников
                   Блиновского пассажа в Н. Новгороде организовал общедоступную
                   галерею «Блиновка»
                 </li>
               </ul>
               <ul>
                 <li>Член Международного союза художников</li>
               </ul>
               <ul>
                 <li>Член Союза театральных деятелей России</li>
               </ul>
               <ul>
                 <li>Член Союза художников России</li>
               </ul>
               <ul>
                 <li>
                   Заслуженный деятель культуры и искусства Нижнего Новгород
                 </li>
               </ul>
               <ul>
                 <li>
                   Одна из работ находится в собрании Нижегородского
                   художественного музея
                 </li>
               </ul>
             </div>
           </div>

           <div className="art-room">
             <motion.img
               src={ImgLeonid3}
               whileTap={{ scale: 0.95 }}
             ></motion.img>
             <div className="room-items">
               <ul className="biography-leonid">
                 <li>
                   <img src={Icon3}></img>
                   Тематика работ: древнеславянская мифология, сказки,
                   фантастика (фэнтэзи), мистика
                 </li>
                 <li>
                   <img src={Icon2}></img>
                   Работаю в технике резцовой гравюры, офорт, пастель, масло
                 </li>
                 
               </ul>
             </div>
           </div>
         </section>

         <BiographyTatya />
       </>
     );
}

export default Biography