import * as React from 'react';
import ExpensesList from './ExpensesList';
import ExpenseListFilter from './ExpenseListFilter';

export const Dashboard = () => (
  <div>
    <ExpenseListFilter />
    <ExpensesList />
  </div>
);
