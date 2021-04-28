import React from 'react'
import { IonApp } from '@ionic/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
/* Core CSS required for Ionic components to work properly */
import '../ionic'
import { LocaleProvider } from '../src/components/LocaleProvider'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
}

export const globalTypes = {
  mode: {
    name: 'Mode',
    description: 'The mode in which the Ion app runs',
    defaultValue: 'md',
    toolbar: {
      items: [
        { value: 'md', title: 'Android / Desktop' },
        { value: 'ios', title: 'iOS' }
      ],
      showName: true
    }
  },
  theme: {
    name: 'Theme',
    description: 'The application theme',
    defaultValue: 'light',
    toolbar: {
      items: [
        { value: 'light', title: 'Default - Light' },
        { value: 'dark', title: 'Default - Dark' }
      ],
      showName: true
    }
  }
}

const withIonApp = (Story, context) => {
  const modeClassToRemove = context.globals.mode === 'ios' ? 'md' : 'ios'

  const htmlElement = document.querySelector('html')

  const htmlTagClassList = htmlElement.classList

  htmlTagClassList.replace(modeClassToRemove, context.globals.mode)
  htmlElement.setAttribute('mode', context.globals.mode)

  const themeClassesToRemove = globalTypes.theme.toolbar.items.filter(item => item.value !== context.globals.theme).map(item => item.value)

  themeClassesToRemove.forEach(theme => {
    htmlTagClassList.remove(theme)
  })

  htmlTagClassList.add(context.globals.theme)

  return (
    <IonApp>
      <LocaleProvider defaultLocale={navigator.language}>
        <Story {...context} />
      </LocaleProvider>
    </IonApp>
  )
}

export const decorators = [withIonApp]
