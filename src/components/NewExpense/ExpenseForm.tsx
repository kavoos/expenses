import React, { FC, ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Expense } from '../../models/common'

import './ExpenseForm.css'

interface Props {
  onSubmitNewExpense(expense: Expense | null): void
}

const ExpenseForm: FC<Props> = (props: Props) => {
  const { onSubmitNewExpense } = props

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState(new Date())

  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const t = event.target.value
    setTitle(t.replace(/\s+/g, ' ').trim())
  }

  const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value))
  }

  const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(new Date(event.target.value))
  }

  const resetUserInput = () => {
    setTitle('')
    setAmount(0)
    setDate(new Date())
  }

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!title || !amount) return

    const expense: Expense = {
      id: uuid(),
      title,
      amount,
      date,
    }

    onSubmitNewExpense(expense)
    resetUserInput()
  }

  const cancelButtonClickHandler = () => {
    onSubmitNewExpense(null)
    resetUserInput()
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="input-title">Title</label>
          <input
            type="text"
            id="input-title"
            value={title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control new-expense__control-with-prefix">
          <label htmlFor="input-amount">Amount</label>
          <input
            type="number"
            id="input-amount"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
          <i>€</i>
        </div>
        <div className="new-expense__control">
          <label htmlFor="input-date">Date</label>
          <input
            type="date"
            id="input-date"
            min="2019-01-01"
            max="2022-12-31"
            value={date.toISOString().substr(0, 10)}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={cancelButtonClickHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
