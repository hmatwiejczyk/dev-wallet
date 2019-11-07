import * as React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link, withRouter } from 'react-router-dom';

const ExpenseListItem = withRouter((props: any) => (
  <div>
    <Link to={`/edit/${props.id}`}>
      <h4>Description: {props.description}</h4>
    </Link>
    <small>
      Amount: {props.amount} | Created: {props.createdAt}
      <br />
      <button onClick={() => props.dispatch(removeExpense({ id: props.id }))}>
        Remove
      </button>
      <button onClick={() => props.history.push(`/edit/${props.id}`)}>
        Edit
      </button>
    </small>
  </div>
));

export default connect()(ExpenseListItem);
