import React, { useState, useMemo } from 'react';
import './TableComponent.css';

const TableComponent = ({ data }) => {
  const [hoveredDate, setHoveredDate] = useState(null);

  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const groupedData = useMemo(() => {
    return data.reduce((acc, row) => {
      const date = row.date;
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(row);
      return acc;
    }, {});
  }, [data]);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Date (UTC)</th>
            <th>To/From</th>
            <th>Amount</th>
            <th>Account</th>
            <th>Payment Method</th>
            <th>Attachment</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(groupedData).map(([date, rows]) =>
            rows.map((row, index) => (
              <tr
                key={row.id}
                onMouseEnter={() => setHoveredDate(row.id)}
                onMouseLeave={() => setHoveredDate(null)}
              >
                <td className="date-cell">
                  {index === 0 || hoveredDate === row.id ? (
                    formatDate(date)
                  ) : (
                    <span className="empty-date"></span>
                  )}
                </td>
                <td className="name-cell">{row.name}</td>
                <td className={row.amount.includes('-') ? 'negative-amount' : 'positive-amount'}>
                  {row.amount}
                </td>
                <td>{row.account}</td>
                <td className="payment-method">{row.paymentMethod}</td>
                <td className='attachment-cell'>
                  <button className="attachment">+</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;