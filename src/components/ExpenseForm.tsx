import * as React from 'react';

class ExpenseForm extends React.Component {
  state = {
    description: '',
    amount: '',
    note: ''
  };
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onAmountChange = e => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onNoteChange = e => {
    e.persist();
    this.setState(() => ({ note: e.target.value }));
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
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
