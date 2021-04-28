import React from 'react'
import { CardElement } from '../types/card-element'
import { SNSeparator } from './SNSeparator'

export type SNContainerProps = {
  /**
   * Children of Container
   */
  children: React.ReactNode
} & CardElement

export const SNContainer = ({ id, children, separator, spacing }: SNContainerProps): JSX.Element => {
  return (
    <SNSeparator spacing={spacing} separator={separator} data-snelement="Container" {...(id ? { id } : undefined)}>
      {children}
    </SNSeparator>
  )
}
