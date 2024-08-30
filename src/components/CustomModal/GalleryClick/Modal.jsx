import xIcon from '../../../images/x.png';

const Modal = ({ clickImg, setClickImg }) => {
    
    const handleClick = (e) => {
      if (e.target.classList.contains("dismiss")) {
        setClickImg(null);
      }
    };
    
    return (
      <>
        <div className="overlay dismiss" onClick={handleClick}>
          <img src={clickImg} alt="Большое изображение"></img>
          <div>
            {/* <img
              src={xIcon}
              onClick={handleClick}
              className="dismiss x-icon"
            ></img> */}
          </div>
        </div>
      </>
    );
};


export default Modal