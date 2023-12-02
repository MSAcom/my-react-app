import React, { Component } from 'react';
import './index.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  nextSlide = () => {
    const { currentIndex } = this.state;
    const { slides } = this.props;
    const nextIndex = (currentIndex + 1) % slides.length;

    this.setState({
      currentIndex: nextIndex,
    });
  };

  prevSlide = () => {
    const { currentIndex } = this.state;
    const { slides } = this.props;
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;

    this.setState({
      currentIndex: prevIndex,
    });
  };

  render() {
    const { slides } = this.props;
    const { currentIndex } = this.state;

    const wrapperStyle = {
      display: 'flex',
      width: '100%',
      transition: 'transform 0.5s ease-in-out',
      transform: `translateX(${-currentIndex * 100}%)`,
    };

    return (
      <div className="slider" style={{ position: 'relative' }}>
        <button className='previous-button' onClick={this.prevSlide} style={{ display: currentIndex !== 0 ? 'block' : 'none', position: 'absolute', top: '50%', transform: 'translateY(-50%)', fontSize: '1.5rem', border: 'none', cursor: 'pointer', left: '10px' }}>
         
        </button>
        <div className="slide-wrapper" style={wrapperStyle}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? 'active' : ''}`}
            >
              <img src={slide} alt={`slide ${index}`} />
            </div>
          ))}
        </div>
        <button className='next-button' onClick={this.nextSlide} style={{ display: currentIndex !== slides.length - 1 ? 'block' : 'none', position: 'absolute', top: '50%', transform: 'translateY(-50%)', fontSize: '1.5rem', border: 'none', cursor: 'pointer', right: '10px' }}>
        
        </button>
      </div>
    );
  }
}

export default Slider;

/*

.slider {

    width: 90%; 
    height: 100vh;
    margin: auto;
    position: relative;
    display: flex ;
    flex-direction: row;
    align-items: center;
    bottom: 0;
  }
  
  .slide-wrapper {
    display: flex;
    width: 100%;
   
   transition: transform 0.5s ease-in-out; 

  }
  .slide {
    flex: 0 0 100%;
  
    opacity: 0;
    transition: opacity 0.5s;
  }
  
  .slide img {
    width: 100%;
    height: auto;
  }
  
  .slide.active {
    opacity: 1;
  }
  
  button {
   position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.5rem;
  
    border: none;
    cursor: pointer;
  }
  
  button:first-child {
    left: 10px;
    z-index: 1;
  }
  
  button:last-child {
    margin-right: 10px;
  }

  .previous-button {
    width: 40px; 
    height: 40px; 
    background-image: url('flechegauche.png'); 
    background-size: cover; 
    cursor: pointer;
    background-color: transparent; 
  }
  .next-button {
    width: 40px; 
    height: 40px; 
    background-image: url('flechedroite.png'); 
    background-size: cover; 
    cursor: pointer;
    background-color: transparent; 
  }
  */