import * as React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import { mockExpenses } from "../mocks/expenses";
jest.mock('moment');

test.only('should render ExpenseForm', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data', () => {
  const expense = {
    id: 1,
    description: 'test 1',
    note: 'test 1',
    amount: 1000,
    createdAt: 333
  };
  const wrapper = shallow(<ExpenseForm expense={expense}/>)
  expect(wrapper).toMatchSnapshot();
})
