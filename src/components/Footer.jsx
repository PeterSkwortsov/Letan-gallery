import { useMatch } from 'react-router-dom';
import tg from "../../src/images/telegramm.svg";
import vk from '../../src/images/vk.svg'
import xClose from "../images/x.svg";
import cookie from "../components/Footer.module.css";
import { useState } from "react";

const Footer = () => {  

 const [isShown, setIsShown] = useState(true);

 const handleClick = (event) => {
   setIsShown((current) => !current);

 };    

    return (
      <>
        <section>
          {isShown && (
    
              <div>
                <img
                  onClick={handleClick}
                  className={cookie.messages_cookies_close}
                  src={xClose}
                ></img>
                <p className={cookie.messages_cookies}>
                  Мы используем cookie-файлы, чтобы получить статистику, которая
                  помогает нам улучшить сервис. Продолжая
                  пользоваться сайтом без изменения настроек, вы даёте согласие
                  на использование ваших cookie-файлов.
                </p>
              </div>
           
          )}
          {isShown ? null : <></>}

          <div className="footer-text">
            <p>Личный каталог картин Леонида Колосова и Татьяны Скворцовой</p>
            <p>{new Date().getFullYear()} год</p>

            <p style={{ fontWeight: "bold" }}>Пишите, звоните, мы на связи!</p>
            <p>+7 (904) 793-27-12</p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "0 center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <a href="https://t.me/+79047932712">
                <img
                  src={tg}
                  alt="telegram"
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                />
              </a>
              <a href="https://t.me/+79300704428">
                <img
                  src={tg}
                  alt="telegram"
                  style={{ marginTop: "10px", marginBottom: "10px" }}
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