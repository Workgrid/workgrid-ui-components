import React from 'react'
import { Textarea } from './Textarea'
import { mount } from '@cypress/react'

describe('Textarea', () => {
  const defaultProps = {
    name: 'Text',
    label: 'Textarea Label',
    placeholder: 'Placeholder Text',
    testId: 'Textarea-1'
  }

  it('Default options', () => {
    mount(<Textarea {...defaultProps} data-testid={defaultProps.testId} />)

    cy.findByText(defaultProps.label).should('exist')
    cy.findByPlaceholderText(defaultProps.placeholder).should('exist')
  })

  it('InvalidTextarea option', () => {
    mount(<Textarea {...defaultProps} invalidText="Field is required" />)

    cy.findByTestId('ion-item').should('have.class', 'ion-invalid ion-touched')
  })

  it('onFocus option', () => {
    const onFocus = cy.stub().as('onFocus')

    mount(<Textarea {...defaultProps} onFocus={onFocus} />)

    cy.findByLabelText(defaultProps.label).focus()

    cy.wrap(onFocus).should('have.been.called')
  })

  it('onBlur option', () => {
    const onBlur = cy.stub().as('onBlur')

    mount(<Textarea {...defaultProps} onBlur={onBlur} />)

    cy.findByLabelText(defaultProps.label).focus().blur()

    cy.wrap(onBlur).should('have.been.called')
  })

  it('onChange option', () => {
    const onChange = cy.stub().as('onChange')

    mount(<Textarea {...defaultProps} onChange={onChange} />)

    const updatedValue = '25'

    cy.findByLabelText(defaultProps.label).focus().type(updatedValue)

    cy.wrap(onChange).should('have.been.calledWithMatch', { detail: { value: updatedValue } })
  })
})
