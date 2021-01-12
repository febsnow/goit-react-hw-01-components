import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatsItem.module.scss';

const StatsItem = props => (
  <li className={styles.listItem}>
    <span className={styles.label}>{props.label}</span>
    <span className={styles.percentage}>{props.percentage}%</span>
  </li>
);

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatsItem;
