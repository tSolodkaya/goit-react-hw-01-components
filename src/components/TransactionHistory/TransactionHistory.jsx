import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHead}>
        <tr>
          <th className={css.tableHeadRow}>TYPE</th>
          <th className={css.tableHeadRow}>AMOUNT</th>
          <th className={css.tableHeadRow}>CURRENCY</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          const formatedType = `${type.split('')[0].toUpperCase()}${type.slice(
            1
          )}`;
          return (
            <tr className={css.tableRow} key={id}>
              <td>{formatedType}</td>
              <td>{amount}</td>
              <td>{currency.toUpperCase()}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
export default TransactionHistory;
