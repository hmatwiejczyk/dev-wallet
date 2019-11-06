import * as React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

const ExpensesList = props => (
  <div>
    <h2>Expense List</h2>
    <div>
      {props.expenses.map((e, i) => (
        <ExpenseListItem key={e.id} {...e} />
      ))}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpensesList);
