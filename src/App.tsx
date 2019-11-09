import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { AppRouter } from './routes/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';

import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 1000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 2000, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 40000 }));

const state = store.getState();
const visible = getVisibleExpenses(state.expenses, state.filters);
console.log(visible);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
