import getVisibleExpenses from '../../selectors/expenses';
import * as moment from 'moment';

const mockExpenses = [
  {
    id: 1,
    description: 'test 1',
    note: 'test 1',
    amount: 1000,
    createdAt: 0
  },
  {
    id: 2,
    description: 'test 2',
    note: 'test 2',
    amount: 2000,
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf()
  },
  {
    id: 3,
    description: 'test 3',
    note: 'test 3',
    amount: 3000,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf()
  }
];

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
