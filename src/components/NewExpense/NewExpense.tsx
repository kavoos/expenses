import React, { FC, useState } from 'react'
import { Expense } from '../../models/common'
import ExpenseForm from './ExpenseForm'

import './NewExpense.css'

interface Props {
  onSubmitNewExpense(expense: Expense): void
}

const NewExpense: FC<Props> = (props: Props) => {
  const [visible, setVisible] = useState(false)

  const onSubmitNewExpense = (expense: Expense | null) => {
    if (expense) props.onSubmitNewExpense(expense)
    setVisible(false)
  }

  const addNewExpenseButtonHandler = () => {
    setVisible(true)
  }

  const renderAddNewExpense = () => {
    if (visible) return <ExpenseForm onSubmitNewExpense={onSubmitNewExpense} />
    return (
      <div className="add-new-expense__actions">
        <button type="button" onClick={addNewExpenseButtonHandler}>
          Add New Expense
        </button>
      </div>
    )
  }

  return <div className="new-expense">{renderAddNewExpense()}</div>
}

export default NewExpense
