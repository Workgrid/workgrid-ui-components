import React from 'react'
import { SNNotificationProvider, useNotification } from './SNNotificationProvider'
import { SNNotification } from '../types/notification'
import { mountIonPage } from './test-utils'

describe('SNNotificationProvider', () => {
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
      name: 'Ops Heartbeat',
      iconUrl:
        'https://cdn.dev.workgrid.com/connectors/ad0cd014-cb22-454c-aff0-24396bcccdad/public/ops_heartbeat_logo.png'
    },
    title: {
      type: 'element',
      tagName: 'Title',
      children: [
        {
          type: 'text',
          value: 'A smart notification title that is really long'
        }
      ]
    },
    body: {
      type: 'element',
      tagName: 'Body',
      children: [
        {
          type: 'text',
          value:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          type: 'element',
          tagName: 'Date',
          properties: {
            date: '2017-02-14T06:00:00Z',
            format: 'LONG'
          }
        },
        {
          type: 'text',
          value:
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        }
      ]
    },
    image: {
      altText: 'An image',
      url:
        'https://yt3.ggpht.com/-1-tkZ15dxU4/AAAAAAAAAAI/AAAAAAAAAAA/vmWxnqIKuSs/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'
    },
    actions: [
      {
        type: 'Action.Submit',
        actionType: 'primary',
        causesValidation: true,
        title: 'Validated action',
        id: 'validated-action',
        data: {
          action: 'validated'
        }
      },
      {
        type: 'Action.Submit',
        actionType: 'secondary',
        causesValidation: false,
        title: 'Non-validated action',
        id: 'non-validated-action',
        data: {
          action: 'non-validated'
        }
      }
    ]
  }

  describe('useNotification', () => {
    const ChildComponent = () => {
      const { id } = useNotification()

      return <p>{id}</p>
    }

    it('Properties are available to children', () => {
      mountIonPage(
        <SNNotificationProvider notification={notification}>
          <ChildComponent />
        </SNNotificationProvider>
      )

      cy.findByText(notification.id).should('exist')
    })
  })
})
