import React from 'react';
import PropTypes from 'prop-types';
import StatsList from './StatsList/StatsList';
import styles from './Statistics.module.scss';

const Statistics = ({ title, data }) => {
  return (
    <div>
      <div className={styles.stats}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <StatsList data={data} />
      </div>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
};

Statistics.defaultProps = {
  title: '',
};

export default Statistics;
