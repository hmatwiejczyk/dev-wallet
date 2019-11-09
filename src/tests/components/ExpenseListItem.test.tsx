import * as React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListItem } from '../../components/ExpenseListItem';
import { mockExpenses } from '../mocks/expenses';

test('should render ExpenseListItem', () => {
  const wrapper = shallow(<ExpenseListItem {...mockExpenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
