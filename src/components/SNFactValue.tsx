import React from 'react'
import styled from 'styled-components'

export type SNFactValueProps = {
  /**
   * Text to display
   */
  children: React.ReactNode
}

const StyledTd = styled.td`
  flex: 1;
  padding-top: 0;
  padding-bottom: 0;
`

export const SNFactValue = ({ children }: SNFactValueProps): JSX.Element => {
  return <StyledTd data-snelement="FactValue">{children}</StyledTd>
}
