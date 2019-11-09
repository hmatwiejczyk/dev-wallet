import expensesReducer from '../../reducers/expenses';
import { mockExpenses } from '../mocks/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const state = expensesReducer(mockExpenses, {
    type: 'REMOVE_EXPENSE',
    id: mockExpenses[0].id
  });
  expect(state).toEqual([mockExpenses[1], mockExpenses[2]]);
});

test('should not remove expense when id not found', () => {
  const state = expensesReducer(mockExpenses, {
    type: 'REMOVE_EXPENSE',
    id: 323
  });
  expect(state).toEqual([mockExpenses[0], mockExpenses[1], mockExpenses[2]]);
});

test('should add an expense', () => {
  const newExpense = {
    id: 66,
    description: 'he'
  };
  const state = expensesReducer(mockExpenses, {
    type: 'ADD_EXPENSE',
    expense: newExpense
  });
  expect(state).toEqual([...mockExpenses, newExpense]);
});

test('should edit an expense', () => {
  const amount = 1233;
  const state = expensesReducer(mockExpenses, {
    type: 'EDIT_EXPENSE',
    id: mockExpenses[1].id,
    updates: {
      amount
    }
  });
  expect(state[1].amount).toBe(amount);
});

test('should not edit an expense when id not found', () => {
  const amount = 1233;
  const state = expensesReducer(mockExpenses, {
    type: 'EDIT_EXPENSE',
    id: '',
    updates: {
      amount
    }
  });
  expect(state[1].amount).not.toBe(amount);
});
