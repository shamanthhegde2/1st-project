import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
  const [enterTitle, setEnterTitle] = useState('')
  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value)
  }
  const [enterAmount, setEnterAmount] = useState('')
  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value)
  }
  const [enterDate, setEnterDate] = useState('')
  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value)
  }
  const formSubmitHandler = (event) => {
    event.preventDefault()
    const expenseData = {
      title: enterTitle,
      amount: +enterAmount,
      date: new Date(enterDate),
    }
    props.onSaveExpenseData(expenseData)
    setEnterTitle('')
    setEnterAmount('')
    setEnterDate('')
    props.changeShow()
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min={1}
            step={1}
            value={enterAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-12-31"
            value={enterDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.changeShow}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
