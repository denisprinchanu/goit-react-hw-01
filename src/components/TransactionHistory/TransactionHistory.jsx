import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={css.table}>
        <thead>
          <tr>
            <th className={css.th}>Type</th>
            <th className={css.th}>Amount</th>
            <th className={css.th}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr
              key={item.id}
              className={index % 2 === 0 ? "" : css.alternateRow}
            >
              <td className={css.td}>{item.type}</td>
              <td className={css.td}>{item.amount}</td>
              <td className={css.td}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;