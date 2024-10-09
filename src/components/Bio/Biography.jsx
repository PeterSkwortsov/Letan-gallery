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
                 Родился в 1957 г. в селе Сорокино под Тюменской обл. В 50-х
                 годах переехал в город Керчь в Крыму, где и провел свою
                 молодость
               </li>
               <li>
                 <img src={iconPallete}></img>
                 Рисовать начал с самого раннего возраста, сначала игрушечных
                 солдатиков, в школе — иллюстрации к сказкам Пушкина, а затем
                 начал прорабатывать свои собственные сюжеты
               </li>
               <li>
                 <img src={iconPlane}></img>С 1986 года участвовать в городских,
                 областных, всероссийских и зарубежных выставках (Бельгия,
                 Германия, Чехословакия, Англия, Канада, Испания)
               </li>
             </ul>
           </div>

           <div className="biography-block">
             <p>
               С 1981 отслужил на Черноморском флоте три года. Вернувшись,
               поступил в Одесское театрально-художественное училище. Пытаясь
               наверстать пропущенные годы, учился с большим рвением, окончил
               училище досрочно, проучившись три года вместо четырех<br></br>
               <br></br>В 1984 году случайно оказался в Нижнем Новгороде, тогда
               Горьком. С первого взгляда полюбил этот город, попросил
               распределения в один из театров и переехал насовсем<br></br>
               <br></br>
               Работал с 1984 года художником - декоратором Нижегородского
               государственного академического театра оперы и балета им.
               А.С.Пушкина, затем, с 1985 года — в Нижегородском Театре Юного
               Зрителя, с 1999 по 2003 год — художником-постановщиком Камерного
               музыкального театра имени Степанова<br></br>
               <br></br>
               Параллельно в мастерской занимался станковой живописью,
               иллюстрацией, освоил резцовую гравюру. Проработав в театрах более
               19 лет, наконец-то смог в 2003 году полностью посветить себя
               живописи
             </p>
             <motion.img
               src={ImgLeonid2}
               whileTap={{ scale: 0.95 }}
             ></motion.img>
           </div>

           <div className="mushroom-season">
             <div className="mushroom-img">
               <h3>Грибной сезон</h3>
               <motion.img
                 src={ImgGMushroom}
                 whileTap={{ scale: 0.95 }}
               ></motion.img>
               <p>
                 Одной из первых серий картин стал «Грибной сезон». Потом
                 появились другие фантастические и мифологические сюжеты
                 <br></br>
                 <br></br>
                 Персональные выставки неоднократно проводились в Нижегородском
                 государственном художественном музее, различных выставочных
                 залах Нижнего Новгорода и в городах области. Продолжаю
                 участвовать в тематических выставках, устраиваемых Союзом
                 художников, а также в «Арт-Росии»<br></br>
                 <br></br>С 2016 г. сотрудничаю с Историко-художественным музеем
                 «Китеж» в с. Владимирском рядом с легендарным озером Светлояр.
                 На двух этажах здания разместились росписи и картины
                 мифологической тематики
               </p>
             </div>

             <div className="mushroom-title">
               <ul>
                 1995-2002
                 <li>
                   С командой единомышленников основали клуб нижегородских
                   художников-ирреалистов — «Странники»
                 </li>
               </ul>
               <ul>
                 с 2014
                 <li>
                   Совместно с коллегами, на базе мастерских художников
                   Блиновского пассажа в Н. Новгороде организовал общедоступную
                   галерею «Блиновка»
                 </li>
               </ul>
               <ul>
                 с 1994
                 <li>Член Международного союза художников</li>
               </ul>
               <ul>
                 с 1993
                 <li>Член Союза театральных деятелей России</li>
               </ul>
               <ul>
                 с 1995
                 <li>Член Союза художников России</li>
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
                 <li>
                   <img src={icon4}></img>Интересный факт: принципиально не пью
                   алкоголь с 12 лет, поддерживаю здоровый образ жизни
                 </li>
                 <li>
                   <img src={icon5}></img>Оформил около 200 книг - сказки,
                   фантастика, романы
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