import React from 'react'
import { Story, Meta } from '@storybook/react'

import { SelectOption } from './SelectOption'
import { Select, SelectProps } from './Select'
import componentDecorators from '../../.storybook/component-decorators'

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    a11y: {
      // Disabling "nested-interactive" rule until there's a fix from Ionic: https://github.com/ionic-team/ionic-framework/issues/23511
      disabledRules: ['nested-interactive']
    }
  },
  decorators: componentDecorators
} as Meta

const Template: Story<SelectProps> = args => (
  <Select {...args}>
    <SelectOption value="option-a" label="Option A" />
    <SelectOption value="option-b" label="Option B" />
    <SelectOption value="option-c" label="Option C" />
  </Select>
)

export const UnselectedSelectOption = Template.bind({})

UnselectedSelectOption.args = {
  name: 'SelectOption',
  label: 'Unselected Option',
  translations: {
    cancelText: 'Cancel',
    okText: 'Select'
  }
}

export const SelectedSelectOption = Template.bind({})

SelectedSelectOption.args = {
  ...UnselectedSelectOption.args,
  label: 'Selected Option',
  value: 'option-b'
}

export const DisabledSelectOption: Story<SelectProps> = args => (
  <Select {...args}>
    <SelectOption value="option-a" label="Option A" disabled />
    <SelectOption value="option-b" label="Option B" />
    <SelectOption value="option-c" label="Option C" />
  </Select>
)

DisabledSelectOption.args = {
  ...UnselectedSelectOption.args,
  label: 'Disabled Option',
  value: 'option-b'
}
