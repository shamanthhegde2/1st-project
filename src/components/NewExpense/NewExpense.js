import React, { useState } from 'react'
import './NewExpense.css'

import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
  const [editting, setEditting] = useState(false)
  const saveExpenseDataHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random(),
    }
    props.onAddExpense(expenseData)
  }
  const showExpenseForm = () => {
    setEditting((prevState) => !prevState)
  }
  return (
    <div className="new-expense">
      {!editting && <button onClick={showExpenseForm}> Add New Expense</button>}
      {editting && (
        <ExpenseForm
          changeShow={showExpenseForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  )
}

export default NewExpense
