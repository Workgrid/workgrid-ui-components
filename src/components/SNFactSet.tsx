import React from 'react'
import { SNFactProps } from './SNFact'
import { SNSeparator } from './SNSeparator'
import { CardElement } from '../types/card-element'

export type SNFactSetProps = {
  /**
   * FactSet to display
   */
  children: React.ReactElement<SNFactProps>[] | React.ReactElement<SNFactProps>
} & CardElement

export const SNFactSet = ({ children, id, separator, spacing }: SNFactSetProps): JSX.Element => {
  return (
    <SNSeparator separator={separator} spacing={spacing}>
      <table {...(id ? { id } : undefined)} data-snelement="FactSet">
        <tbody>{children}</tbody>
      </table>
    </SNSeparator>
  )
}
