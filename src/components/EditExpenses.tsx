import * as React from 'react';
import { connect } from 'react-redux';
import expensesReducer from '../reducers/expenses';

const EditExpensePage = props => {
  return <div>Edit expense of id: {props.match.params.id}</div>;
};

const mapStateToProps = (state, props) => {
  console.log(props);
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditExpensePage);
