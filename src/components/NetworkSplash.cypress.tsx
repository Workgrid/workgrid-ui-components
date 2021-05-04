import React from 'react'
import { NetworkSplash } from './NetworkSplash'
import { mount } from '@cypress/react'

describe('NetworkSplash', () => {
  const translations = {
    cantConnectToNetwork: `Can't connect to the network`,
    pleaseCheckInternetConnection: 'Please check your internet connection'
  }

  it('When network is available render children', () => {
    const childComponentText = 'I am a child component'

    mount(
      <NetworkSplash isNetworkAvailable={true} translations={translations}>
        <p>{`${childComponentText}`}</p>
      </NetworkSplash>
    )

    cy.findByText(childComponentText).should('exist')
    cy.findByText(translations.cantConnectToNetwork).should('not.exist')
  })

  it('When network is not available show network splash', () => {
    const childComponentText = 'I am a child component'

    mount(
      <NetworkSplash isNetworkAvailable={false} translations={translations}>
        <p>{`${childComponentText}`}</p>
      </NetworkSplash>
    )

    cy.findByText(translations.cantConnectToNetwork).should('exist')
    cy.findByText(childComponentText).should('not.exist')
  })
})
