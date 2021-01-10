import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.scss';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactions}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.tableTitle}>Type</th>
          <th className={styles.tableTitle}>Amount</th>
          <th className={styles.tableTitle}>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {items.map(item => (
          <Transaction key={item.id} {...item} />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

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

export default TransactionHistory;
