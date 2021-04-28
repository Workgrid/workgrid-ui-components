import React from 'react'
import { SpacesScreen, SpacesScreenProps } from './SpacesScreen'
import { mount } from '@cypress/react'

describe('SpacesScreen', () => {
  const translations = {
    selectASpaceLabel: 'Select a Space',
    spacesTitle: `Spaces`,
    selectSpace: 'Go',
    defaultCaption: 'Default',
    spacesCaption: 'You are currently in Space Two',
    noSpacesText: 'No spaces found',
    refreshText: 'Refresh'
  }

  const defaultSpaceId = 'space-1'
  const currentSpaceId = 'space-2'
  const spaces = [
    {
      id: 'space-1',
      name: 'Space One'
    },
    {
      id: 'space-2',
      name: 'Space Two'
    },
    {
      id: 'space-3',
      name: 'Space Three'
    }
  ]

  let onSpaceSubmit: SpacesScreenProps['onSpaceSubmit']
  let onRefresh: SpacesScreenProps['onRefresh']

  beforeEach(() => {
    onSpaceSubmit = cy.stub().as('onSpaceSubmit')
    onRefresh = cy.stub().as('onRefresh')
  })

  it('current space is selected by default', () => {
    mount(
      <SpacesScreen
        currentSpaceId={currentSpaceId}
        spaces={spaces}
        translations={translations}
        onRefresh={onRefresh}
        onSpaceSubmit={onSpaceSubmit}
      />
    )

    cy.findByRole('radiogroup').invoke('val').should('equal', currentSpaceId)
  })

  it('default space is selected by default when current space is undefined', () => {
    mount(
      <SpacesScreen
        defaultSpaceId={defaultSpaceId}
        spaces={spaces}
        translations={translations}
        onRefresh={onRefresh}
        onSpaceSubmit={onSpaceSubmit}
      />
    )

    cy.findByRole('radiogroup').invoke('val').should('equal', defaultSpaceId)
  })

  it('First space in the list should be selected if neither current space or default space provided', () => {
    mount(
      <SpacesScreen spaces={spaces} translations={translations} onRefresh={onRefresh} onSpaceSubmit={onSpaceSubmit} />
    )

    cy.findByRole('radiogroup').invoke('val').should('equal', spaces[0].id)
  })

  it('onSpaceSubmit is fired when user changes spaces', () => {
    mount(
      <SpacesScreen
        currentSpaceId={currentSpaceId}
        spaces={spaces}
        translations={translations}
        onRefresh={onRefresh}
        onSpaceSubmit={onSpaceSubmit}
      />
    )

    cy.findByLabelText(spaces[2].name).click()

    cy.findByText(translations.selectSpace).click()

    cy.wrap(onSpaceSubmit).should('have.been.calledWithExactly', spaces[2].id)
  })

  it('onRefresh invoked when refresh toolbar button is clicked', () => {
    mount(
      <SpacesScreen
        defaultSpaceId={defaultSpaceId}
        spaces={spaces}
        translations={translations}
        onRefresh={onRefresh}
        onSpaceSubmit={onSpaceSubmit}
      />
    )

    cy.findByLabelText(translations.refreshText).parent().click()

    cy.wrap(onRefresh).should('have.been.calledWithExactly')
  })

  it('onRefresh invoked when there are no spaces and refresh button is clicked', () => {
    mount(<SpacesScreen spaces={[]} translations={translations} onRefresh={onRefresh} onSpaceSubmit={onSpaceSubmit} />)

    cy.findByText(translations.refreshText).click()

    cy.wrap(onRefresh).should('have.been.calledWithExactly')
  })
})
