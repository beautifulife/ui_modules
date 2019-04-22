import React from 'react';
import './Card.scss';
import Cover from './Cover';
import Information from './Information';
import Rating from './Rating';

const Card = ({
  cardCrossOut,
  cardHilight,
  cardImgSrc,
  cardLabel,
  cardRating,
  cardRatingDesc,
  cardTitle
}) => {
  return (
    <div className="Card">
      <div className="Card__image-wrapper">
        <Cover imgSrc={cardImgSrc} label={cardTitle} />
      </div>
      <Information
        crossOut={cardCrossOut}
        hilight={cardHilight}
        label={cardLabel}
        title={cardTitle}
      />
      <Rating rating={cardRating} ratingDesc={cardRatingDesc} />
    </div>
  );
};

export default Card;
