import React, { Fragment } from 'react';
import './Rating.scss';

const Rating = ({ rating, ratingDesc, type }) => {
  const renderRateCircle = () => {
    const renderedCircles = [];

    for (let i = 1; i <= 5; i++) {
      const isFilled = i <= rating;

      renderedCircles.push(
        <span key={i} className={`circle ${isFilled ? 'filled' : ''}`} />
      );
    }

    return renderedCircles;
  };

  return (
    <Fragment>
      {type === 'vertical' ? (
        <div className="Rating">
          <div className="Rating__wrapper">
            <div className="Rating__rate">{renderRateCircle()}</div>
            <div className="Rating__desc">{ratingDesc}</div>
          </div>
        </div>
      ) : (
        <div className="Rating vertical">
          <div className="Rating__desc">{ratingDesc}</div>
          <div className="Rating__desc">{ratingDesc}</div>
          <div className="Rating__rate">{renderRateCircle()}</div>
        </div>
      )}
    </Fragment>
  );
};

export default Rating;
