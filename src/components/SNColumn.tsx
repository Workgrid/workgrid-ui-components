import React from 'react'
import styled, { css } from 'styled-components'
import { CardElement } from '../types/card-element'
import { SNSeparator } from './SNSeparator'
import { useTotalWeight } from './SNColumnSet'

export type SNColumnProps = {
  /**
   * 'auto', 'stretch', or a number representing relative width of the column in the column group
   */
  width?: 'auto' | 'stretch' | number

  /**
   * Children of column
   */
  children: React.ReactNode
} & CardElement

const StyledColumn = styled.div<Required<Pick<SNColumnProps, 'width'>>>`
  ${props => {
    if (props.width === 'auto') {
      return css`
        flex: 0 1 auto;
      `
    } else if (props.width === 'stretch') {
      return css`
        flex: 1 1 50px;
      `
    } else {
      return css`
        flex: 1 1 ${props.width}%;
      `
    }
  }}

  & p {
    margin-top: 0;
    margin-bottom: 0;
  }
`

export const SNColumn = ({ id, children, width = 'auto', separator, spacing }: SNColumnProps): JSX.Element => {
  const totalWeight = useTotalWeight()

  return (
    <StyledColumn
      {...(id ? { id } : undefined)}
      width={typeof width === 'number' ? totalWeight * width : width}
      data-snelement="Column"
    >
      <SNSeparator spacing={spacing} separator={separator} orientation="horizontal">
        {children}
      </SNSeparator>
    </StyledColumn>
  )
}
