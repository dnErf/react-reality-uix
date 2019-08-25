import './App.css';
import React, { useEffect, useRef, useState } from 'react';

function App() {
  let [ ratings, setRatings ] = useState([
    { name: 'sony', rate: 4.7 }, 
    { name: 'samsung', rate: 3.4}, 
    { name: 'vizio', rate: 2.3}
  ])
  let [ selectedRate, setSelectedRate ] = useState({})
  let rateControl = useRef()
  let handleSelectOnChange = (e) => {
    setSelectedRate(ratings.filter((item) => item.name === e.target.value)[0])
  }
  let handleInputBlur = ({target}) => {
    if (target.value > 5 || target.value < 0 || target.value === '') {
      alert('please rate only 1 - 5')
      return
    }
    setRatings(
      ratings.map((item) => {
        if (item.name === selectedRate.name) {
          return { name: item.name, rate: target.value }
        } else {
          return item
        }
      })
    ) 
  }
  useEffect(() => {
    rateControl.current.value = selectedRate['rate']
  }, [selectedRate])
  return (
    <div className="container mt-5">
      <div className="form-group">
        <select className="form-control custom-select" onChange={handleSelectOnChange}>
          <option value="0">Select Product</option>
          <option value="sony">Sony 4k TV</option>
          <option value="samsung">Samsung 4k TV</option>
          <option value="vizio">Vizio 4k TV</option>
        </select>
      </div>
      <div className="form-group">
        <input 
          ref={rateControl} 
          type="number" 
          id="rating-control" 
          className="form-control" 
          step="0.1" 
          max="5" 
          placeholder="Rate 1 - 5"
          onBlur={handleInputBlur} 
        />
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Television</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          { ratings.map(_ratingView_) }
        </tbody>
      </table>
    </div>
  );
}

export default App;

// ---

function _ratingView_(rating) {
  const percentage = (rating.rate / 5) * 100
  const percentageRounded = `${Math.round(percentage / 10) * 10}%`
  let innerWidth = {
    width: percentageRounded
  }
  return (
    <tr key={rating.name} className={rating.name}>
      <td>{rating.name}</td>
        <td>
          <div className="stars-outer">
            {
              [1, 2, 3, 4, 5].map((k) => <i key={k} className="fas fa-star"></i>)
            }
            <div className="stars-inner" style={innerWidth}>
              {
                [1, 2, 3, 4, 5].map((k) => <i key={k} className="fas fa-star"></i>)
              }
            </div>
          </div>
          <span className="number-rating"></span>
        </td>
      </tr>
  )
}
