import * as React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpenses';

let editExpense, removeExpense, history, wrapper;
const expense = {
  id: '1',
  description: 'test 1',
  note: 'test 1',
  amount: 1000,
  createdAt: 333
};
beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      expense={expense}
    />
  );
});

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  const editedExpense = {
    description: 'edited',
    note: 'edited'
  };
  wrapper.find('ExpenseForm').prop('onSubmit')(editedExpense as any);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expense.id, editedExpense);
});

test('should handle remove expense', () => {
  // wrapper.find('button').prop('onClick')();
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith(expense);
})

