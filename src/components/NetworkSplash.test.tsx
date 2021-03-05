import React from 'react'
import { NetworkSplash } from './NetworkSplash'
import { render, screen } from '@testing-library/react'

describe('NetworkSplash', () => {
  const translations = {
    cantConnectToNetwork: `Can't connect to the network`,
    pleaseCheckInternetConnection: 'Please check your internet connection'
  }

  test('When network is available render children', async () => {
    const childComponentText = 'I am a child component'

    render(
      <NetworkSplash isNetworkAvailable={true} translations={translations}>
        <p>{`${childComponentText}`}</p>
      </NetworkSplash>
    )

    expect(screen.getByText(childComponentText)).toBeVisible()
    expect(screen.queryByText(translations.cantConnectToNetwork)).not.toBeInTheDocument()
  })

  test('When network is not available show network splash', async () => {
    const childComponentText = 'I am a child component'

    render(
      <NetworkSplash isNetworkAvailable={false} translations={translations}>
        <p>{`${childComponentText}`}</p>
      </NetworkSplash>
    )

    expect(screen.getByText(translations.cantConnectToNetwork)).toBeVisible()
    expect(screen.queryByText(childComponentText)).not.toBeInTheDocument()
  })
})
