import * as React from 'react';
import { connect } from 'react-redux';

const ExpensesList = props => (
  <div>
    <h2>Expense List</h2>
    <div>
      {props.expenses.map((e, i) => (
        <p key={i}>{e.description}</p>
      ))}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  };
};

export default connect(mapStateToProps)(ExpensesList);
