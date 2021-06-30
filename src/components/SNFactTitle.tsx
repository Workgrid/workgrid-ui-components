import React from 'react'
import styled from 'styled-components'

export type SNFactTitleProps = {
  /**
   * Text to display
   */
  children: React.ReactNode
}

const StyledTd = styled.td`
  flex: 0;
  padding-inline-end: var(--ion-padding);
  padding-top: 0;
  padding-bottom: 0;

  & p {
    font-weight: 300;
  }
`

export const SNFactTitle = ({ children }: SNFactTitleProps): JSX.Element => {
  return <StyledTd data-snelement="FactTitle">{children}</StyledTd>
}
