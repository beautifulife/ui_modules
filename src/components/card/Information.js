import React from 'react';
import './Information.scss';

const Information = ({ crossOut, hilight, label, title }) => {
  return (
    <div className="Information">
      <p className="Information__label">{label || 'Card Label'}</p>
      <p className="Information__title">{title || 'Card Title'}</p>
      <div className="Information__bottom">
        <span className="hilight">{hilight || 'Hilight'}</span>
        <span className="cross_out">{crossOut || 'Cross Out'}</span>
      </div>
    </div>
  );
};

export default Information;
