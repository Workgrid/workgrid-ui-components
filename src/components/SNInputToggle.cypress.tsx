import React from 'react'
import { SNInputToggle } from './SNInputToggle'
import { mountInput, actions } from './test-utils'
import { SinonStub } from 'cypress/types/sinon'

describe('SNInputToggle', () => {
  const valueOff = 'toggle-is-off'
  const valueOn = 'toggle-is-on'
  const inputId = 'input-1'
  let onSubmitAction: SinonStub

  beforeEach(() => {
    onSubmitAction = cy.stub().as('onSubmitAction')
  })

  it('When toggle is off valueOff is passed to onSubmit', () => {
    mountInput({
      onSubmitAction,
      input: <SNInputToggle id={inputId} title="Off Test" value={valueOff} valueOff={valueOff} valueOn={valueOn} />
    })

    cy.findByText(actions[0].title).click()

    cy.wrap(onSubmitAction).should('have.been.calledWithMatch', { [inputId]: valueOff })
  })

  it('When no value is provided toggle is off', () => {
    mountInput({
      onSubmitAction,
      input: <SNInputToggle id={inputId} title="Off With No Value Test" valueOff={valueOff} valueOn={valueOn} />
    })

    cy.findByText(actions[0].title).click()

    cy.wrap(onSubmitAction).should('have.been.calledWithMatch', { [inputId]: valueOff })
  })

  it('When toggled on valueOn is passed to onSubmit', () => {
    const inputLabel = 'Off With No Value Test'

    mountInput({
      onSubmitAction,
      input: <SNInputToggle id={inputId} title={inputLabel} valueOff={valueOff} valueOn={valueOn} />
    })

    cy.findByLabelText(inputLabel).click()
    cy.findByText(actions[0].title).click()

    cy.wrap(onSubmitAction).should('have.been.calledWithMatch', { [inputId]: valueOn })
  })
})
