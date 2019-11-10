import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { ExpenseListFilter } from '../../components/ExpenseListFilter';
import { filters, altFilters } from '../mocks/filters';
import moment = require('moment');
import { DateRangePicker } from 'react-dates';

let setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  wrapper = shallow(
    <ExpenseListFilter
      filters={filters}
      setTextFilter={setTextFilter}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
    />
  );
});

test('should render ExpenseListFilter correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilter with altData correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  // wrapper.find('input').at(0).prop('onChange')({target: { value: 'rent'}});
  wrapper
    .find('input')
    .at(0)
    .simulate('change', {
      target: { value: 'rent' }
    });
  expect(setTextFilter).toHaveBeenLastCalledWith('rent');
});

test('should sort by date', () => {
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find('select').simulate('change', {
    target: { value: 'date'}
  });
  expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
  wrapper.find('select').simulate('change', {
    target: {value: 'amount'}
  });
  expect(sortByAmount).toHaveBeenCalled();
});

// test('should handle date changes', () => {
//   const startDate = moment(0).add(4, 'years');
//   const endDate = moment(0).add(8, 'years');
// })



