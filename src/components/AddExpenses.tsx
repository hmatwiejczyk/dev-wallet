import * as React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

export const AddExpensePage = props => (
  <div>
    <h2>Add Expenses</h2>
    <ExpenseForm
      onSubmit={expense => {
        // props.dispatch(addExpense(expense));
        props.onSubmit(expense);
        props.history.push('/');
      }}
    />
  </div>
);

const mapDispatchToProps = dispatch => ({
  onSubmit: expense => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
