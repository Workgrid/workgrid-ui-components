import React from 'react'
import { SelectOption } from './SelectOption'

export type SNInputChoiceProps = {
  title: string
  value: string
}

export const SNInputChoice = ({ title, value }: SNInputChoiceProps): JSX.Element => {
  return <SelectOption label={title} value={value} />
}
