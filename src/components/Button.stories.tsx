import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from './Button'
import { star, add, airplane, trashOutline } from 'ionicons/icons'

interface IconMap {
  [index: string]: string
}
const iconMap: IconMap = { star, add, airplane, trashOutline }

export default {
  title: 'Components/Buttons',
  component: Button,
  argTypes: {
    icon: {
      name: 'icon',
      variant: { name: 'string', required: false },
      control: {
        variant: 'select',
        options: [...Object.keys(iconMap), null]
      }
    },
    children: {
      name: 'label'
    }
  }
} as Meta

const Template: Story<ButtonProps> = args => {
  const icon = iconMap[args.icon as string]

  return (
    <Button {...args} icon={icon}>
      {args.children}
    </Button>
  )
}

export const FilledText = Template.bind({})

FilledText.args = {
  children: ' Button',
  variant: 'primary'
}

export const FilledTextAndIconStart = Template.bind({})

FilledTextAndIconStart.args = {
  ...FilledText.args,
  icon: 'add'
}

export const FilledTextAndIconEnd = Template.bind({})

FilledTextAndIconEnd.args = {
  ...FilledText.args,
  icon: 'add',
  iconPosition: 'end'
}

export const FilledIcon = Template.bind({})

FilledIcon.args = {
  ...FilledTextAndIconEnd.args,
  iconOnly: true
}

export const OutlinedText = Template.bind({})

OutlinedText.args = {
  ...FilledText.args,
  fill: 'outline'
}

export const OutlinedTextAndIconStart = Template.bind({})

OutlinedTextAndIconStart.args = {
  ...OutlinedText.args,

  icon: 'add'
}

export const OutlinedTextAndIconEnd = Template.bind({})

OutlinedTextAndIconEnd.args = {
  ...OutlinedText.args,
  icon: 'add',
  iconPosition: 'end'
}

export const OutlinedIcon = Template.bind({})

OutlinedIcon.args = {
  ...OutlinedTextAndIconEnd.args,
  iconOnly: true
}

export const GhostText = Template.bind({})

GhostText.args = {
  ...FilledText.args,
  fill: 'clear'
}

export const GhostTextAndIconStart = Template.bind({})

GhostTextAndIconStart.args = {
  ...GhostText.args,

  icon: 'add'
}

export const GhostTextAndIconEnd = Template.bind({})

GhostTextAndIconEnd.args = {
  ...GhostText.args,
  icon: 'add',
  iconPosition: 'end'
}

export const GhostIcon = Template.bind({})

GhostIcon.args = {
  ...GhostTextAndIconEnd.args,
  iconOnly: true
}
