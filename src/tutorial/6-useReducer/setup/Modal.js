import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal()
    }, 3000);
})
  return <div className="">
    <h2>{modalContent}</h2>
  </div>
};

export default Modal;
