import React, { FC, ReactNode } from 'react'

import './Card.css'

interface Props {
  children: ReactNode
  className?: string
}

const Card: FC<Props> = (props: Props) => {
  const { children, className } = props

  const classNames = `${className ? `${className} ` : ''} card`

  return <div className={classNames}>{children}</div>
}

export default Card
