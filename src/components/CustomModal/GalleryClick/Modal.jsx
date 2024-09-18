import xIcon from '../../../images/x.png';
import { useEffect, useState } from 'react';
import GridLoader from 'react-spinners/GridLoader';



const Modal = ({ clickImg, setClickImg }) => {

    const [isLoading, setIsLoading] = useState(false);
    
    const handleClick = (e) => {
      if (e.target.classList.contains("dismiss")) {
        setClickImg(null);
      }
    };

    useEffect(() => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, []);
    
    return (
      <>
        (
        <div className="overlay dismiss" onClick={handleClick}>
          {isLoading ? (
            <GridLoader
              color="#79d9cc"
              style={{
                margin: "0 auto",
                display: "flex",
                padding: "30px",
                justifyContent: "center",
                alignItems: "center",
              }}
              size={50}
            ></GridLoader>
          ) : (
            <img src={clickImg} alt="Большое изображение"></img>
          )}
        </div>
        )
      </>
    );
};


export default Modal