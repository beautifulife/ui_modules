import React, { Component } from 'react';
import './App.scss';
import Card from './card/Card';
import InputForm from './inputForm/InputForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {
        cardAuthor: 'Jone Doe',
        cardCrossOut: '',
        cardHilight: '',
        cardImgSrc: '',
        cardLabel: '',
        cardRating: 3,
        cardRatingDesc:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        cardTitle: ''
      },
      inputForm: {
        initialValue: '초기값 입니다',
        uiState: 'readonly'
      }
    };

    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleSaveClick(inputValue) {
    console.log(inputValue);
  }

  render() {
    const {
      card: {
        cardAuthor,
        cardCrossOut,
        cardHilight,
        cardImgSrc,
        cardLabel,
        cardRating,
        cardRatingDesc,
        cardTitle
      },
      inputForm: { initialValue, uiState }
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
            cardAuthor={cardAuthor}
            cardCrossOut={cardCrossOut}
            cardHilight={cardHilight}
            cardImgSrc={cardImgSrc}
            cardLabel={cardLabel}
            cardRating={cardRating}
            cardRatingDesc={cardRatingDesc}
            cardType="horizontal"
          />
        </div>
        <div className="App__body">
          <InputForm onSaveClick={this.handleSaveClick} />
          <InputForm
            initialValue={initialValue}
            onSaveClick={this.handleSaveClick}
          />
          <InputForm uiState={uiState} onSaveClick={this.handleSaveClick} />
        </div>
      </div>
    );
  }
}

export default App;
