import './App.css';
import React, { useState } from 'react';

import Header from './components/Header';
import TabMenu from './components/TabMenu';
import TabContent from './components/tabs';

function App() {
  let [ selected, setSelected ] = useState('tab-1')
  return (
    <div className="App">
      <Header />
      <TabMenu selected={ selected } setSelected={ setSelected } />
      <TabContent selected={ selected } />
    </div>
  );
}

export default App;
