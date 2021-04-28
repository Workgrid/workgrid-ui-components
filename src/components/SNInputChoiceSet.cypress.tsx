import React from 'react'
import { SNInputChoiceSet } from './SNInputChoiceSet'
import { mountInput, translations, actions } from './test-utils'
import { SNInputChoice } from './SNInputChoice'
import { SinonStub } from 'cypress/types/sinon'

describe('SNInputChoiceSet', () => {
  const inputId = 'input-1'
  const inputLabel = 'Choice Test'

  const choiceA = 'choice-a'
  const choiceB = 'choice-b'
  const choiceALabel = 'Choice A'
  const choiceBLabel = 'Choice B'

  let onSubmitAction: SinonStub

  beforeEach(() => {
    onSubmitAction = cy.stub().as('onSubmitAction')

    mountInput({
      onSubmitAction,
      input: (
        <SNInputChoiceSet id={inputId} label={inputLabel} isRequired={true} isMultiSelect={true}>
          <SNInputChoice title={choiceALabel} value={choiceA} />
          <SNInputChoice title={choiceBLabel} value={choiceB} />
        </SNInputChoiceSet>
      )
    })
  })

  it('When input is required display an error and not fire onSubmitAction', () => {
    mountInput({
      onSubmitAction,

      input: (
        <SNInputChoiceSet id="input-1" label="Required Test" isRequired={true}>
          <SNInputChoice title="Choice A" value="option-a" />
          <SNInputChoice title="Option B" value="option-b" />
        </SNInputChoiceSet>
      )
    })

    cy.findByText(actions[0].title).click()

    cy.findByRole('alert').should('exist')
    cy.wrap(onSubmitAction).should('have.not.been.called')
  })

  it('When default value not in list of options display an error and not fire onSubmitAction', () => {
    mountInput({
      onSubmitAction,
      input: (
        <SNInputChoiceSet id="input-1" label="Not In List Test" isRequired={true} value="does-not-exist-in-choices">
          <SNInputChoice title="Choice A" value="choice-a" />
          <SNInputChoice title="Choice B" value="choice-b" />
        </SNInputChoiceSet>
      )
    })

    cy.findByText(actions[0].title).click()

    cy.findByRole('alert').should('exist')
    cy.wrap(onSubmitAction).should('have.not.been.called')
  })

  it('Default value is provided and no choice is made it should be passed to onSubmitAction', () => {
    mountInput({
      onSubmitAction,
      input: (
        <SNInputChoiceSet id={inputId} label={inputLabel} isRequired={true} value={choiceB}>
          <SNInputChoice title="Choice A" value="choice-a" />
          <SNInputChoice title={choiceBLabel} value={choiceB} />
        </SNInputChoiceSet>
      )
    })

    cy.findByText(actions[0].title).click()

    cy.wrap(onSubmitAction).should('have.been.calledWithMatch', { [inputId]: choiceB })
  })

  it('Default value is provided and no choice is made it should be passed to onSubmitAction', () => {
    mountInput({
      onSubmitAction,
      input: (
        <SNInputChoiceSet id={inputId} label={inputLabel} isRequired={true} value="does-not-exist-in-choices">
          <SNInputChoice title="Choice A" value="choice-a" />
          <SNInputChoice title={choiceBLabel} value={choiceB} />
        </SNInputChoiceSet>
      )
    })

    cy.findByLabelText(inputLabel).click()
    cy.findByRole('radio', { name: choiceBLabel }).click()
    cy.findByText(translations.choiceSelectOkText).click()
    cy.findByText(actions[0].title).click()

    cy.wrap(onSubmitAction).should('have.been.calledWithMatch', { [inputId]: choiceB })
  })

  it('When selecting multiple values the proper value should be passed to onSubmitAction', () => {
    mountInput({
      onSubmitAction,
      input: (
        <SNInputChoiceSet id={inputId} label={inputLabel} isRequired={true} isMultiSelect={true}>
          <SNInputChoice title={choiceALabel} value={choiceA} />
          <SNInputChoice title={choiceBLabel} value={choiceB} />
          <SNInputChoice title="Choice C" value="choice-c" />
        </SNInputChoiceSet>
      )
    })

    cy.findByLabelText(inputLabel).click()
    cy.findByRole('checkbox', { name: choiceALabel }).click()
    cy.findByRole('checkbox', { name: choiceBLabel }).click()
    cy.findByText(translations.choiceSelectOkText).click()
    cy.findByText(actions[0].title).click()

    cy.wrap(onSubmitAction).should('have.been.calledWithMatch', { [inputId]: [choiceA, choiceB] })
  })
})
