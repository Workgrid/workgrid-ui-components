import React from 'react'
import { Range } from './Range'
import { mount } from '@cypress/react'

describe('Range', () => {
  const defaultProps = {
    name: 'Range',
    label: 'Range Label'
  }

  it('Default options', () => {
    mount(<Range {...defaultProps} />)
    cy.findByText(defaultProps.label).should('exist')
  })

  it('onFocus option', () => {
    const onFocus = cy.stub().as('onFocus')
    mount(<Range {...defaultProps} onFocus={onFocus} />)
    cy.get(`ion-range[name=${defaultProps.name}]`).click()
    cy.wrap(onFocus).should('have.been.called')
  })
})
