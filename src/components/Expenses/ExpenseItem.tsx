import React, { FC } from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'

import './ExpenseItem.css'

interface Props {
  title: string
  amount: number
  date: Date
}

const ExpenseItem: FC<Props> = (props: Props) => {
  const { title, amount, date } = props

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">€ {amount.toFixed(2)}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem
