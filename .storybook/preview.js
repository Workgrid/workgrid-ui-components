import React from 'react'
import { IonApp, IonContent, IonPage } from '@ionic/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
/* Core CSS required for Ionic components to work properly */
import '../ionic'

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
      ]
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
      ]
    }
  }
}

const withIonApp = (Story, context) => {
  const modeClassToRemove = context.globals.mode === 'ios' ? 'md' : 'ios'

  const htmlTagClassList = document.querySelector('html').classList

  htmlTagClassList.replace(modeClassToRemove, context.globals.mode)

  const themeClassesToRemove = globalTypes.theme.toolbar.items.filter(item => item.value !== context.globals.theme).map(item => item.value)

  themeClassesToRemove.forEach(theme => {
    htmlTagClassList.remove(theme)
  })

  htmlTagClassList.add(context.globals.theme)

  return (<IonApp mode={context.globals.mode}>
                  <Story {...context} />
            </IonApp>
)
}

export const decorators = [withIonApp]
