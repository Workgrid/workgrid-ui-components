import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Input, InputProps } from './Input'
import componentDecorators from '../../.storybook/component-decorators'

export default {
  title: 'Components/Inputs',
  component: Input,
  decorators: componentDecorators,
  argTypes: {}
} as Meta

const Template: Story<InputProps> = args => {
  return <Input {...args} />
}

export const WithoutIcon = Template.bind({})

WithoutIcon.args = {
  id: 'input-1',
  name: 'Text',
  label: 'Input label',
  placeholder: 'Placeholder Text',
  disabled: false
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
  invalidText: 'Please enter a valid value'
}
