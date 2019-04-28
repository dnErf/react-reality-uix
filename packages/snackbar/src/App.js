import './App.css';
import React, { useState } from 'react';

import { Snackbar } from './Snackbar';

function App() {
  let
    [ isActive, setActive ] = useState(false)
    , _handleShowSnackbar = (e) => {
      e.preventDefault()
      setActive(true)
      setTimeout(() => {
        setActive(false);
      }, 3000);
    }
  return (
    <div className="App">
      <button onClick={ _handleShowSnackbar } disabled={isActive}> open snackbar </button>
      <Snackbar isActive={isActive} />
    </div>
  );
}

export default App;
