import React, { FC } from 'react'

import './ChartBar.css'

interface Props {
  value: number
  label: string
  maxValue: number
}

const ChartBar: FC<Props> = (props: Props) => {
  const { value, label, maxValue } = props

  let height = '0%'
  if (maxValue > 0) height = `${Math.round((value / maxValue) * 100)}%`

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height }} />
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  )
}

export default ChartBar
