import React from 'react'
import * as SNNotificationDetailScreen from './SNNotificationDetailScreen'
import { mountIonApp, mountIonPage, translations } from './test-utils'
import { SNNotification } from '../types/notification'
import { SNNotificationDetailScreenProps } from './SNNotificationDetailScreen'
import * as yup from 'yup'

describe('SNNotificationDetailScreen', () => {
  const bodyLinkText = 'links in the body'
  const bodyLinkUrl = 'https://www.workgrid.com?location=body'
  const textBlockLinkText = 'links as well'
  const textBlockLinkUrl = 'https://www.workgrid.com?location=textblock'
  const openUrlActionTitle = 'Open URL Action'
  const openUrlActionUrl = 'https://www.workgrid.com?location=openurlaction'
  const validatedActionTitle = 'Validated Action'
  const nonValidatedActionTitle = 'Non-validated Action'

  // Input labels
  const textInputLabel = 'Text Input'
  const multiLineInputLabel = 'Multiline Input'
  const dateInputLabel = 'Date Input'
  const timeInputLabel = 'Time Input'
  const numberInputLabel = 'Number Input'
  const toggleInputLabel = 'Toggle Input'
  const choiceInputLabel = 'Choice Set Input'
  const choiceALabel = 'Choice A'
  const choiceAValue = 'choice-a'
  const toggleOnValue = 'value-on'

  // Input ids
  const textInputId = 'text-input'
  const multiLineInputId = 'multiline-input'
  const dateInputId = 'date-input'
  const timeInputId = 'time-input'
  const numberInputId = 'number-input'
  const toggleInputId = 'toggle-input'
  const choiceInputId = 'choice-set-input'

  const notification: SNNotification = {
    id: 'a84b4bd6-048d-11e9-b464-0a58dfec3472',
    correlationId: '15c80f29-3273-4c3b-bbf1-7db8f045ece2',
    category: 'Important',
    firstSeenDate: null,
    hiddenBefore: '2018-12-20T19:30:06.000Z',
    hiddenAfter: '2018-12-20T19:45:06.000Z',
    dueAt: null,
    actionStatus: 'none_taken',
    actionTakenDate: null,
    actionCompletionDate: null,
    displayLifecycle: 'simple',
    sortValue: '00000000000050000000000000001545334207',
    section: 'toknow',
    priority: 'informational',
    from: {
      name: 'Notification Test',
      iconUrl: 'https://via.placeholder.com/64x64?text=Source%20Image'
    },
    title: {
      type: 'element',
      tagName: 'Title',
      children: [
        {
          type: 'element',
          tagName: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'A smart notification title that is really long'
            }
          ]
        }
      ]
    },
    body: {
      type: 'element',
      tagName: 'Body',
      children: [
        {
          type: 'element',
          tagName: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Body text of a smart notification. They can contain '
            },
            {
              type: 'element',
              tagName: 'link',
              properties: {
                url: bodyLinkUrl
              },
              children: [
                {
                  type: 'text',
                  value: bodyLinkText
                }
              ]
            },
            {
              type: 'text',
              value: ' among other things.'
            }
          ]
        }
      ]
    },
    image: {
      altText: 'Body Image',
      url: 'https://via.placeholder.com/64x64?text=Body%20Image'
    },
    detail: {
      type: 'element',
      tagName: 'Detail',
      children: [
        {
          type: 'element',
          tagName: 'TextBlock',
          children: [
            {
              type: 'element',
              tagName: 'paragraph',
              children: [
                {
                  type: 'text',
                  value: 'TextBlocks in smart notifications can contain '
                },
                {
                  type: 'element',
                  tagName: 'link',
                  properties: {
                    url: textBlockLinkUrl
                  },
                  children: [
                    {
                      type: 'text',
                      value: textBlockLinkText
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: 'element',
          tagName: 'InputText',
          properties: {
            label: textInputLabel,
            id: textInputId,
            isRequired: true
          }
        },
        {
          type: 'element',
          tagName: 'InputText',
          properties: {
            label: multiLineInputLabel,
            id: multiLineInputId,
            isMultiline: true,
            isRequired: true
          }
        },
        {
          type: 'element',
          tagName: 'InputDate',
          properties: {
            label: dateInputLabel,
            id: dateInputId,
            isRequired: true,
            min: '2021-04-26T00:00:00.000Z'
          }
        },
        {
          type: 'element',
          tagName: 'InputTime',
          properties: {
            label: timeInputLabel,
            id: timeInputId,
            isRequired: true
          }
        },
        {
          type: 'element',
          tagName: 'InputNumber',
          properties: {
            label: numberInputLabel,
            id: numberInputId,
            isRequired: true,
            max: 8
          }
        },
        {
          type: 'element',
          tagName: 'InputToggle',
          properties: {
            title: toggleInputLabel,
            id: toggleInputId,
            value: 'value-off',
            valueOff: 'value-off',
            valueOn: toggleOnValue
          }
        },
        {
          type: 'element',
          tagName: 'InputChoiceSet',
          properties: {
            label: choiceInputLabel,
            id: choiceInputId,
            isRequired: true
          },
          children: [
            {
              type: 'element',
              tagName: 'InputChoice',
              properties: { title: choiceALabel, value: choiceAValue }
            },
            {
              type: 'element',
              tagName: 'InputChoice',
              properties: { title: 'Choice 2', value: 'choice-2' }
            }
          ]
        }
      ]
    },
    actions: [
      {
        type: 'Action.Submit',
        actionType: 'primary',
        causesValidation: true,
        title: validatedActionTitle,
        id: 'validated-action',
        data: {
          action: 'validated'
        }
      },
      {
        type: 'Action.Submit',
        actionType: 'secondary',
        causesValidation: false,
        title: nonValidatedActionTitle,
        id: 'non-validated-action',
        data: {
          action: 'non-validated'
        }
      },
      {
        type: 'Action.OpenUrl',
        title: openUrlActionTitle,
        url: openUrlActionUrl
      }
    ]
  }

  let onSubmitAction: SNNotificationDetailScreenProps['onSubmitAction']
  let onOpenUrlAction: SNNotificationDetailScreenProps['onOpenUrlAction']
  let onDelete: SNNotificationDetailScreenProps['onDelete']

  const screenTests = () => {
    describe('Links should call openUrlAction', () => {
      it('when clicking a link in the notification body', () => {
        cy.findByRole('link', { name: new RegExp(bodyLinkText) }).click()

        cy.wrap(onOpenUrlAction).should('have.been.calledWithExactly', bodyLinkUrl)
      })

      it('when clicking a link in a text block', () => {
        cy.findByRole('link', { name: new RegExp(textBlockLinkText) }).click()

        cy.wrap(onOpenUrlAction).should('have.been.calledWithExactly', textBlockLinkUrl)
      })

      it('when click an OpenUrl action', () => {
        cy.findByText(openUrlActionTitle).click()

        cy.wrap(onOpenUrlAction).should('have.been.calledWithExactly', openUrlActionUrl)
      })
    })

    it('onDelete should be called when attempting to delete the notification', () => {
      cy.findByLabelText(translations.moreOptionsText).click({ force: true })
      cy.findByText(translations.deleteNotificationText).click()

      cy.wrap(onDelete).should('have.been.calledWithExactly')
    })

    describe('form submission', () => {
      it('Should not call onSubmitAction when there are any validation errors for a validated action', () => {
        cy.findByText(validatedActionTitle).click()

        cy.findAllByRole('alert').should('exist')
        cy.wrap(onSubmitAction).should('have.not.been.called')
      })

      it('Should call onSubmitAction when the form is valid with the proper data and action for a validated action', () => {
        const inputText = 'test'
        cy.findByLabelText(textInputLabel).focus().type(inputText)

        const inputNumber = '5'
        cy.findByLabelText(numberInputLabel).focus().type(inputNumber)

        const inputTime = '16:00'
        cy.findByLabelText(timeInputLabel).focus().type(inputTime)

        const inputDate = '2021-05-15'
        cy.findByLabelText(dateInputLabel).focus().type(inputDate)

        const inputMultiline = 'test{Enter}test'
        cy.findByLabelText(multiLineInputLabel).focus().type(inputMultiline)

        cy.findByLabelText(choiceInputLabel).click()
        cy.findByRole('radio', { name: choiceALabel }).click()
        cy.findByText(translations.choiceSelectOkText).click()

        cy.findByLabelText(toggleInputLabel).click()

        cy.findByText(validatedActionTitle).click()

        cy.findAllByRole('alert').should('not.exist')
        cy.wrap(onSubmitAction).should(
          'have.been.calledWithExactly',
          {
            [textInputId]: inputText,
            [choiceInputId]: choiceAValue,
            // This isn't the best comparison but we need to depend on how Yup decides to coerce the date.
            [dateInputId]: yup.date().validateSync(inputDate),
            [multiLineInputId]: inputMultiline.replace('{Enter}', '\n'),
            [numberInputId]: Number.parseFloat(inputNumber),
            [timeInputId]: inputTime,
            [toggleInputId]: toggleOnValue
          },
          notification.actions?.[0]
        )
      })

      it('Should call onSubmitAction even if the form has validation error for a non-validated action', () => {
        const inputText = 'test'
        cy.findByLabelText(textInputLabel).focus().type(inputText)

        cy.findByText(nonValidatedActionTitle).click()

        cy.findAllByRole('alert').should('not.exist')
        cy.wrap(onSubmitAction).should(
          'have.been.calledWithExactly',
          {
            [textInputId]: inputText,
            [choiceInputId]: undefined,
            [dateInputId]: undefined,
            [multiLineInputId]: undefined,
            [numberInputId]: undefined,
            [timeInputId]: undefined,
            [toggleInputId]: 'value-off'
          },
          notification.actions?.[1]
        )
      })
    })
  }

  beforeEach(() => {
    onSubmitAction = cy.stub().as('onSubmitAction')
    onOpenUrlAction = cy.stub().as('onOpenUrlAction')
    onDelete = cy.stub().as('onDelete')
  })

  describe('Small Screen Tests', () => {
    beforeEach(() => {
      mountIonApp(
        <SNNotificationDetailScreen.Small
          notification={notification}
          onSubmitAction={onSubmitAction}
          onOpenUrlAction={onOpenUrlAction}
          onDelete={onDelete}
          translations={translations}
        />
      )
    })

    screenTests()
  })

  describe('Large Screen Tests', () => {
    beforeEach(() => {
      mountIonPage(
        <SNNotificationDetailScreen.Large
          notification={notification}
          onSubmitAction={onSubmitAction}
          onOpenUrlAction={onOpenUrlAction}
          onDelete={onDelete}
          translations={translations}
        />
      )
    })

    screenTests()
  })
})
