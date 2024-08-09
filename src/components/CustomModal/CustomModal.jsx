import "./CustomModal.css";
import Modal from 'react-modal';
// eslint-disable-next-line no-unused-vars
// import closeIcon from "./img/icon.svg";
import { useState } from "react";



const CustomModal = ({isOpen, onClose, children}) => {

    return (
      <>
        <Modal
        isOpen={isOpen}
        overlayClassName={"modal-overlay"}
        className={"modal-content"}
        ariaHideApp={false}
        closeTimeoutMS={300}>
          
          <button className="modal-close-button" onClick={() => onClose()}>
            {<img src="./img/icon.svg" alt="Закрыть" />}
          </button>
          {children}
          <button className="modal-submit-button" onClick={() => onClose()}>
            Закрыть
          </button>
        </Modal>
      </>
    );
}

export default CustomModal