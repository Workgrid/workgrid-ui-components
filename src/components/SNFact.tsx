import React from 'react'
import styled from 'styled-components'
import { SNFactTitleProps } from './SNFactTitle'
import { SNFactValueProps } from './SNFactValue'

export type SNFactProps = {
  /**
   * Fact to display
   */
  children: [React.ReactElement<SNFactTitleProps>, React.ReactElement<SNFactValueProps>]
}

const StyledTr = styled.tr`
  vertical-align: top;

  & p {
    margin-top: calc(var(--ion-padding) * 0.75);
    margin-bottom: 0;
  }
`

export const SNFact = ({ children }: SNFactProps): JSX.Element => {
  return <StyledTr data-snelement="Fact">{children}</StyledTr>
}
