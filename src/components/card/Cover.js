import React from 'react';
import './Cover.scss';
import logo from '../../assets/images/logo.jpg';

const Cover = ({ imgSrc, label, type }) => {
  const styles = {
    background: {
      backgroundImage: `url(${imgSrc || logo})`
    }
  };

  return (
    <div className={`Cover ${type}`}>
      <div className="img" style={styles.background} aria-label={label || 'sub-image'} />
    </div>
  );
};

export default Cover;
