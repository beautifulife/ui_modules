import React, { Component } from 'react';
import './App.scss';
import Card from './card/Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {
        cardCrossOut: '',
        cardHilight: '',
        cardImgSrc: '',
        cardLabel: '',
        cardRating: 3,
        cardRatingDesc:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        cardTitle: ''
      }
    };
  }

  render() {
    const {
      card: {
        cardCrossOut,
        cardHilight,
        cardImgSrc,
        cardLabel,
        cardRating,
        cardRatingDesc,
        cardTitle
      }
    } = this.state;

    return (
      <div className="App">
        <header className="App__header">
          <h1>UI Modules</h1>
        </header>
        <div className="App__body">
          <Card
            cardCrossOut={cardCrossOut}
            cardHilight={cardHilight}
            cardImgSrc={cardImgSrc}
            cardLabel={cardLabel}
            cardRating={cardRating}
            cardRatingDesc={cardRatingDesc}
            cardTitle={cardTitle}
          />
          <Card
            cardCrossOut={cardCrossOut}
            cardHilight={cardHilight}
            cardImgSrc={cardImgSrc}
            cardLabel={cardLabel}
            cardRating={cardRating}
            cardTitle={cardTitle}
          />
          <Card
            cardCrossOut={cardCrossOut}
            cardHilight={cardHilight}
            cardImgSrc={cardImgSrc}
            cardLabel={cardLabel}
            cardTitle={cardTitle}
          />
          <Card
            cardCrossOut={cardCrossOut}
            cardHilight={cardHilight}
            cardImgSrc={cardImgSrc}
            cardLabel={cardLabel}
            cardRating={cardRating}
            cardType="horizontal"
          />
        </div>
      </div>
    );
  }
}

export default App;
