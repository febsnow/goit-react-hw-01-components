import React from 'react';
import PropTypes from 'prop-types';
import Status from '../Status/Status';
import Avatar from '../Avatar/Avatar';
import styles from './FriendsListItem.module.scss';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.listItem}>
      <Status userStatus={isOnline} />
      <Avatar src={avatar} alt={name} />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  name: PropTypes.string,
};

export default FriendsListItem;
