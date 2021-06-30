import React from 'react'
import { SNInputText } from './SNInputText'
import { mountInput, actions } from './test-utils'
import { SinonStub } from 'cypress/types/sinon'

describe('SNInputText', () => {
  let onSubmitAction: SinonStub

  beforeEach(() => {
    onSubmitAction = cy.stub().as('onSubmitAction')
  })

  it('When input is required display an error and not fire onSubmit', () => {
    mountInput({
      onSubmitAction,
      input: <SNInputText id="input-1" label="Required Test" isRequired={true} />
    })

    cy.findByText(actions[0].title).click()

    cy.findByRole('alert').should('exist')
    cy.wrap(onSubmitAction).should('have.not.been.called')
  })

  it('When maximum length specified and constraint not met display error and not fire onSubmit', () => {
    const labelText = 'Maximum Length Test'

    mountInput({
      onSubmitAction,
      input: <SNInputText id="input-1" label={labelText} maxLength={4} />
    })

    cy.findByLabelText(labelText).focus().type('string-exceeds-max-length')

    cy.findByText(actions[0].title).click()

    cy.findByRole('alert').should('exist')
    cy.wrap(onSubmitAction).should('have.not.been.called')
  })

  it('When input meets constraints onSubmit is called', () => {
    const labelText = 'On Submit Test'
    const inputId = 'input-1'

    mountInput({
      onSubmitAction,
      input: <SNInputText id={inputId} label={labelText} maxLength={4} isRequired={true} />
    })

    const inputText = 'test'
    cy.findByLabelText(labelText).focus().type(inputText)

    cy.findByText(actions[0].title).click()

    cy.findByRole('alert').should('not.exist')
    cy.wrap(onSubmitAction).should('have.been.calledWithMatch', { [inputId]: inputText })
  })
})
