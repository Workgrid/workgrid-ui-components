import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from './Button'
import { star, add, airplane, trashOutline } from 'ionicons/icons'

interface IconMap {
  [index: string]: string
}
const iconMap: IconMap = { star, add, airplane, trashOutline }

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    icon: {
      name: 'icon',
      type: { name: 'string', required: false },
      control: {
        type: 'select',
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

export const PrimaryFilledText = Template.bind({})

PrimaryFilledText.args = {
  children: 'Primary Button',
  type: 'primary'
}

export const PrimaryFilledTextAndIconStart = Template.bind({})

PrimaryFilledTextAndIconStart.args = {
  ...PrimaryFilledText.args,

  icon: 'add'
}

export const PrimaryFilledTextAndIconEnd = Template.bind({})

PrimaryFilledTextAndIconEnd.args = {
  ...PrimaryFilledText.args,
  icon: 'add',
  iconPosition: 'end'
}

export const PrimaryFilledIcon = Template.bind({})

PrimaryFilledIcon.args = {
  ...PrimaryFilledTextAndIconEnd.args,
  iconOnly: true
}

export const PrimaryOutlinedText = Template.bind({})

PrimaryOutlinedText.args = {
  ...PrimaryFilledText.args,
  fill: 'outline'
}

export const PrimaryOutlinedTextAndIconStart = Template.bind({})

PrimaryOutlinedTextAndIconStart.args = {
  ...PrimaryOutlinedText.args,

  icon: 'add'
}

export const PrimaryOutlinedTextAndIconEnd = Template.bind({})

PrimaryOutlinedTextAndIconEnd.args = {
  ...PrimaryOutlinedText.args,
  icon: 'add',
  iconPosition: 'end'
}

export const PrimaryOutlinedIcon = Template.bind({})

PrimaryOutlinedIcon.args = {
  ...PrimaryOutlinedTextAndIconEnd.args,
  iconOnly: true
}

export const PrimaryGhostText = Template.bind({})

PrimaryGhostText.args = {
  ...PrimaryFilledText.args,
  fill: 'clear'
}

export const PrimaryGhostTextAndIconStart = Template.bind({})

PrimaryGhostTextAndIconStart.args = {
  ...PrimaryGhostText.args,

  icon: 'add'
}

export const PrimaryGhostTextAndIconEnd = Template.bind({})

PrimaryGhostTextAndIconEnd.args = {
  ...PrimaryGhostText.args,
  icon: 'add',
  iconPosition: 'end'
}

export const PrimaryGhostIcon = Template.bind({})

PrimaryGhostIcon.args = {
  ...PrimaryGhostTextAndIconEnd.args,
  iconOnly: true
}

export const SecondaryFilledText = Template.bind({})

SecondaryFilledText.args = {
  children: 'Secondary Button',
  type: 'secondary'
}

export const SecondaryFilledTextAndIconStart = Template.bind({})

SecondaryFilledTextAndIconStart.args = {
  ...SecondaryFilledText.args,

  icon: 'add'
}

export const SecondaryFilledTextAndIconEnd = Template.bind({})

SecondaryFilledTextAndIconEnd.args = {
  ...SecondaryFilledText.args,
  icon: 'add',
  iconPosition: 'end'
}

export const SecondaryFilledIcon = Template.bind({})

SecondaryFilledIcon.args = {
  ...SecondaryFilledTextAndIconEnd.args,
  iconOnly: true
}

export const SecondaryOutlinedText = Template.bind({})

SecondaryOutlinedText.args = {
  ...SecondaryFilledText.args,
  fill: 'outline'
}

export const SecondaryOutlinedTextAndIconStart = Template.bind({})

SecondaryOutlinedTextAndIconStart.args = {
  ...SecondaryOutlinedText.args,

  icon: 'add'
}

export const SecondaryOutlinedTextAndIconEnd = Template.bind({})

SecondaryOutlinedTextAndIconEnd.args = {
  ...SecondaryOutlinedText.args,
  icon: 'add',
  iconPosition: 'end'
}

export const SecondaryOutlinedIcon = Template.bind({})

SecondaryOutlinedIcon.args = {
  ...SecondaryOutlinedTextAndIconEnd.args,
  iconOnly: true
}

export const SecondaryGhostText = Template.bind({})

SecondaryGhostText.args = {
  ...SecondaryFilledText.args,
  fill: 'clear'
}

export const SecondaryGhostTextAndIconStart = Template.bind({})

SecondaryGhostTextAndIconStart.args = {
  ...SecondaryGhostText.args,

  icon: 'add'
}

export const SecondaryGhostTextAndIconEnd = Template.bind({})

SecondaryGhostTextAndIconEnd.args = {
  ...SecondaryGhostText.args,
  icon: 'add',
  iconPosition: 'end'
}

export const SecondaryGhostIcon = Template.bind({})

SecondaryGhostIcon.args = {
  ...SecondaryGhostTextAndIconEnd.args,
  iconOnly: true
}

export const TertiaryFilledText = Template.bind({})

TertiaryFilledText.args = {
  children: 'Tertiary Button',
  type: 'tertiary'
}

export const TertiaryFilledTextAndIconStart = Template.bind({})

TertiaryFilledTextAndIconStart.args = {
  ...TertiaryFilledText.args,
  icon: 'add',
  iconPosition: 'start'
}

export const TertiaryFilledTextAndIconEnd = Template.bind({})

TertiaryFilledTextAndIconEnd.args = {
  ...TertiaryFilledText.args,
  icon: 'add',
  iconPosition: 'end'
}

export const TertiaryFilledIcon = Template.bind({})

TertiaryFilledIcon.args = {
  ...TertiaryFilledTextAndIconEnd.args,
  iconOnly: true
}

export const TertiaryOutlinedText = Template.bind({})

TertiaryOutlinedText.args = {
  ...TertiaryFilledText.args,
  fill: 'outline'
}

export const TertiaryOutlinedTextAndIconStart = Template.bind({})

TertiaryOutlinedTextAndIconStart.args = {
  ...TertiaryOutlinedText.args,

  icon: 'add'
}

export const TertiaryOutlinedTextAndIconEnd = Template.bind({})

TertiaryOutlinedTextAndIconEnd.args = {
  ...TertiaryOutlinedText.args,
  icon: 'add',
  iconPosition: 'end'
}

export const TertiaryOutlinedIcon = Template.bind({})

TertiaryOutlinedIcon.args = {
  ...TertiaryOutlinedTextAndIconEnd.args,
  iconOnly: true
}

export const TertiaryGhostText = Template.bind({})

TertiaryGhostText.args = {
  ...TertiaryFilledText.args,
  fill: 'clear'
}

export const TertiaryGhostTextAndIconStart = Template.bind({})

TertiaryGhostTextAndIconStart.args = {
  ...TertiaryGhostText.args,

  icon: 'add'
}

export const TertiaryGhostTextAndIconEnd = Template.bind({})

TertiaryGhostTextAndIconEnd.args = {
  ...TertiaryGhostText.args,
  icon: 'add',
  iconPosition: 'end'
}

export const TertiaryGhostIcon = Template.bind({})

TertiaryGhostIcon.args = {
  ...TertiaryGhostTextAndIconEnd.args,
  iconOnly: true
}

export const DestructiveFilledText = Template.bind({})

DestructiveFilledText.args = {
  children: 'Destructive Button',
  type: 'danger'
}

export const DestructiveFilledTextAndIconStart = Template.bind({})

DestructiveFilledTextAndIconStart.args = {
  ...DestructiveFilledText.args,
  icon: 'trashOutline',
  iconPosition: 'start'
}

export const DestructiveFilledTextAndIconEnd = Template.bind({})

DestructiveFilledTextAndIconEnd.args = {
  ...DestructiveFilledText.args,
  icon: 'trashOutline',
  iconPosition: 'end'
}

export const DestructiveFilledIcon = Template.bind({})

DestructiveFilledIcon.args = {
  ...DestructiveFilledTextAndIconEnd.args,
  iconOnly: true
}

export const DestructiveOutlinedText = Template.bind({})

DestructiveOutlinedText.args = {
  ...DestructiveFilledText.args,
  fill: 'outline'
}

export const DestructiveOutlinedTextAndIconStart = Template.bind({})

DestructiveOutlinedTextAndIconStart.args = {
  ...DestructiveOutlinedText.args,

  icon: 'trashOutline'
}

export const DestructiveOutlinedTextAndIconEnd = Template.bind({})

DestructiveOutlinedTextAndIconEnd.args = {
  ...DestructiveOutlinedText.args,
  icon: 'trashOutline',
  iconPosition: 'end'
}

export const DestructiveOutlinedIcon = Template.bind({})

DestructiveOutlinedIcon.args = {
  ...DestructiveOutlinedTextAndIconEnd.args,
  iconOnly: true
}

export const DestructiveGhostText = Template.bind({})

DestructiveGhostText.args = {
  ...DestructiveFilledText.args,
  fill: 'clear'
}

export const DestructiveGhostTextAndIconStart = Template.bind({})

DestructiveGhostTextAndIconStart.args = {
  ...DestructiveGhostText.args,

  icon: 'trashOutline'
}

export const DestructiveGhostTextAndIconEnd = Template.bind({})

DestructiveGhostTextAndIconEnd.args = {
  ...DestructiveGhostText.args,
  icon: 'trashOutline',
  iconPosition: 'end'
}

export const DestructiveGhostIcon = Template.bind({})

DestructiveGhostIcon.args = {
  ...DestructiveGhostTextAndIconEnd.args,
  iconOnly: true
}
