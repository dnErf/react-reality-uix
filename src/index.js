import './styles/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'

import App from './components/App'

ReactDOM.render(
  <Router>
    <div className="app">
      <Route exact path="/" component={App} />
    </div>
  </Router>
  , document.getElementById('root')
)
