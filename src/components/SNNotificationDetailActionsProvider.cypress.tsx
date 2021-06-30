import React from 'react'
import { SNNotificationDetailActionsProvider, useNotificationActions } from './SNNotificationDetailActionsProvider'
import { Button } from './Button'
import { actions, mountIonPage } from './test-utils'
import { SNNotificationDetailScreenProps } from './SNNotificationDetailScreen'

describe('SNNotificationDetailActionsProvider', () => {
  const submitText = 'SUBMIT'
  const deleteText = 'DELETE'
  const openUrlText = 'OPEN URL'
  let onSubmitAction: SNNotificationDetailScreenProps['onSubmitAction']
  let onOpenUrlAction: SNNotificationDetailScreenProps['onOpenUrlAction']
  let onDelete: SNNotificationDetailScreenProps['onDelete']

  const ChildComponent = () => {
    const { onSubmitAction, onDelete, onOpenUrlAction } = useNotificationActions()

    return (
      <>
        <Button onClick={() => onSubmitAction({ dummy: 'data' }, actions[0])}>{submitText}</Button>
        <Button onClick={onDelete}>{deleteText}</Button>
        <Button onClick={() => onOpenUrlAction('a-url')}>{openUrlText}</Button>
      </>
    )
  }

  beforeEach(() => {
    onSubmitAction = cy.stub().as('onSubmitAction')
    onDelete = cy.stub().as('onDelete')
    onOpenUrlAction = cy.stub().as('onOpenUrlAction')

    mountIonPage(
      <SNNotificationDetailActionsProvider
        onSubmitAction={onSubmitAction}
        onDelete={onDelete}
        onOpenUrlAction={onOpenUrlAction}
      >
        <ChildComponent />
      </SNNotificationDetailActionsProvider>
    )
  })

  describe('useNotification', () => {
    it('onSubmitAction provided to provider should be called when clicked', () => {
      cy.findByText(submitText).click()

      cy.wrap(onSubmitAction).should('have.been.calledOnce')
    })

    it('onDelete provided to provider should be called when clicked', () => {
      cy.findByText(deleteText).click()

      cy.wrap(onDelete).should('have.been.calledOnce')
    })

    it('onOpenUrlAction provided to provider should be called when clicked', () => {
      cy.findByText(deleteText).click()

      cy.wrap(onDelete).should('have.been.calledOnce')
    })
  })
})
