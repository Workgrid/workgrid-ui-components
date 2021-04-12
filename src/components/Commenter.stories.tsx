import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Commenter, CommenterProps } from './Commenter'
import avatar from '../assets/avatar.png'
import componentDecorators from '../../.storybook/component-decorators'

export default {
  title: 'Card Components/Commenter',
  component: Commenter,
  decorators: componentDecorators,
  argTypes: {
    timestamp: {
      name: 'comment timestamp',
      control: {
        type: 'date'
      }
    }
  }
} as Meta

const Template: Story<CommenterProps> = args => <Commenter {...args} timestamp={new Date(args.timestamp)} />

export const CommenterNoAvatar = Template.bind({})

const aMinuteAgo = new Date(Date.now() - 60000)

CommenterNoAvatar.args = {
  commenter: 'John Smith',
  timestamp: aMinuteAgo
}

export const CommenterWithAvatar = Template.bind({})

CommenterWithAvatar.args = {
  ...CommenterNoAvatar.args,
  avatarUrl: avatar
}
