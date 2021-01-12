import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transaction.module.scss';

const Transaction = ({ type, amount, currency }) => {
  return (
    <tr className={styles.tableRow}>
      <td className={styles.tbodyContent}>{type}</td>
      <td className={styles.tbodyContent}>{amount}</td>
      <td className={styles.tbodyContent}>{currency}</td>
    </tr>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Transaction;
