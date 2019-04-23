import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Rating.scss';

const Rating = ({ author, rating, ratingDesc, type }) => {
  const subStringRatingDesc = ratingDesc
    ? ratingDesc.substring(0, 60) + '...'
    : null;
  const renderRateCircle = () => {
    const renderedCircles = [];

    for (let i = 1; i <= 5; i++) {
      const isFilled = i <= rating;

      renderedCircles.push(
        <span key={i} className={`circle ${isFilled ? 'filled' : ''}`}>
          {`평가 총 5점 중 ${rating}점`}
        </span>
      );
    }

    return renderedCircles;
  };

  return (
    <Fragment>
      {type === 'vertical' ? (
        <div className="Rating vertical">
          <div className="Rating__wrapper">
            <div className="Rating__rate">{renderRateCircle()}</div>
            <div className="Rating__desc">{ratingDesc}</div>
          </div>
        </div>
      ) : (
        <div className="Rating horizontal">
          <div className="Rating__desc title">{ratingDesc}</div>
          <div className="Rating__desc long">{subStringRatingDesc}</div>
          <div className="Rating__rate">
            {renderRateCircle()}
            <span className="author">{author}</span>
          </div>
        </div>
      )}
    </Fragment>
  );
};

Rating.propTypes = {
  author: PropTypes.string,
  rating: PropTypes.number.isRequired,
  ratingDesc: PropTypes.string,
  type: PropTypes.string
};

Rating.defaultProps = {
  author: '',
  ratingDesc: '',
  type: 'vertical'
};

export default Rating;
