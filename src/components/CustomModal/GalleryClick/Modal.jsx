import xIcon from '../../../images/x.png';

const Modal = ({ clickImg, setClickImg }) => {
    
    const handleClick = (e) => {
      if (e.target.classList.contains("dismiss")) {
        setClickImg(null);
      }
    };
    
    return (
      <>
        <div className="overlay" onClick={handleClick}>
          <img src={clickImg} alt="Большое изображение"></img>
          <span onClick={handleClick}>
            <img src={xIcon} className="dismiss x-icon"></img>
          </span>
        </div>
      </>
    );
};


export default Modal