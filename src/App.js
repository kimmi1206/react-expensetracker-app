import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Expenses from './components/Expenses/Expenses';
import { ExpensesData } from './utils/ExpensesData';

function App() {
  const [expenses, setExpenses] = useState(ExpensesData);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [...prevExpense, expense];
    });
  };

  // Modern JSX
  return (
    <div className='App'>
      <>
        <h1>Expense Tracker</h1>
        {ReactDOM.createPortal(
          <Expenses items={expenses}></Expenses>,
          document.querySelector('body')
        )}
      </>
    </div>
  );

  // // Alternative Without JSX
  // return React.createElement(
  //   'div',
  //   { className: 'App' },
  //   React.createElement('h2', { className: 'title' }, 'Expense Tracker'),
  //   React.createElement(Expenses, { items: expenses })
  // );
}

export default App;
