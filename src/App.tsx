import React, { FC, useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import { Expense } from './models/common'

const App: FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([])

  const onSubmitNewExpense = (expense: Expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense])
  }

  return (
    <div>
      <NewExpense onSubmitNewExpense={onSubmitNewExpense} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
