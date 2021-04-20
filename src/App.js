import React, { useState } from 'react'

import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const dummyExpense = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]
const App = () => {
  const [expenses, setExpenses] = useState(dummyExpense)
  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => [expense, ...prevState])
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
