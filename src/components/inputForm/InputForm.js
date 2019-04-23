import React, { Component } from 'react';
import './InputForm.scss';

class InputForm extends Component {
  constructor(props) {
    super(props);
    const { initialValue } = this.props;
    this.state = {
      inputValue: initialValue || ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    if (event.currentTarget.value.length <= 500) {
      this.setState({
        inputValue: event.currentTarget.value
      });
    }
  }

  handleClick() {
    const { inputValue } = this.state;
    const { onSaveClick } = this.props;

    onSaveClick(inputValue);
  }

  render() {
    const { inputValue } = this.state;
    const { initialValue, uiState } = this.props;

    const isInputValueChanged = inputValue !== initialValue;
    const isInputDisabled = uiState === 'disabled' || uiState === 'readonly';
    const wordCountToLimit = 500 - inputValue.length;

    return (
      <div className="InputForm">
        <div className="InputForm__cell">
          <textarea
            className={`InputForm__textarea ${
              isInputDisabled ? 'disabled' : ''
            }`}
            value={inputValue}
            placeholder="입력창 입니다."
            onChange={this.handleChange}
            disabled={isInputDisabled}
          />
          <span className="InputForm__word_count">{wordCountToLimit}</span>
        </div>
        <div className="InputForm__cell">
          {inputValue && isInputValueChanged && (
            <button
              className="InputForm__save-btn"
              type="submit"
              onClick={this.handleClick}
            >
              Save
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default InputForm;
