import * as React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpenses';

let addExpense, history, wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpensePage addExpense={addExpense} history={history} />
  );
});

test('should render AddExpense correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  const expense = {
    id: 1,
    description: 'test 1',
    note: 'test 1',
    amount: 1000,
    createdAt: 333
  };
  wrapper.find('ExpenseForm').prop('onSubmit')(expense as any);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addExpense).toHaveBeenLastCalledWith(expense);
});
