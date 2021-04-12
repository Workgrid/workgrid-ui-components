import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Textarea, TextareaProps } from './Textarea'
import componentDecorators from '../../.storybook/component-decorators'

export default {
  title: 'Components/Textareas',
  component: Textarea,
  decorators: componentDecorators,
  argTypes: {}
} as Meta

const Template: Story<TextareaProps> = args => {
  return <Textarea {...args} />
}

export const WithPlaceholder = Template.bind({})

WithPlaceholder.args = {
  name: 'Text',
  label: 'Textarea label',
  placeholder: 'Placeholder Text',
  disabled: false
}

export const WithInvalidTextarea = Template.bind({})

WithInvalidTextarea.args = {
  ...WithPlaceholder.args,
  value: 'Invalid Textarea',
  invalidText: 'Please enter a valid value'
}
