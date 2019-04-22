import React from 'react';
import './Information.scss';

const Information = ({ crossOut, hilight, label, title }) => {
  return (
    <div className="Information">
      <p>{label || 'Card Label'}</p>
      <p>{title || 'Card Title'}</p>
      <div>
        <span>{hilight || 'Hilight'}</span>
        <span>{crossOut || 'Cross Out'}</span>
      </div>
    </div>
  );
};

export default Information;
