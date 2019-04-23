import React, { Fragment } from 'react';
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
  cardTitle,
  cardType = 'vertical'
}) => {
  return (
    <Fragment>
      {cardType === 'vertical' ? (
        <div className="Card">
          <Cover imgSrc={cardImgSrc} label={cardTitle} type={cardType} />
          <Information
            crossOut={cardCrossOut}
            hilight={cardHilight}
            label={cardLabel}
            title={cardTitle}
          />
          {cardRating && (
            <Rating
              rating={cardRating}
              ratingDesc={cardRatingDesc}
              type={cardType}
            />
          )}
        </div>
      ) : (
        <div className="Card horizontal">
          <Cover imgSrc={cardImgSrc} label={cardTitle} type={cardType} />
          <Rating
            rating={cardRating}
            ratingDesc={cardRatingDesc}
            type={cardType}
          />
        </div>
      )}
    </Fragment>
  );
};

export default Card;
