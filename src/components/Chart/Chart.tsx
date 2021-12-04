import React, { FC } from 'react'
import { DataPoint } from '../../models/common'
import ChartBar from './ChartBar'

import './Chart.css'

interface Props {
  dataPoints: DataPoint[]
}

const Chart: FC<Props> = (props: Props) => {
  const { dataPoints } = props

  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value)
  const maxValue = Math.max(...dataPointValues)

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={maxValue}
        />
      ))}
    </div>
  )
}

export default Chart
