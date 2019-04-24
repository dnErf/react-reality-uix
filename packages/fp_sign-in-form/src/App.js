import './App.css';

import React, { useState } from 'react';

import SignIn from './_components/SignIn';
import SignUp from './_components/SignUp';
import Overlay from './_components/Overlay';

const App = ()=> {
  let
    [ isRightPanelActive, setRightPanelState ] = useState(false)
  function handleClick(e) {
    e.preventDefault();
    setRightPanelState(!isRightPanelActive);
  }
  return (
    <div className={ 'container ' + ( isRightPanelActive && 'right-panel-active' ) } id="container">
      <SignUp />
      <SignIn />
      <Overlay whenClicked={handleClick} />
    </div>
  );
}

export default App;
