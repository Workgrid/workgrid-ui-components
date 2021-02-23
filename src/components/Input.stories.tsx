import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Input, InputProps } from './Input'

export default {
  title: 'Components/Inputs',
  component: Input,
  argTypes: {}
} as Meta

const Template: Story<InputProps> = args => {
  return <Input {...args} />
}

export const WithoutIcon = Template.bind({})

WithoutIcon.args = {
  name: 'Text',
  label: 'Input label',
  placeholder: 'Placeholder Text',
  disabled: false,
  readonly: false,
  required: false,
  clearInput: false
}

export const WithClearInput = Template.bind({})

WithClearInput.args = {
  ...WithoutIcon.args,
  value: 'Clear Input',
  clearInput: true
}

export const WithInvalidInput = Template.bind({})

WithInvalidInput.args = {
  ...WithoutIcon.args,
  value: 'Invalid Input',
  inputInvalid: true,
  inputInvalidText: 'Please enter a valid value'
}
