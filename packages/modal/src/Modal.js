
import React, { useCallback, useEffect, useState } from 'react';

export default ({ btnLabel, children }) => {
  let
    [ modal, showModal ] = useState(false)
  function toggleModal() {
    showModal(!modal)
  }
  return (
    <React.Fragment>
      <button
        className="modal-btn"
        onClick={ toggleModal }
      >
        { btnLabel }
      </button>
      { 
        modal && (
          <ModalBody onClose={ toggleModal }>
            { children }
          </ModalBody>
        )
      }
    </React.Fragment>
  )
}

function ModalBody({ children, onClose }) {
  let
    node
    , handleKeyUp = useCallback((e) => {
      if (e.keyCode) {
        e.preventDefault()
        onClose()
      }
    }, [])
    , handleOutsideClick = useCallback((e) => {
      if (node.contains(e.target)) {
        onClose()
      }
    }, [])
  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)
    document.addEventListener('click', handleOutsideClick)
    return () => {
      window.removeEventListener('keyup', handleKeyUp)
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])
  return (
    <div className="modal--overlay">
      <div ref={ (n) => node = n  } className="modal--content">
        <div className="modal--header">
          <span className="modal--close" onClick={ onClose }>&times;</span>
          <h2>Modal Header</h2>
        </div>
        { children }
        <div className="modal--footer">
          <button className="modal-btn btn--close" onClick={ onClose }>Close</button>
        </div>
      </div>
    </div>
  )
}