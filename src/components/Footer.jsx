import tg from '../../src/images/telegram.svg'

const Footer = () => {  



    return (
      <>
        <section className="footer">
          <div className="footer-text">
            <p>Личный каталог картин Леонида Колосова и Татьяны Скворцовой</p>
            <p>{new Date().getFullYear()} год</p>

            <a href="https://t.me/+79300704428">
              <p>Пишите, звоните, мы на связи!</p>
              <a href="tel: +79047932712">+7 (904) 793-27-12</a>
              <img src={tg} alt="telegram" style={{ marginTop: "10px", marginBottom: "10px" }} />
            </a>

            <span>
              Информация на данном сайте не является публичной офертой.
            </span>
            <span>
              Любое копирование информации(картин) разрешается с указанием авторства и ссылки на данный сайт.
            </span>
          </div>
        </section>
      </>
    );

}
export default Footer