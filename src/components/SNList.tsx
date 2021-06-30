import React from 'react'
import styled from 'styled-components'

export type SNListItemProps = {
  children: React.ReactNode
}

const StyledLi = styled.li`
  & > p {
    margin: 0;
  }
`
export const SNListItem = ({ children }: SNListItemProps): JSX.Element => {
  return <StyledLi>{children}</StyledLi>
}

export type SNListProps = {
  ordered: boolean
  start?: number
  children: React.ReactElement<SNListItemProps>[] | React.ReactElement<SNListItemProps>
}

export const SNList = ({ ordered, start = 1, children }: SNListProps): JSX.Element => {
  if (ordered) {
    return <ol start={start}>{children}</ol>
  }

  return <ul>{children}</ul>
}
