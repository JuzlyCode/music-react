import React from 'react'

const Modal = ({onClose, children, closeIcon, classContent}) => {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <button onClick={()=>onClose()}>
          <span className="close">&times;</span>
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal