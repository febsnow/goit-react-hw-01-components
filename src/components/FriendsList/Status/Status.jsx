import React from 'react';
import PropTypes from 'prop-types';
import styles from './Status.module.scss';

const Status = ({ userStatus }) => {
  const status = userStatus ? styles.online : styles.offline;

  return (
    <>
      <span className={status} />
    </>
  );
};

Status.propTypes = {
  userStatus: PropTypes.bool.isRequired,
};

export default Status;
