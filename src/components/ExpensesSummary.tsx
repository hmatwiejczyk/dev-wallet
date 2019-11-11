import * as React from 'react';
import { connect } from 'react-redux';
import getTotalExpenses from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';

export const ExpensesSummary = props => {
  const expenseWord = props.expensesCount === 1 ? 'expense' : 'expenses';
  return (
    <div>
      Viewing {props.expensesCount} {expenseWord} totalling {props.totalExpenses}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    totalExpenses: getTotalExpenses(
      getVisibleExpenses(state.expenses, state.filters)
    ),
    expensesCount: state.expenses.length
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
