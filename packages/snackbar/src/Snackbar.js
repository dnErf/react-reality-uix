
import React from 'react';

export const Snackbar = ({ isActive }) => {
  return isActive && (<div className={ isActive ? 'snackbar show': ''}>Hello</div>)
}