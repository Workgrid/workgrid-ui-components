import React from 'react'
import { Story, Meta } from '@storybook/react'

import { NetworkSplash, NetworkSplashProps } from './NetworkSplash'

export default {
  title: 'Screens/Network Splash',
  component: NetworkSplash,
  argTypes: {
    translations: { control: false }
  }
} as Meta

const Template: Story<NetworkSplashProps> = args => <NetworkSplash {...args} />

const translations = {
  cantConnectToNetwork: `Can't connect to the network`,
  pleaseCheckInternetConnection: 'Please check your internet connection'
}

export const NoNetwork = Template.bind({})

NoNetwork.args = {
  translations,
  isNetworkAvailable: false
}
