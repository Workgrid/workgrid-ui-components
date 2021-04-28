import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Toggle, ToggleProps } from './Toggle'
import componentDecorators from '../../.storybook/component-decorators'

export default {
  title: 'Components/Toggles',
  component: Toggle,
  parameters: {
    a11y: {
      // Disabling "nested-interactive" rule until there's a fix from Ionic: https://github.com/ionic-team/ionic-framework/issues/23511
      disabledRules: ['nested-interactive']
    }
  },
  decorators: componentDecorators,
  argTypes: {}
} as Meta

const Template: Story<ToggleProps> = args => {
  return <Toggle {...args} />
}

export const DefaultToggle = Template.bind({})

DefaultToggle.args = {
  name: 'a-toggle',
  label: 'Toggle label'
}

export const OnToggle = Template.bind({})

OnToggle.args = {
  name: 'a-toggle',
  label: 'Toggle On',
  checked: true
}
