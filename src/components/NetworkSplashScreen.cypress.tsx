import React from 'react'
import { NetworkSplashScreen } from './NetworkSplashScreen'
import { mount } from '@cypress/react'

describe('NetworkSplashScreen', () => {
  const translations = {
    cantConnectToNetwork: `Can't connect to the network`,
    pleaseCheckInternetConnection: 'Please check your internet connection'
  }

  it('When network is available render children', () => {
    const childComponentText = 'I am a child component'

    mount(
      <NetworkSplashScreen isNetworkAvailable={true} translations={translations}>
        <p>{`${childComponentText}`}</p>
      </NetworkSplashScreen>
    )

    cy.findByText(childComponentText).should('exist')
    cy.findByText(translations.cantConnectToNetwork).should('not.exist')
  })

  it('When network is not available show network splash', () => {
    const childComponentText = 'I am a child component'

    mount(
      <NetworkSplashScreen isNetworkAvailable={false} translations={translations}>
        <p>{`${childComponentText}`}</p>
      </NetworkSplashScreen>
    )

    cy.findByText(translations.cantConnectToNetwork).should('exist')
    cy.findByText(childComponentText).should('not.exist')
  })
})
