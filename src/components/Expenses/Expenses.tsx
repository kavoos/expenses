import React, { FC, useState, useEffect } from 'react'
import { Expense } from '../../models/common'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'

import './Expenses.css'
import ExpensesChart from './ExpensesChart'

interface Props {
  items: Expense[]
}

const Expenses: FC<Props> = (props: Props) => {
  const today = new Date()
  const [expenses, setExpenses] = useState(props.items)
  const [filteredYear, setFilteredYear] = useState(
    today.getFullYear().toString()
  )
  const [filteredExpenses, setFilteredExpenses] = useState(
    expenses.filter(
      (expense) => expense.date.getFullYear() === Number(filteredYear)
    )
  )

  useEffect(() => {
    setExpenses(props.items)
    setFilteredExpenses(
      props.items.filter(
        (expense) => expense.date.getFullYear() === Number(filteredYear)
      )
    )
  }, [filteredYear, props.items])

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredExpenses(
      expenses.filter(
        (expense) => expense.date.getFullYear() === Number(selectedYear)
      )
    )
    setFilteredYear(selectedYear)
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  )
}

export default Expenses
