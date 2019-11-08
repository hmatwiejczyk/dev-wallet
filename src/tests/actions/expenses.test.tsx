import { removeExpense, editExpense, addExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123', { note: 'some updates' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: { note: 'some updates' }
  });
});

test('should setup add expense action object with provided values', () => {
  const testAction = {
    description: 'test 1',
    note: 'test 2',
    amount: 666,
    createdAt: 0
  };
  const action = addExpense(testAction);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...testAction,
      id: expect.any(String)
    }
  });
});

test('should setup add expense action object with default values', () => {
  const action = addExpense({});
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});
