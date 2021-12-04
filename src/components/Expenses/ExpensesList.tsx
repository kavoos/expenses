import React, { FC, useState, useEffect } from 'react'
import { Expense } from '../../models/common'
import ExpenseItem from './ExpenseItem'

import './ExpensesList.css'

interface Props {
  expenses: Expense[]
}

const ExpensesList: FC<Props> = (props: Props) => {
  const [expenses, setExpenses] = useState(props.expenses)

  useEffect(() => {
    setExpenses(props.expenses)
  }, [props.expenses])

  if (expenses.length === 0)
    return <h2 className="expenses-list__fallback">No expenses found!</h2>

  return (
    <>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </>
  )
}

export default ExpensesList
