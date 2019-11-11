import getTotalExpenses from '../../selectors/expenses-total';

test('should return 0 if no expenses', () => {
  const res = getTotalExpenses([]);
  expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {
  const res = getTotalExpenses([{ amount: 333 }]);
  expect(res).toBe(333);
});


test('should correctly add up a single expense', () => {
  const res = getTotalExpenses([{ amount: 333 }, {amount: 111}]);
  expect(res).toBe(444);
});
