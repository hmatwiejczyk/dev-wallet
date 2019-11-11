import * as React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link, withRouter } from 'react-router-dom';
import * as moment from 'moment';

export const ExpenseListItem = (props: any) => (
  <div>
    <Link to={`/edit/${props.id}`}>
      <h4>Description: {props.description}</h4>
    </Link>
    <small>
      Amount: {props.amount} | Created: {moment(props.createdAt).format('DD/MM/YYYY')}
      <br />
      <button onClick={() => props.dispatch(removeExpense({ id: props.id }))}>
        Remove
      </button>
      <button onClick={() => props.history.push(`/edit/${props.id}`)}>
        Edit
      </button>
    </small>
  </div>
);

export default connect()(withRouter(ExpenseListItem));
