import React from 'react'
import { SNInputTime } from './SNInputTime'
import { mountInput, actions } from './test-utils'
import { SinonStub } from 'cypress/types/sinon'

describe('SNInputTime', () => {
  const minDate = '13:00'
  const maxDate = '19:00'

  let onSubmitAction: SinonStub

  beforeEach(() => {
    onSubmitAction = cy.stub().as('onSubmitAction')
  })

  it('When input is required display an error and not fire onSubmit', () => {
    mountInput({
      onSubmitAction,
      input: <SNInputTime id="input-1" label="Required Test" isRequired={true} />
    })

    cy.findByText(actions[0].title).click()

    cy.findByRole('alert').should('exist')
    cy.wrap(onSubmitAction).should('have.not.been.called')
  })

  it('When maximum specified and constraint not met display error and not fire onSubmit', () => {
    const labelText = 'Maximum Test'

    mountInput({
      onSubmitAction,
      input: <SNInputTime id="input-1" label={labelText} max={maxDate} />
    })

    cy.findByLabelText(labelText).focus().type('20:00')

    cy.findByText(actions[0].title).click()

    cy.findByRole('alert').should('exist')
    cy.wrap(onSubmitAction).should('have.not.been.called')
  })

  it('When minimum specified and constraint not met display error and not fire onSubmit', () => {
    const labelText = 'Maximum Test'

    mountInput({
      onSubmitAction,
      input: <SNInputTime id="input-1" label={labelText} min={minDate} />
    })

    cy.findByLabelText(labelText).focus().type('12:00')

    cy.findByText(actions[0].title).click()

    cy.findByRole('alert').should('exist')
    cy.wrap(onSubmitAction).should('have.not.been.called')
  })

  it('When minimum and maximum specified and constraint not met display error and not fire onSubmit', () => {
    const labelText = 'Minimum and Maximum Test'

    mountInput({
      onSubmitAction,
      input: <SNInputTime id="input-1" label={labelText} min={minDate} max={maxDate} />
    })

    cy.findByLabelText(labelText).focus().type('20:00')

    cy.findByText(actions[0].title).click()

    cy.findByRole('alert').should('exist')

    cy.findByLabelText(labelText).focus().type('12:00')

    cy.findByText(actions[0].title).click()

    cy.findByRole('alert').should('exist')

    cy.wrap(onSubmitAction).should('have.not.been.called')
  })

  it('When input meets constraints onSubmit is called', () => {
    const inputId = 'input-1'
    const labelText = 'On Submit Test'

    mountInput({
      onSubmitAction,
      input: <SNInputTime id={inputId} label={labelText} min={minDate} max={maxDate} />
    })

    const inputTime = '16:00'
    cy.findByLabelText(labelText).focus().type(inputTime)

    cy.findByText(actions[0].title).click()

    cy.findByRole('alert').should('not.exist')
    cy.wrap(onSubmitAction).should('have.been.calledWithMatch', {
      [inputId]: inputTime
    })
  })
})
