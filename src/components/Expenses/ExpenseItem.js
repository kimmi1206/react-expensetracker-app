import React from 'react';
import './ExpenseItem.css';
// import styles from './ExpenseItem.module.css';
import ExpenseDate from './ExpenseDate';

// Class based components require more code, it's recommended react hooks useState
export default class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: props.date,
      title: props.title,
      amount: props.amount,
    };
  }

  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    // (() =>
    //   console.log(
    //     this.state.date.toLocaleString(),
    //     this.state.title,
    //     this.state.amount
    //   ))(); // immediately invoke arrow function
    return (
      <div className='expense-item'>
        <ExpenseDate date={this.state.date} />
        <div className='expense-item__description'>
          <h2>{this.state.title}</h2>
          <div className='expense-item__price'>{this.state.amount}</div>
        </div>
      </div>
    );
  }
}
