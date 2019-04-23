import React from 'react';
import PropTypes from 'prop-types';
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

Information.propTypes = {
  crossOut: PropTypes.string,
  hilight: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string
};

Information.defaultProps = {
  crossOut: '',
  hilight: '',
  label: '',
  title: ''
};

export default Information;
