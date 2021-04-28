import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Range, RangeProps } from './Range'
import componentDecorators from '../../.storybook/component-decorators'

export default {
  title: 'Components/Range',
  component: Range,
  decorators: componentDecorators
} as Meta

const Template: Story<RangeProps> = args => <Range {...args} />

export const Default = Template.bind({})

Default.args = {
  id: 'input-1',
  name: 'Text',
  label: 'Range label'
}
