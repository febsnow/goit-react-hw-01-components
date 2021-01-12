import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import styles from './UserDescription.module.scss';

const UserDescription = ({ avatar, name, tag, location }) => {
  return (
    <div className={styles.description}>
      <Avatar src={avatar} alt={name} />
      <p className={styles.title}>{name}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>
  );
};

UserDescription.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default UserDescription;
