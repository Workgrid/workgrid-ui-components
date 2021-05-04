import React from 'react'
import { Toggle } from './Toggle'
import { mount } from '@cypress/react'

describe('Toggle', () => {
  const defaultProps = {
    name: 'Toggle',
    label: 'Toggle Label'
  }

  it('Default options', () => {
    mount(<Toggle {...defaultProps} />)

    cy.findByLabelText(defaultProps.label).should('exist')
  })

  it('onChange option', () => {
    const onChange = cy.stub().as('onChange')

    mount(<Toggle {...defaultProps} onChange={onChange} />)

    cy.findByLabelText(defaultProps.label).click()

    cy.wrap(onChange).should('have.been.calledWithMatch', { detail: { checked: true } })

    cy.findByLabelText(defaultProps.label).click()

    cy.wrap(onChange).should('have.been.calledWithMatch', { detail: { checked: false } })
  })
})
