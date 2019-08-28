import React from 'react';

export default ({ selected, setSelected }) => {
  let onSelectMenu = (e) => {
    setSelected(e.target.id)
    console.log(selected)
  }
  return (
    <section className="tabs">
      <div className="container">
        <div id="tab-1" className={`tab-item ${selected === 'tab-1' ? ' tab-border' : ''}`} onClick={onSelectMenu}>
          <i className="fas fa-door-open fa-3x"></i>
          <p className="hide-sm">Cancel at any time</p>
        </div>
        <div id="tab-2" className={`tab-item ${selected === 'tab-2' ? ' tab-border' : ''}`} onClick={onSelectMenu}>
          <i className="fas fa-tablet-alt fa-3x"></i>
          <p className="hide-sm">Watch anywhere</p>
        </div>
        <div id="tab-3" className={`tab-item ${selected === 'tab-3' ? ' tab-border' : ''}`} onClick={onSelectMenu}>
          <i className="fas fa-tags fa-3x"></i>
          <p className="hide-sm">Pick your price</p>
        </div>
      </div>
    </section>
  )
}