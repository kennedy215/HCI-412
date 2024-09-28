// client/src/App.js
import React, { useEffect, useState } from 'react';
import { getUserFinancials } from './api';

function App() {
  const [financialRecords, setFinancialRecords] = useState([]);
  const userId = 'YOUR_USER_ID'; // Replace with actual user ID

  useEffect(() => {
    const fetchFinancialRecords = async () => {
      try {
        const data = await getUserFinancials(userId);
        setFinancialRecords(data);
      } catch (error) {
        console.error('Error fetching financial records:', error);
      }
    };

    fetchFinancialRecords();
  }, [userId]);

  return (
    <div className="App">
      <h1>Financial Records</h1>
      <ul>
        {financialRecords.map((record, index) => (
          <li key={index}>
            {record.type}: ${record.amount} - {record.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
