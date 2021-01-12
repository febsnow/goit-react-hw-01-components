import React from 'react';
import PropTypes from 'prop-types';
import UserDescription from './UserDescription/UserDescription';
import UserStats from './UserStats/UserStats';
import styles from './UserProfile.module.scss';

const UserProfile = props => {
  const { avatar, name, tag, location, stats } = props;
  return (
    <div className={styles.card}>
      <UserDescription
        avatar={avatar}
        alt={name}
        name={name}
        tag={tag}
        location={location}
      />
      <UserStats stats={stats} />
    </div>
  );
};

UserProfile.propTypes = {
  props: PropTypes.arrayOf(PropTypes.object),
};
export default UserProfile;
