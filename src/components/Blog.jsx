import { Link } from "react-router-dom";
import uzola from "../images/blog-img/1.jpg";
import repin from "../images/blog-img/2.jpg";
import istok from "../images/blog-img/3.jpg";
import rep2 from "../images/blog-img/6.jpg";
import nNov from "../images/blog-img/9.jpeg";
import povetluze from "../images/blog-img/7.jpg";
import rostov from "../images/blog-img/8.jpg";
import blinovka from "../images/blog-img/1-1.jpg";
import skazochnic from "../images/blog-img/5.jpg";
import pastel from "../images/blog-img/7-.jpg";
import zima from "../images/blog-img/4.jpg";
import les from "../images/blog-img/10.jpg";
import stena from "../images/blog-img/9.jpg";
import crasnoe from "../images/blog-img/11.jpg";
import nith from "../images/blog-img/12.jpg";
import pastel2 from "../images/blog-img/13.jpg";
import goroh from "../images/blog-img/14.jpg";
import oxota from "../images/blog-img/15.jpg";



import BlogCss from "../components/Bio/Blog.css"

const Blog = () => {
    


    return (
      <>
        <h2>Блог о творчестве</h2>
        <section className="section-all">
          <div className="item-element">
            <h3>На прекрасной узоле</h3>
            <a href="https://dzen.ru/a/XqMFhij5mCJPCGVw">
              <img src={uzola} alt="uzola" />
            </a>
          </div>
          <div className="item-element">
            <h3>Мой надежный источник вдохновения</h3>
            <a href="https://dzen.ru/a/XphqffWMBy3cFVkT">
              <img src={repin} alt="uzola" />
            </a>
          </div>
          <div className="item-element">
            <h3>Притяжение Репинской дачи</h3>
            <a href="https://dzen.ru/a/XqwVtBUK0nFtyPSv">
              <img src={rep2} alt="uzola" />
            </a>
          </div>
          <div className="item-element">
            <h3>Уникальная фишка Нижнего Новгорода</h3>
            <a href="https://dzen.ru/a/XoCSe4MiRHKcWoeQ">
              <img src={nNov} alt="uzola" />
            </a>
          </div>
          <div className="item-element">
            <h3>Уголок Нижегородского Поветлужья</h3>
            <a href="https://dzen.ru/a/XnoKAXpvMDMxIScf">
              <img src={povetluze} alt="uzola" />
            </a>
          </div>
          <div className="item-element">
            <h3>Нижегородские заметки. Часть II</h3>
            <a href="https://dzen.ru/a/XnH4kiDw3R8cre9f">
              <img src={istok} alt="uzola" />
            </a>
          </div>
          <div className="item-element">
            <h3>Ростов Великий - самый сказочный город</h3>
            <a href="https://dzen.ru/a/XlawWyKsIkpCRUuJ">
              <img src={rostov} alt="uzola" />
            </a>
          </div>
          <div className="item-element">
            <h3>Мастерская сказочника</h3>
            <a href="https://dzen.ru/a/XhraU9eFmwC05oN4">
              <img src={skazochnic} alt="uzola" />
            </a>
          </div>
          <div className="item-element">
            <h3>Нижегородская галерея «Блиновка»</h3>
            <a href="https://dzen.ru/a/Xi6m-booHgCuDSby">
              <img src={blinovka} alt="uzola" />
            </a>
          </div>

          <div className="item-element">
            <h3>Масляная пастель</h3>
            <a href="https://dzen.ru/a/XhBgmR7jTwCxgOmu">
              <img src={pastel} alt="uzola" />
            </a>
          </div>
          <div className="item-element">
            <h3>Про зиму</h3>
            <a href="https://dzen.ru/a/Xg0LIUOGPwCxpgJI">
              <img src={zima} alt="uzola" />
            </a>
          </div>
          <div className="item-element">
            <h3>Нижегородские заметки</h3>
            <a href="https://dzen.ru/a/Xf3qrm9fbwCuFAC9">
              <img src={les} alt="uzola" />
            </a>
          </div>
          <div className="item-element">
            <h3>Красное на Волге</h3>
            <a href="https://dzen.ru/a/Xf3g9qP25ACx5qCE">
              <img src={crasnoe} alt="uzola" />
            </a>
          </div>
          <div className="item-element">
            <h3>За что любить пастель. Часть II</h3>
            <a href="https://dzen.ru/a/XfdQ_gSvHwCy1eEn">
              <img src={nith} alt="uzola" />
            </a>
          </div>
          <div className="item-element">
            <h3>За что любить пастель. Часть I</h3>
            <a href="https://dzen.ru/a/Xek7vebo7wCuEjHk">
              <img src={pastel2} alt="uzola" />
            </a>
          </div>
          <div className="item-element">
            <h3>Гороховецкий пленэр</h3>
            <a href="https://dzen.ru/a/XdqLSWQzj1z27w_X">
              <img src={goroh} alt="uzola" />
            </a>
          </div>
          <div className="item-element">
            <h3>Охота за этюдами</h3>
            <a href="https://dzen.ru/a/XZHU0ez7gACuuQdy">
              <img src={stena} alt="uzola" />
            </a>
          </div>
          <div className="item-element">
            <h3>Живописная поездка в Переславль</h3>
            <a href="https://dzen.ru/a/XZHU0ez7gACuuQdz">
              <img src={oxota} alt="uzola" />
            </a>
          </div>
        </section>
      </>
    );
}

export default Blog;