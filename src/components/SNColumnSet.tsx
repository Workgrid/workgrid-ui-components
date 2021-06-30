import React, { useContext, createContext } from 'react'
import styled from 'styled-components'
import { SNColumnProps } from './SNColumn'
import { CardElement } from '../types/card-element'
import { SNSeparator } from './SNSeparator'

export const SNColumnSetContext = createContext<number>(100)

export type SNColumnSetProps = {
  /**
   * Children of column
   */
  children: React.ReactElement<SNColumnProps>[] | React.ReactElement<SNColumnProps>
} & CardElement

const StyledColumnSet = styled.div`
  display: flex;
`

export const SNColumnSet = ({ children, spacing, separator, id }: SNColumnSetProps): JSX.Element => {
  const totalWeight = React.Children.map(children, child => {
    return typeof child.props.width === 'number' ? child.props.width : 0
  }).reduce((acc, val) => (acc = acc + val), 0)

  const normalizedTotalWeight = totalWeight > 0 ? 100 / totalWeight : 100

  return (
    <SNColumnSetContext.Provider value={normalizedTotalWeight}>
      <SNSeparator spacing={spacing} separator={separator}>
        <StyledColumnSet {...(id ? { id } : undefined)} data-snelement="ColumnSet">
          {children}
        </StyledColumnSet>
      </SNSeparator>
    </SNColumnSetContext.Provider>
  )
}

export const useTotalWeight = (): number => {
  const context = useContext(SNColumnSetContext)

  if (context === undefined) {
    throw new Error('useTotalWeight must be used inside a SNColumnSetProvider')
  }

  return context
}
