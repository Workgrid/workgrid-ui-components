import React from 'react'
import styled from 'styled-components'

export type SNInputWrapperProps = {
  children: React.ReactNode
}

const StyledDiv = styled.div`
  max-width: 400px;
`

export const SNInputWrapper = ({ children }: SNInputWrapperProps): JSX.Element => {
  return <StyledDiv>{children}</StyledDiv>
}
