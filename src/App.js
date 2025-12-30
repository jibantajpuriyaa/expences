import React, { useState, useEffect } from 'react';
import { database } from './Firebase.js';
import { ref, onValue } from 'firebase/database';
import ExpenseList from './ExpenseList';
import './App.css'; // Import the CSS

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const expensesRef = ref(database, 'expenses');
    onValue(expensesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const expenseList = Object.keys(data).map(key => ({ id: key, ...data[key] }));
        setExpenses(expenseList);
      } else {
        setExpenses([]);
      }
    });
  }, []);

  return (
    <div className="container">
     <header>Expences App</header>
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;