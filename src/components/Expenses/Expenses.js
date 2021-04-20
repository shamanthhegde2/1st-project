import React, { useState } from 'react'
import './Expenses.css'
import Cards from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList'
import ExpenseChart from './ExpenseChart'

const Expenses = (props) => {
  const [year, setYear] = useState('2021')
  const yearSaveHandler = (chosenYear) => {
    setYear(chosenYear)
  }

  const filteredWithYear = props.items.filter(
    (value) => value.date.toLocaleString('en-US', { year: 'numeric' }) === year,
  )
  console.log(filteredWithYear)

  return (
    <div className="expenses">
      <Cards>
        <ExpenseFilter selected={year} onSaveYear={yearSaveHandler} />
        <ExpenseChart calculation={filteredWithYear} />
        <ExpenseList items={filteredWithYear} />
      </Cards>
    </div>
  )
}

export default Expenses
