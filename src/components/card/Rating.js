import React from 'react';
import './Rating.scss';

const Rating = ({ rating, ratingDesc }) => {
  return (
    <div className="Rating">
      <div>{rating}</div>
      <div>{ratingDesc}</div>
    </div>
  );
};

export default Rating;
