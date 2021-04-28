import React from 'react'
import {
  SNNotificationDetailTranslationsProvider,
  useNotificationDetailTranslations
} from './SNNotificationDetailTranslationsProvider'
import { mountIonPage, translations } from './test-utils'

describe('SNNotificationDetailTranslationsProvider', () => {
  describe('useNotificationDetailTranslations', () => {
    const ChildComponent = () => {
      const { deleteNotificationText } = useNotificationDetailTranslations()

      return <p>{deleteNotificationText}</p>
    }

    it('Properties are available to children', () => {
      mountIonPage(
        <SNNotificationDetailTranslationsProvider {...translations}>
          <ChildComponent />
        </SNNotificationDetailTranslationsProvider>
      )

      cy.findByText(translations.deleteNotificationText).should('exist')
    })
  })
})
