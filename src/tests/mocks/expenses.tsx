import * as moment from 'moment';

export const mockExpenses = [
  {
    id: 1,
    description: 'test 1',
    note: 'test 1',
    amount: 1000,
    createdAt: 333
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
