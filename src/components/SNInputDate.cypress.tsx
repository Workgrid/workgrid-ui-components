import React from 'react'
import { SNInputDate } from './SNInputDate'
import { mountInput, actions } from './test-utils'
import * as yup from 'yup'
import { SinonStub } from 'cypress/types/sinon'

describe('SNInputDate', () => {
  const minDate = '2021-04-30T00:00:00.000Z'
  const maxDate = '2021-05-30T00:00:00.000Z'

  let onSubmitAction: SinonStub

  beforeEach(() => {
    onSubmitAction = cy.stub().as('onSubmitAction')
  })

  it('When input is required display an error and not fire onSubmit', () => {
    mountInput({
      onSubmitAction,
      input: <SNInputDate id="input-1" label="Required Test" isRequired={true} />
    })

    cy.findByText(actions[0].title).click()

    cy.findByRole('alert').should('exist')
    cy.wrap(onSubmitAction).should('have.not.been.called')
  })

  it('When maximum specified and constraint not met display error and not fire onSubmit', () => {
    const labelText = 'Maximum Test'

    mountInput({
      onSubmitAction,
      input: <SNInputDate id="input-1" label={labelText} max={maxDate} />
    })

    cy.findByLabelText(labelText).focus().type('2021-06-01')

    cy.findByText(actions[0].title).click()

    cy.findByRole('alert').should('exist')
    cy.wrap(onSubmitAction).should('have.not.been.called')
  })

  it('When minimum specified and constraint not met display error and not fire onSubmit', () => {
    const labelText = 'Maximum Test'

    mountInput({
      onSubmitAction,
      input: <SNInputDate id="input-1" label={labelText} min={minDate} />
    })

    cy.findByLabelText(labelText).focus().type('2021-04-01')

    cy.findByText(actions[0].title).click()

    cy.findByRole('alert').should('exist')
    cy.wrap(onSubmitAction).should('have.not.been.called')
  })

  it('When minimum and maximum specified and constraint not met display error and not fire onSubmit', () => {
    const labelText = 'Minimum and Maximum Test'

    mountInput({
      onSubmitAction,
      input: <SNInputDate id="input-1" label={labelText} min={minDate} max={maxDate} />
    })

    cy.findByLabelText(labelText).focus().type('2021-04-01')

    cy.findByText(actions[0].title).click()

    cy.findByRole('alert').should('exist')

    cy.findByLabelText(labelText).focus().type('2021-06-01')

    cy.findByText(actions[0].title).click()

    cy.findByRole('alert').should('exist')

    cy.wrap(onSubmitAction).should('have.not.been.called')
  })

  it('When input meets constraints onSubmit is called', () => {
    const inputId = 'input-1'
    const labelText = 'On Submit Test'

    mountInput({
      onSubmitAction,
      input: <SNInputDate id={inputId} label={labelText} min={minDate} max={maxDate} />
    })

    const inputDate = '2021-05-15'
    cy.findByLabelText(labelText).focus().type(inputDate)

    cy.findByText(actions[0].title).click()

    cy.findByRole('alert').should('not.exist')
    cy.wrap(onSubmitAction).should('have.been.calledWithMatch', {
      // This isn't the best comparison but we need to depend on how Yup decides to coerce the date.
      [inputId]: yup.date().validateSync(inputDate)
    })
  })
})
