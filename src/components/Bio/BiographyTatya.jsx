import arrow1 from '../../images/arrow.svg';
import arrow2 from '../../images/arr.svg';
import tatiana1 from '../../images/ImgTatyana1.jpg';
import planet from '../../images/IconPalette.svg';
import scetch from '../../images/IconSketch.svg';
import pastel from '../../images/IconPalette2.svg';
import tat from '../../images/ImgTatyana2.png'
const BiographyTatya = () => {
    return (
      <>
        <div className="white-blok">
          <img src={arrow1}></img>
          <span>
            Мощнейший заряд дает мне именно Нижний Новгород
            <br></br>
            Здесь удается получать вдохновение от рек, городских улиц, в
            старинных стенах мастерской, практически отовсюду
          </span>
          <img src={arrow2}></img>
        </div>

        <div className="biography-main">
          <div className="biography-img">
            <h2>Татьяна Скворцова</h2>
            <img src={tatiana1}></img>
          </div>

          <ul className="biography-leonid-list">
            <li>
              <img src={planet}></img>
              Родилась в городе Новокуйбышевске, но живу в Нижнем Новгороде с
              трех лет и по сей день. Есть другие места, где чувствую себя даже
              свободнее, уютнее, но дом только здесь
            </li>
            <li>
              <img src={scetch}></img>
              Работаю архитектором. Закончила ГИСИ и работаю по профессии более
              30 лет. Моя специальность всегда заставляла развиваться, осваивать
              новое
            </li>
            <li>
              <img src={pastel}></img>Моя техника до 1998 года – только
              акварель, с 1998 года – пастель, а с 2008 года я использую
              масляную пастель и масло. В живописи больше всего нравится писать
              натюрморты
            </li>
          </ul>
        </div>

        <div className="biography-block">
          <p>
            Мы с семьей много ездим по Нижегородской области. Отдавая
            предпочтение живописным местам с небольшими реками, уезжаем на Узолу
            и Ветлугу, подолгу живем на даче в Борском районе – недалеко от
            Линды и Кезы<br></br>
            <br></br> Я люблю Городец и Чкаловск, Арзамас и Лысково, село
            Татинец, расположенное на берегу Волги… Прекрасны и другие русские
            города: Суздаль и Гороховец, Палех и Плёс, Муром, Вологда<br></br>
            <br></br>
            Наша страна огромна, и в ней еще множество мест, дающих источники
            вдохновения. И из каждой поездки я стараюсь привозить если не новую
            работу, то впечатления, заставляющие и дома снова и снова браться за
            кисть
          </p>
          <img src={tat}></img>
        </div>
      </>
    );
}

export default BiographyTatya