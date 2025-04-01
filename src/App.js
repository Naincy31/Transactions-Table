import React, { useEffect, useState } from 'react';
import TableComponent from './components/TableComponent';

function App() {
  const [transactionsData, setTransactionsData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/transactions.json`)
      .then((response) => response.json())
      .then((data) => setTransactionsData(data.transactions))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  return (
    <div className="App">
      <TableComponent data={transactionsData} />
    </div>
  );
}

export default App;
