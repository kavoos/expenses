import React, { FC } from 'react'

import './ExpenseDate.css'

interface Props {
  date: Date
}

const ExpenseDate: FC<Props> = (props: Props) => {
  const { date } = props

  const year = date.getFullYear()
  const month = date.toLocaleString('en-US', { month: 'long' })
  const day = date.toLocaleString('en-US', { day: '2-digit' })

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date_year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  )
}

export default ExpenseDate
