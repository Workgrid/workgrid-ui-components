import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Spaces, SpacesProps } from './Spaces'

export default {
  title: 'Screens/Spaces',
  component: Spaces,
  argTypes: {
    translations: { control: false }
  }
} as Meta

const defaults = {
  translations: {
    selectASpaceLabel: 'Select a Space',
    spacesTitle: `Spaces`,
    selectSpace: 'Go',
    defaultCaption: 'Default',
    spacesCaption: 'You are currently in Space Two',
    noSpacesText: 'No spaces found',
    refreshText: 'Refresh'
  }
}

const Template: Story<SpacesProps> = args => (
  <Spaces
    {...args}
    translations={defaults.translations}
    onRefresh={() => new Promise(resolve => setTimeout(resolve, 3000))}
  />
)

export const WithDefaultAndCurrent = Template.bind({})

WithDefaultAndCurrent.args = {
  defaultSpaceId: 'space-1',
  currentSpaceId: 'space-2',
  spaces: [
    {
      id: 'space-1',
      name: 'Space One'
    },
    {
      id: 'space-2',
      name: 'Space Two'
    },
    {
      id: 'space-3',
      name: 'Space Three'
    }
  ]
}

export const NoCurrentSpace = Template.bind({})

NoCurrentSpace.args = {
  spaces: [
    {
      id: 'space-1',
      name: 'Space One'
    },
    {
      id: 'space-2',
      name: 'Space Two'
    },
    {
      id: 'space-3',
      name: 'Space Three'
    }
  ]
}

export const NoSpaces = Template.bind({})

NoSpaces.args = {
  spaces: []
}
