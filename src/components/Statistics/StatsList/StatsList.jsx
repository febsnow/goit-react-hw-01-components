import React from 'react';
import PropTypes from 'prop-types';
import StatsItem from '../StatsItem/StatsItem';
import styles from './StatsList.module.scss';

const StatsList = ({ data }) => (
  <ul className={styles.statsList}>
    {data.map(item => {
      return (
        <StatsItem
          key={item.id}
          label={item.label}
          percentage={item.percentage}
        />
      );
    })}
  </ul>
);

StatsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StatsList;
