import arrowRight from '../../../images/arr.svg'
import WinterCollect from '../../WinterCollect';


const Modal = ({ clickImg, setClickImg }) => {
    
    const handleClick = (e) => {
      if(e.target.classList.contains('dismiss')){
        setClickImg(null)
      }
    };
    
    return (
      <>
        <div className="overlay dismiss" onClick={handleClick}>
          <img src={clickImg} alt="Большое изображение"></img>
          <span className="dismiss" onClick={handleClick}>
            Х
          </span>
         
        </div>
      </>
    );
};


export default Modal