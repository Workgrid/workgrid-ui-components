import React from 'react'
import { Story, Meta } from '@storybook/react'

import { NetworkSplashScreen, NetworkSplashScreenProps } from './NetworkSplashScreen'

export default {
  title: 'Screens/Network Splash',
  component: NetworkSplashScreen,
  argTypes: {
    translations: { control: false }
  }
} as Meta

const Template: Story<NetworkSplashScreenProps> = args => <NetworkSplashScreen {...args} />

const translations = {
  cantConnectToNetwork: `Can't connect to the network`,
  pleaseCheckInternetConnection: 'Please check your internet connection'
}

export const NoNetwork = Template.bind({})

NoNetwork.args = {
  translations,
  isNetworkAvailable: false
}
