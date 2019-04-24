import React from 'react';

export default ({ whenClicked }) => (
  <div className="overlay-container">
    <div className="overlay">
      <div className="overlay-panel overlay-left">
        <h1>Welcome Back!</h1>
        <p>
          To keep connected with us please login with your personal info
        </p>
        <button className="ghost" id="signIn" onClick={ whenClicked }>Sign In</button>
      </div>
      <div className="overlay-panel overlay-right">
        <h1>Hello, Friend!</h1>
        <p>Enter your personal details and start journey with us</p>
        <button className="ghost" id="signUp" onClick={ whenClicked }>Sign Up</button>
      </div>
    </div>
  </div>
)