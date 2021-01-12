import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Radio } from './Radio'
import { RadioGroup, RadioGroupProps } from './RadioGroup'

export default {
  title: 'Components/Radio Groups',
  component: RadioGroup
} as Meta

const Template: Story<RadioGroupProps> = args => (
  <RadioGroup {...args}>
    <Radio name={args.name} value={'option-a'} label={'Option A'} />
    <Radio name={args.name} value={'option-b'} label={'Option B'} />
    <Radio name={args.name} value={'option-c'} label={'Option C'} />
  </RadioGroup>
)

export const UnselectedRadio = Template.bind({})

UnselectedRadio.args = {
  name: 'radio',
  label: 'Unselected Radio'
}

export const SelectedRadio = Template.bind({})

SelectedRadio.args = {
  ...UnselectedRadio.args,
  label: 'Selected Radio',
  value: 'option-b'
}

export const ErrorRadio: Story<RadioGroupProps> = args => (
  <RadioGroup {...args}>
    <Radio name={args.name} value={'option-a'} label={'Option A'} />
    <Radio name={args.name} value={'option-b'} label={'Option B'} color={'danger'} />
    <Radio name={args.name} value={'option-c'} label={'Option C'} />
  </RadioGroup>
)

ErrorRadio.args = {
  ...UnselectedRadio.args,
  label: 'Error Radio',
  value: 'option-b'
}

export const DisabledRadio: Story<RadioGroupProps> = args => (
  <RadioGroup {...args}>
    <Radio name={args.name} value={'option-a'} label={'Option A'} disabled />
    <Radio name={args.name} value={'option-b'} label={'Option B'} />
    <Radio name={args.name} value={'option-c'} label={'Option C'} />
  </RadioGroup>
)

DisabledRadio.args = {
  ...UnselectedRadio.args,
  label: 'Disabled Radio',
  value: 'option-b'
}
