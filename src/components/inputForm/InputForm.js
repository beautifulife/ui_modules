import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './InputForm.scss';

class InputForm extends Component {
  constructor(props) {
    super(props);
    const { initialValue } = this.props;
    this.state = {
      inputValue: initialValue
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { limitWordCount } = this.props;

    if (event.currentTarget.value.length <= limitWordCount) {
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
    const { initialValue, limitWordCount, uiState } = this.props;

    const isInputValueChanged = inputValue !== initialValue;
    const isInputDisabled = uiState === 'disabled' || uiState === 'readonly';
    const wordCountToLimit = limitWordCount - inputValue.length;

    return (
      <div className="InputForm">
        <div
          className={`InputForm__wrapper ${
            inputValue && isInputValueChanged ? 'active' : ''
          }`}
        >
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
        {inputValue && isInputValueChanged && (
          <button
            className="InputForm__save-btn"
            type="submit"
            title="save"
            onClick={this.handleClick}
          >
            Save
          </button>
        )}
      </div>
    );
  }
}

InputForm.propTypes = {
  initialValue: PropTypes.string,
  limitWordCount: PropTypes.number,
  uiState: PropTypes.string,
  onSaveClick: PropTypes.func.isRequired
};

InputForm.defaultProps = {
  initialValue: '',
  limitWordCount: 500,
  uiState: 'default'
};

export default InputForm;
