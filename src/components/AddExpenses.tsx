import * as React from 'react';
import ExpenseForm from './ExpenseForm';

export const AddExpensePage = () => (
  <div>
    <h2>Add Expenses</h2>
    <ExpenseForm onSubmit={(expense) => {
      console.log(expense);
    }} />
  </div>
);
