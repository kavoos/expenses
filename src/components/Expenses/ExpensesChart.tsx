import React, { FC, useState, useEffect } from 'react'
import { DataPoint, Expense } from '../../models/common'
import Chart from '../Chart/Chart'

interface Props {
  expenses: Expense[]
}

const ExpensesChart: FC<Props> = (props: Props) => {
  const [expenses, setExpenses] = useState(props.expenses)

  useEffect(() => {
    setExpenses(props.expenses)
  }, [props.expenses])

  const dataPoints: DataPoint[] = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ]

  expenses.forEach((expense) => {
    const month = expense.date.getMonth()
    dataPoints[month].value += expense.amount
  })

  return <Chart dataPoints={dataPoints} />
}

export default ExpensesChart
