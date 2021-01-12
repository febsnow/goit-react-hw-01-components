import React from 'react';
import PropTypes from 'prop-types';
import styles from './Avatar.module.scss';

const Avatar = ({ src, alt }) => {
  return (
    <>
      <img className={styles.avatar} src={src} alt={alt} width="48" />
    </>
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

export default Avatar;
