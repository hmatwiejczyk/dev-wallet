import filterReducer from '../../reducers/filters';
import * as moment from 'moment';

const defaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

test('should setup default filter values', () => {
  const state = filterReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual(defaultState);
});

test('should set sortBy to amount', () => {
  const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const state = filterReducer(
    { ...defaultState, sortBy: 'amount' },
    { type: 'SORT_BY_DATE' }
  );
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const state = filterReducer(
    { ...defaultState },
    { type: 'SET_TEXT_FILTER', text: 'test' }
  );
  expect(state.text).toBe('test');
});

test('should set startDate filter', () => {
  const start = moment();
  const state = filterReducer(
    { ...defaultState },
    { type: 'SET_START_DATE', startDate: start }
  );
  expect(state.startDate).toEqual(start);
});

test('should set endDate filter', () => {
  const end = moment();
  const state = filterReducer(
    { ...defaultState },
    { type: 'SET_END_DATE', endDate: end }
  );
  expect(state.endDate).toEqual(end);
});
