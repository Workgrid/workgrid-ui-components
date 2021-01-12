import React from 'react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'
import '@ionic/react/css/padding.css'

/* Theme variables */
import '../src/variables.css'

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
  }
}

const withIonApp = (Story, context) => {
  return (
    <div mode={context.globals.mode}>
      <Story {...context} />
    </div>
  )
}

export const decorators = [withIonApp]
