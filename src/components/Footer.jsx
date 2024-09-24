import { useMatch } from 'react-router-dom';
import tg from "../../src/images/telegramm.svg";
import vk from '../../src/images/vk.svg'
const Footer = () => {  



    return (
      <>
        <section className="footer">
          <div className="footer-text">
            <p>Личный каталог картин Леонида Колосова и Татьяны Скворцовой</p>
            <p>{new Date().getFullYear()} год</p>

            <p>Пишите, звоните, мы на связи!</p>
            <a href="tel: +79047932712">+7 (904) 793-27-12</a>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "0 center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <a href="https://t.me/+79300704428">
                <img
                  src={tg}
                  alt="telegram"
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                />
              </a>
              <a href="https://vk.com/letan_gallery">
                <img
                  src={vk}
                  alt="telegram"
                  style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    height: "100%",
                  }}
                />
              </a>
            </div>

            <span>
              Информация на данном сайте не является публичной офертой.
            </span>
            <span>
              Любое копирование информации(картин) разрешается с указанием
              авторства и ссылки на данный сайт.
            </span>
          </div>
        </section>
      </>
    );

}
export default Footer