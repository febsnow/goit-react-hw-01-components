import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';

const Statistics = ({ title, data }) => {
  return (
    <div>
      <div className={styles.stats}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <Stats data={data} />
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

const StatItem = props => (
  <li className={styles.statsItem}>
    <span className={styles.label}>{props.label}</span>
    <span className={styles.percentage}>{props.percentage}%</span>
  </li>
);

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

const Stats = ({ data }) => (
  <ul className={styles.statsList}>
    {data.map(item => {
      return <StatItem key={item.id} label={item.label} percentage={item.percentage} />;
    })}
  </ul>
);

export default Statistics;
