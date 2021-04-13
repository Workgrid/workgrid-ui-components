import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Sender, SenderProps } from './Sender'
import noSender from '../assets/no-sender.png'
import avatar from '../assets/avatar.png'
import { Indicator } from './Indicator'
import componentDecorators from '../../.storybook/component-decorators'

export default {
  title: 'Card Components/Sender',
  component: Sender,
  decorators: componentDecorators,
  argTypes: {
    timestamp: {
      name: 'comment timestamp',
      control: {
        type: 'date'
      }
    },
    NewIndicator: {
      table: {
        disable: true
      }
    }
  }
} as Meta

const Template: Story<SenderProps> = args => <Sender {...args} timestamp={new Date(args.timestamp)} />

export const SenderNoAvatar = Template.bind({})

const aMinuteAgo = new Date(Date.now() - 60000)

SenderNoAvatar.args = {
  from: 'ACME HR',
  timestamp: aMinuteAgo,
  fallbackImageUrl: noSender,
  imageUrl: 'http://path/to/non-existent-image.png'
}

export const SenderWithAvatar = Template.bind({})

SenderWithAvatar.args = {
  ...SenderNoAvatar.args,
  imageUrl: avatar
}

export const SenderWithAvatarAndTo = Template.bind({})

SenderWithAvatarAndTo.args = {
  ...SenderWithAvatar.args,
  imageUrl: avatar,
  to: 'To All Employees'
}

export const SenderWithAvatarAndNew = Template.bind({})

SenderWithAvatarAndNew.args = {
  ...SenderWithAvatar.args,
  imageUrl: avatar,
  to: 'To All Employees',
  Indicator: <Indicator>New</Indicator>
}
