import React from "react";
import ReactDOM from 'react-dom';
import IcClose from '@assets/img/icon/close.svg'

interface ModalProps {
  children: React.ReactNode;
  onClose: Function
}

const Modal: React.FC<ModalProps> = (props) => {
  const { children, onClose } = props
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={IcClose} className="w-6 h-6 ml-auto cursor-pointer" onClick={() => onClose()} />
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')!
  )
}

export default Modal