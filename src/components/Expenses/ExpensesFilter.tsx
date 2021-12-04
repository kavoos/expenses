import React, { FC, ChangeEvent } from 'react'

import './ExpensesFilter.css'

interface Props {
  selected: string
  onChangeFilter(selectedYear: string): void
}

const ExpensesFilter: FC<Props> = (props: Props) => {
  const { selected, onChangeFilter } = props

  const filterChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChangeFilter(event.target.value)
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="select-filter">Filter by year</label>
        <select
          id="select-filter"
          value={selected}
          onChange={filterChangeHandler}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  )
}

export default ExpensesFilter
