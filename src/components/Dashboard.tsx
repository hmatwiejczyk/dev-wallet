import * as React from 'react';
import ExpensesList from './ExpensesList';
import ExpenseListFilter from './ExpenseListFilter';
import ExpensesSummary from './ExpensesSummary';

export const Dashboard = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilter />
    <ExpensesList />
  </div>
);

export default Dashboard;
