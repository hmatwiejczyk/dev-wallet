import * as React from 'react';
import { shallow } from 'enzyme';
import { ExpensesList } from '../../components/ExpensesList';
import { mockExpenses } from '../mocks/expenses';

test('should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpensesList expenses={mockExpenses} />);
  expect(wrapper).toMatchSnapshot();
});
test('should render empty message when no data provided', () => {
  const wrapper = shallow(<ExpensesList expenses={[]}/>);
  expect(wrapper).toMatchSnapshot();
});
