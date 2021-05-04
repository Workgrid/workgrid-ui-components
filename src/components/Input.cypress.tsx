import React from 'react'
import { Input } from './Input'
import { mount } from '@cypress/react'

describe('Input', () => {
  const defaultProps = {
    name: 'Text',
    label: 'Input Label',
    placeholder: 'Placeholder Text'
  }

  it('Default options', () => {
    mount(<Input {...defaultProps} />)
    cy.findByText(defaultProps.label).should('exist')
    cy.findByPlaceholderText(defaultProps.placeholder).should('exist')
    cy.findByTestId('ion-item').should('have.class', '')
  })

  it('InvalidInput option', () => {
    mount(<Input {...defaultProps} invalidText="Field is required" />)
    cy.findByTestId('ion-item').should('have.class', 'ion-invalid ion-touched')
  })

  it('onFocus option', () => {
    const onFocus = cy.stub().as('onFocus')
    mount(<Input {...defaultProps} onFocus={onFocus} />)
    cy.findByLabelText(defaultProps.label).focus()
    cy.wrap(onFocus).should('have.been.called')
  })

  it('onBlur option', () => {
    const onBlur = cy.stub().as('onBlur')
    mount(<Input {...defaultProps} onBlur={onBlur} />)
    // Have to focus before you can blur
    cy.findByLabelText(defaultProps.label).focus()
    cy.findByLabelText(defaultProps.label).blur()
    cy.wrap(onBlur).should('have.been.called')
  })

  it('onChange option', () => {
    const onChange = cy.stub().as('onChange')
    mount(<Input {...defaultProps} onChange={onChange} />)
    const updatedValue = '25'
    cy.findByLabelText(defaultProps.label).type(updatedValue)
    cy.wrap(onChange).should('have.been.calledWithMatch', { detail: { value: updatedValue } })
  })
})
