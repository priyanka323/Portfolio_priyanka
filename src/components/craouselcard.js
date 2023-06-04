import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';


class MyCarousel extends Component {

  static get CARD_STYLE() {
    return {
      height: '300px',
      width: '300px',
      paddingTop: '0px',
      textAlign: 'top-left',
      background: '#52C0F5',
      color: '#FFF',
      fontSize: '12px',
      textTransform: 'uppercase',
      borderRadius: '10px',
    };
  }

  render() {
    return (
      <ReactCardCarousel autoplay={ true } autoplay_speed={ 2500 }>
        <div style={ MyCarousel.CARD_STYLE }>
         <img src='https://myexam.allen.ac.in/wp-content/uploads/2022/09/ALLEN-NEET-UG-2022-AIR-1_01.jpg' style={{ width: '300px',height: '300px' }} ></img>
        </div>
        <div style={ MyCarousel.CARD_STYLE }>
        <img src='https://myexam.allen.ac.in/wp-content/uploads/2022/09/ALLEN-NEET-UG-2022-AIR-1_01.jpg' style={{ width: '300px',height: '300px' }} ></img>
        </div>
        <div style={ MyCarousel.CARD_STYLE }>
        <img src='https://myexam.allen.ac.in/wp-content/uploads/2022/09/ALLEN-NEET-UG-2022-AIR-1_01.jpg' style={{ width: '300px',height: '300px' }} ></img>
        </div>
        <div style={ MyCarousel.CARD_STYLE }>
        <img src='https://myexam.allen.ac.in/wp-content/uploads/2022/09/ALLEN-NEET-UG-2022-AIR-1_01.jpg' style={{ width: '300px',height: '300px' }} ></img>
        </div>
        <div style={ MyCarousel.CARD_STYLE }>
        <img src='https://myexam.allen.ac.in/wp-content/uploads/2022/09/ALLEN-NEET-UG-2022-AIR-1_01.jpg' style={{ width: '300px',height: '300px' }} ></img>
        </div>
      </ReactCardCarousel>
    );
  }
}

export default MyCarousel;