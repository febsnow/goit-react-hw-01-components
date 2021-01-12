import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserStats.module.scss';

const UserStats = ({ stats }) => {
  return (
    <ul className={styles.stats}>
      <li className={styles.statsItem}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{stats.followers}</span>
      </li>
      <li className={styles.statsItem}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{stats.views}</span>
      </li>
      <li className={styles.statsItem}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{stats.likes}</span>
      </li>
    </ul>
  );
};

UserStats.propTypes = {
  stats: PropTypes.object.isRequired,
};

export default UserStats;
