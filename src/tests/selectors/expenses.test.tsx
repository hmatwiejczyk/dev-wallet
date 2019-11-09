import getVisibleExpenses from '../../selectors/expenses';
import * as moment from 'moment';
import { mockExpenses } from "../mocks/expenses";

test('should filter by text value', () => {
  const filters = {
    text: 'test 1',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const sortedByText = getVisibleExpenses(mockExpenses, filters);
  expect(sortedByText).toEqual([mockExpenses[0]]);
});

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };
  const filteredByStartDate = getVisibleExpenses(mockExpenses, filters);
  expect(filteredByStartDate).toEqual([mockExpenses[2], mockExpenses[0]]);
});

test('should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days')
  };
  const filteredByEndDate = getVisibleExpenses(mockExpenses, filters);
  expect(filteredByEndDate).toEqual([mockExpenses[0], mockExpenses[1]]);
});

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const sortedByDate = getVisibleExpenses(mockExpenses, filters);
  expect(sortedByDate).toEqual([
    mockExpenses[2],
    mockExpenses[0],
    mockExpenses[1]
  ]);
});

test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const sortedByAmount = getVisibleExpenses(mockExpenses, filters);
  expect(sortedByAmount).toEqual([
    mockExpenses[2],
    mockExpenses[1],
    mockExpenses[0]
  ]);
});
