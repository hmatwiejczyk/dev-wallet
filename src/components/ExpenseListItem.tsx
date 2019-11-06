import * as React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <h4>Description: {description}</h4>
    <small>
      Amount: {amount} | Created: {createdAt}
      <br />
      <button onClick={() => dispatch(removeExpense({ id }))}>Remove</button>
    </small>
  </div>
);

export default connect()(ExpenseListItem);
