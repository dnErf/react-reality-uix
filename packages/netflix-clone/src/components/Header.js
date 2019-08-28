import React from 'react';

export default () => (
  <header className="showcase">
    <div className="showcase-top">
      <img src="https://i.ibb.co/r5krrdz/logo.png" alt="" />
      <a href="/" className="btn btn-rounded">Sign In</a>
    </div>
    <div className="showcase-content">
      <h1>See what's next</h1>
      <p>Watch anywhere. Cancel Anytime</p>
      <a href="/" className="btn btn-xl">
        Watch Free For 30 Days <i className="fas fa-chevron-right btn-icon"></i>
      </a>
    </div>
  </header>
)