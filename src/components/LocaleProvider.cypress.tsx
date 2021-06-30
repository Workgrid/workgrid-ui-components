import React from 'react'
import { LocaleProvider, useLocale } from './LocaleProvider'
import { mount } from '@cypress/react'

describe('LocaleProvider', () => {
  describe('useLocale', () => {
    const ChildComponent = ({ newLocale }: { newLocale?: string }) => {
      const { locale, onLocaleChange } = useLocale()

      if (newLocale) {
        onLocaleChange(newLocale)
      }
      return <p>{locale}</p>
    }

    it('defaultLocale is provided to the hook', () => {
      const defaultLocale = 'en-US'

      mount(
        <LocaleProvider defaultLocale={defaultLocale}>
          <ChildComponent />
        </LocaleProvider>
      )

      cy.findByText(defaultLocale).should('exist')
    })

    it('onLocaleChange should change the locale', () => {
      const defaultLocale = 'en-US'
      const newLocale = 'en-GB'

      mount(
        <LocaleProvider defaultLocale={defaultLocale}>
          <ChildComponent newLocale={newLocale} />
        </LocaleProvider>
      )

      cy.findByText(newLocale).should('exist')
      cy.findByText(defaultLocale).should('not.exist')
    })
  })
})
