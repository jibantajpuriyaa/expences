import React from 'react';


import './App.css'

function ExpenseList({ expenses }) {
  

let total = 0;

expenses.forEach(item => {
  total += Number(item.amount);
  
});
const formatted = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
console.log(total);
  return (
    <div>
      <h2 className='h22'>Expenses</h2>
      {expenses.length === 0 ? (
       <div className="center">  <div className="loader"></div></div>
      
      ) : (
        <table className='mainTable'>
          <thead>
            <tr>
              <th>Items</th>
              <th>Date</th>
               <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.category}</td>
               <td>{expense.description}</td>
                  <td>₹{expense.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
              </tr>
            ))}
            <tr >
                <td></td>
                 <td></td>
                  <td></td>
              </tr>
            <tr className='roee' >
                <td> Total</td>
                <td>   </td>
                  <td>₹{ formatted}</td>
              </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ExpenseList;