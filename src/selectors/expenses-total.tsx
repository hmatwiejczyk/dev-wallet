const getTotalExpenses = expenses => {
  if (expenses.length === 0) {
    return 0;
  } else {
    return expenses.map(e => e.amount).reduce((sum, val) => sum + val, 0);
  }
};

export default getTotalExpenses;
