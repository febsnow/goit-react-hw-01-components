import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendsList.module.scss';

const FriendsList = ({ list }) => {
  return (
    <div>
      <ul className={styles.list}>
        {list.map(item => (
          <FriendsListItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

FriendsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

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
  status: PropTypes.bool,
};

export default FriendsList;
