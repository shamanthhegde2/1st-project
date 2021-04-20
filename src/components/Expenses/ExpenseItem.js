import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Cards from '../UI/Card'
const ExpenseItem = (props) => {
  return (
    <Cards className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}rs</div>
      </div>
    </Cards>
  )
}

export default ExpenseItem
