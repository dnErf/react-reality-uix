import './App.css';

import React from 'react';

import Modal from './Modal';

function App() {
  return (
    <div className="app--container">
      <Modal btnLabel="Modal">
        <div className="modal--body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam autem laboriosam ullam ipsum dicta, totam ducimus 
          reprehenderit perspiciatis illum natus porro reiciendis? Quos, sequi tempora. Fuga accusantium eius quasi natus.
        </div>
      </Modal>
    </div>
  );
}

export default App;
