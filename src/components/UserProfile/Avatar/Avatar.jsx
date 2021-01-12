import React from 'react';
import PropTypes from 'prop-types';
import styles from './Avatar.module.scss';

const Avatar = ({ src, alt }) => {
  return (
    <div className={styles.avatar}>
      <img src={src} alt={alt} />
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  src: 'https://via.placeholder.com/150',
};

export default Avatar;
