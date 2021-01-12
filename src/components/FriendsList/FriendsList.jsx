import React from 'react';
import PropTypes from 'prop-types';
import FriendsListItem from './FriendsListItem/FriendsListItem';
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

export default FriendsList;
