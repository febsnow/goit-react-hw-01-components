import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserProfile.module.scss';

const UserDescription = ({ avatar, name, tag, location }) => {
  return (
    <div className={styles.description}>
      <div className={styles.avatar}>
        <img src={avatar} alt={name} />
      </div>
      <p className={styles.title}>{name}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>
  );
};

UserDescription.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

UserDescription.defaultProps = {
  avatar: 'https://via.placeholder.com/150',
};

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

const UserProfile = props => {
  const { avatar, name, tag, location, stats } = props;
  return (
    <div className={styles.card}>
      <UserDescription avatar={avatar} alt={name} name={name} tag={tag} location={location} />
      <UserStats stats={stats} />
    </div>
  );
};
export default UserProfile;
