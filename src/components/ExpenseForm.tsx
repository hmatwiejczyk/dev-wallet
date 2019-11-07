import * as React from 'react';
import * as moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends React.Component<
  { onSubmit?; expense? },
  {
    description: string;
    amount: string;
    note: string;
    createdAt: any;
    calendarFocused: boolean;
    errors: { descriptionError; amountError };
  }
> {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? props.expense.amount.toString() : '',
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      errors: {
        descriptionError: '',
        amountError: ''
      }
    };
  }
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onNoteChange = e => {
    e.persist();
    this.setState(() => ({ note: e.target.value }));
  };
  onDateChange = createdAt => {
    if (createdAt) this.setState(() => ({ createdAt }));
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      let descriptionError = '';
      let amountError = '';
      if (!this.state.description) {
        descriptionError = 'This field is required';
      }
      if (!this.state.amount) {
        amountError = 'This field is required';
      }
      this.setState(() => ({ errors: { descriptionError, amountError } }));
    } else {
      this.setState(() => ({
        errors: { amountError: '', descriptionError: '' }
      }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          {this.state.errors.descriptionError && (
            <small>{this.state.errors.descriptionError}</small>
          )}
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          {this.state.errors.amountError && (
            <small>{this.state.errors.amountError}</small>
          )}
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            displayFormat={'DD/MM/YY'}
            isOutsideRange={() => false}
          />
          <textarea
            cols={30}
            rows={10}
            placeholder="Add more for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>

          <button type="submit">Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
