import * as React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import { mockExpenses } from '../mocks/expenses';
jest.mock('moment');

// test.only('should render ExpenseForm', () => {
//   const wrapper = shallow(<ExpenseForm />);
//   expect(wrapper).toMatchSnapshot();
// });

// test('should render ExpenseForm with expense data', () => {
//   const expense = {
//     id: 1,
//     description: 'test 1',
//     note: 'test 1',
//     amount: 1000,
//     createdAt: 333
//   };
//   const wrapper = shallow(<ExpenseForm expense={expense} />);
//   expect(wrapper).toMatchSnapshot();
// });

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('form').simulate('submit', { preventDefault: () => {} });
  expect(wrapper.state('errors')).toEqual({
    descriptionError: 'This field is required',
    amountError: 'This field is required'
  });
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'New description';
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find('input')
    .at(0)
    .simulate('change', {
      target: { value }
    });
  expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
  const value = 'New note';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target: { value },
    persist: () => {}
  });
  expect(wrapper.state('note')).toBe(value);
});

test('should set amount if input valid', () => {
  const value = '25.25';
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: { value }
    });
  expect(wrapper.state('amount')).toBe(value);
});
test('should not set amount if invalid input', () => {
  const value = '25.253333';
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: { value }
    });
  expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const expense = {
    id: 1,
    description: 'test 1',
    note: 'test 1',
    amount: 1000,
    createdAt: 434343
  };
  const wrapper = shallow(
    <ExpenseForm expense={expense} onSubmit={onSubmitSpy} />
  );
  wrapper.find('form').simulate('submit', { preventDefault: () => {} });
  expect(wrapper.state('errors')).toEqual({
    amountError: '',
    descriptionError: ''
  });
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expense.description,
    note: expense.note,
    amount: expense.amount,
    createdAt: 0
  });
});

// test('should set new on date change', () => {
//   const wrapper = shallow(<ExpenseForm />);
//   wrapper.find('.ni').prop('onDateChange')(4343);
// })

