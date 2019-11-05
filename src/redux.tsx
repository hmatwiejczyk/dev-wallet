import { createStore, combineReducers } from 'redux';
import * as uuid from 'uuid';

const demoState = {
  expenses: [
    {
      id: '1',
      description: 'January rent',
      note: 'This was the final payment for that address',
      amount: '3432',
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};

// action expenses generators
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
});
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // return state.concat(action.expense);
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(e => e.id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map(e => {
        if (e.id === action.id) {
          return {
            ...e,
            ...action.updates
          };
        } else {
          return e;
        }
      });
    default:
      return state;
  }
};

// actions filters generators
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});
const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
});
const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate
});
// filters reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate };
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

// get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter(e => {
    const startDateMatch =
      typeof startDate !== 'number' || e.createdAt >= startDate;
    const endDateMatch =
      typeof startDate !== 'number' || e.createdAt <= startDate;
    const textMatch = true;

    return startDateMatch && endDateMatch && textMatch;
  });
};

// store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});
const rent = store.dispatch(
  addExpense({ description: 'rent', amount: 100, createdAt: 1000 })
);
const coffee = store.dispatch(
  addExpense({ description: 'coffee', amount: 300, createdAt: -1000 })
);

// store.dispatch(removeExpense({ id: rent.expense.id }));
// store.dispatch(editExpense(coffee.expense.id, { amount: 500 }));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(12500));
// store.dispatch(setEndDate());
// store.dispatch(setEndDate(3333));
