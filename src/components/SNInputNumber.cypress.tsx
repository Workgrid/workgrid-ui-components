import React from 'react'
import { SNInputNumber } from './SNInputNumber'
import { mountInput, actions } from './test-utils'
import { SinonStub } from 'cypress/types/sinon'

describe('SNInputNumber', () => {
  let onSubmitAction: SinonStub

  beforeEach(() => {
    onSubmitAction = cy.stub().as('onSubmitAction')
  })

  it('When input is required display an error and not fire onSubmit', () => {
    mountInput({
      onSubmitAction,
      input: <SNInputNumber id="input-1" label="Required Test" isRequired={true} />
    })

    cy.findByText(actions[0].title).click()

    cy.findByRole('alert').should('exist')
    cy.wrap(onSubmitAction).should('have.not.been.called')
  })

  it('When maximum specified and constraint not met display error and not fire onSubmit', () => {
    const labelText = 'Maximum Test'

    mountInput({
      onSubmitAction,
      input: <SNInputNumber id="input-1" label={labelText} max="4" />
    })

    cy.findByLabelText(labelText).focus().type('5')

    cy.findByText(actions[0].title).click()

    cy.findByRole('alert').should('exist')
    cy.wrap(onSubmitAction).should('have.not.been.called')
  })

  it('When minimum specified and constraint not met display error and not fire onSubmit', () => {
    const labelText = 'Minimum Test'

    mountInput({
      onSubmitAction,
      input: <SNInputNumber id="input-1" label={labelText} min="4" />
    })

    cy.findByLabelText(labelText).focus().type('3')

    cy.findByText(actions[0].title).click()

    cy.findByRole('alert').should('exist')
    cy.wrap(onSubmitAction).should('have.not.been.called')
  })

  it('When minimum and maximum specified and constraint not met display error and not fire onSubmit', () => {
    const labelText = 'Minimum and Maximum Test'

    mountInput({
      onSubmitAction,
      input: <SNInputNumber id="input-1" label={labelText} min="4" max="6" />
    })

    cy.findByLabelText(labelText).focus().type('3')

    cy.findByText(actions[0].title).click()

    cy.findByRole('alert').should('exist')

    cy.findByLabelText(labelText).focus().type('7')

    cy.findByText(actions[0].title).click()

    cy.findByRole('alert').should('exist')

    cy.wrap(onSubmitAction).should('have.not.been.called')
  })

  it('When input meets constraints onSubmit is called', () => {
    const inputId = 'input-1'
    const labelText = 'On Submit Test'

    mountInput({
      onSubmitAction,
      input: <SNInputNumber id={inputId} label={labelText} min="4" max="6" />
    })

    const inputNumber = '5'
    cy.findByLabelText(labelText).focus().type(inputNumber)

    cy.findByText(actions[0].title).click()

    cy.findByRole('alert').should('not.exist')
    cy.wrap(onSubmitAction).should('have.been.calledWithMatch', { [inputId]: Number.parseFloat(inputNumber) })
  })
})
