import * as React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}><h4>Description: {description}</h4></Link>
    <small>
      Amount: {amount} | Created: {createdAt}
      <br />
      <button onClick={() => dispatch(removeExpense({ id }))}>Remove</button>
    </small>
  </div>
);

export default connect()(ExpenseListItem);
