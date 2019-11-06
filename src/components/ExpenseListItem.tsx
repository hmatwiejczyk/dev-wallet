import * as React from 'react';

const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <h4>Description: {description}</h4>
    <small>
      Amount: {amount} | Created: {createdAt}
    </small>
  </div>
);

export default ExpenseListItem;
