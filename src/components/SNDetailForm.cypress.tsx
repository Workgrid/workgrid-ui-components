import React from 'react'
import { SNInputText } from './SNInputText'
import { mount } from '@cypress/react'
import { actions, translations } from './test-utils'
import { SNNotificationDetailTranslationsProvider } from './SNNotificationDetailTranslationsProvider'
import { SNDetailForm, SNDetailFormProps } from './SNDetailForm'

describe('SNDetailForm', () => {
  const requiredInputLabel = 'Input Required'
  const requiredInputId = 'required-input'
  const nonRequiredInputLabel = 'Input Not Required'
  const nonRequiredInputId = 'non-required-input'

  let onSubmitAction: SNDetailFormProps['onSubmitAction']
  let onOpenUrlAction: SNDetailFormProps['onOpenUrlAction']

  beforeEach(() => {
    onSubmitAction = cy.stub().as('onSubmitAction')
    onOpenUrlAction = cy.stub().as('onOpenUrlAction')

    mount(
      <SNNotificationDetailTranslationsProvider {...translations}>
        <SNDetailForm onSubmitAction={onSubmitAction} onOpenUrlAction={onOpenUrlAction} actions={actions}>
          <SNInputText id={requiredInputId} label={requiredInputLabel} isRequired={true} />
          <SNInputText id={nonRequiredInputId} label={nonRequiredInputLabel} isRequired={false} />
        </SNDetailForm>
      </SNNotificationDetailTranslationsProvider>
    )
  })

  it('Should not submit the form if validation does not pass', () => {
    const nonRequiredInputLabel = 'Input Not Required'

    cy.findByLabelText(nonRequiredInputLabel).focus().type('some text')

    cy.findByText(actions[0].title).click()

    cy.findByRole('alert').should('exist')
    cy.wrap(onSubmitAction).should('have.not.been.called')
  })

  it('Should submit the form if all validation passes with proper data and action that was clicked', () => {
    const requiredInputText = 'required text here'
    const nonRequiredInputText = 'non required text here'

    cy.findByLabelText(requiredInputLabel).focus().type(requiredInputText)
    cy.findByLabelText(nonRequiredInputLabel).focus().type(nonRequiredInputText)

    cy.findByText(actions[0].title).click()

    cy.findByRole('alert').should('not.exist')
    cy.wrap(onSubmitAction).should(
      'have.been.calledWithExactly',
      {
        [requiredInputId]: requiredInputText,
        [nonRequiredInputId]: nonRequiredInputText
      },
      actions[0]
    )
  })

  it('Should submit the form even though validation would not pass because the action does not require validation', () => {
    cy.findByText(actions[1].title).click()

    cy.findByRole('alert').should('not.exist')
    cy.wrap(onSubmitAction).should(
      'have.been.calledWithExactly',
      {
        [requiredInputId]: undefined,
        [nonRequiredInputId]: undefined
      },
      actions[1]
    )
  })

  it('Should call onOpenUrlAction when Open URL action button clicked', () => {
    cy.findByText(actions[2].title).click()

    cy.wrap(onOpenUrlAction).should('have.been.calledWithExactly', actions[2].url)
  })
})
