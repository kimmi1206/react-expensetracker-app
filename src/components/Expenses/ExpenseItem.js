import React from 'react';
import './ExpenseItem.css';
// import styles from './ExpenseItem.module.css';
import ExpenseDate from './ExpenseDate';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

const Container = styled.div`
  text-align: center;
`;

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
          <Container>
            <Button>Normal Button</Button>
            <Button primary>Primary Button</Button>
          </Container>
          <div className='expense-item__price'>{this.state.amount}</div>
        </div>
      </div>
    );
  }
}
