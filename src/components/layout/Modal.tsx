import React from "react";
import ReactDOM from 'react-dom';
import IcClose from '@assets/img/icon/close.svg'

interface ModalProps {
  children: React.ReactNode;
  onClose: Function;
  title?: any
}

const Modal: React.FC<ModalProps> = (props) => {
  const { children, onClose, title } = props
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="flex">
          <div className='text-center text-base font-semibold w-full'>{title}</div>
          <img src={IcClose} className="w-6 h-6 ml-auto cursor-pointer" onClick={() => onClose()} />
        </div>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')!
  )
}

export default Modal