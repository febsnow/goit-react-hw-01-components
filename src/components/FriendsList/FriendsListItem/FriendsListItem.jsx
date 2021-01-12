import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendsListItem.module.scss';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  const status = isOnline ? styles.online : styles.offline;
  return (
    <li className={styles.listItem}>
      <span className={status}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default FriendsListItem;
