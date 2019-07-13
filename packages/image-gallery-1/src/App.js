import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    current: "https://preview.ibb.co/gxVppG/img1.jpg",
    fade:  '',
    images: [
      { uri : "https://preview.ibb.co/gxVppG/img1.jpg" },
      { uri : "https://preview.ibb.co/iZ3Lww/img2.jpg" },
      { uri : "https://preview.ibb.co/iQsPOb/img3.jpg" },
      { uri : "https://preview.ibb.co/gFFdib/img4.jpg" },
      { uri : "https://preview.ibb.co/hS5ppG/img5.jpg" },
      { uri : "https://preview.ibb.co/goKtGw/img6.jpg" },
      { uri : "https://preview.ibb.co/bSWjOb/img7.jpg" },
    ]
  }
  handleImageClick = (e) => {
    this.setState({
      current: e.target.src,
      fade: 'fade-in'
    })
    setTimeout(() => this.setState({ fade: '' }))
  }
  render() {
    let { current, fade, images } = this.state
    return (
      <div className="container">
        <div className="main-img">
          <img src={current} className={fade} alt="" />
        </div>
        <div className="imgs">
          {
            images.map((image) => (
              <img src={image.uri}  alt="" onClick={this.handleImageClick} />
            ))
          }
        </div>
      </div>
    );
  }
}


export default App;
