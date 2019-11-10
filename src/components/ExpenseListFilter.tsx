import * as React from 'react';
import { connect } from 'react-redux';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../actions/filters';
import { DateRangePicker } from 'react-dates';
interface IFilterProps {
  filters;
  dispatch;
  setTextFilter?;
  setStartDate?;
  setEndDate?;
  sortByDate?;
  sortByAmount?;
}
interface IFilterState {
  startDate?;
  endDate?;
  focusedInput?;
  calendarFocused?;
}
export class ExpenseListFilter extends React.Component<IFilterProps, IFilterState> {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={e => {
            this.props.setTextFilter(e.target.value);
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            if (e.target.value === 'date') {
              this.props.sortByDate();
            } else if (e.target.value === 'amount') {
              this.props.sortByAmount();
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="your_unique_start_date_id"
          endDate={this.props.filters.endDate}
          endDateId="your_unique_end_date_id"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          displayFormat={'DD/MM/YY'}
          isOutsideRange={() => false}
          showClearDates
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setStartDate: startDate => dispatch(setStartDate(startDate)),
    setEndDate: endDate => dispatch(setEndDate(endDate)),
    setTextFilter: text => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter);
