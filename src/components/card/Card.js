import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Card.scss';
import Cover from './Cover';
import Information from './Information';
import Rating from './Rating';

const Card = ({
  cardAuthor,
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
        <div className="Card vertical">
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
          <div className="cell">
            <Cover imgSrc={cardImgSrc} label={cardTitle} type={cardType} />
          </div>
          <div className="cell">
            <Rating
              author={cardAuthor}
              rating={cardRating}
              ratingDesc={cardRatingDesc}
              type={cardType}
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};

Card.propTypes = {
  cardAuthor: PropTypes.string,
  cardCrossOut: PropTypes.string,
  cardHilight: PropTypes.string,
  cardImgSrc: PropTypes.string,
  cardLabel: PropTypes.string,
  cardRating: PropTypes.number,
  cardRatingDesc: PropTypes.string,
  cardTitle: PropTypes.string,
  cardType: PropTypes.string
};

Card.defaultProps = {
  cardAuthor: '',
  cardCrossOut: '',
  cardHilight: '',
  cardImgSrc: '',
  cardLabel: '',
  cardRating: -1,
  cardRatingDesc: '',
  cardTitle: '',
  cardType: 'vertical'
};

export default Card;
