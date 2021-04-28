import React, { ComponentProps } from 'react'
import { CardElement } from '../types/card-element'
import { SNSeparator } from './SNSeparator'
import { Toggle } from './Toggle'
import { Controller } from 'react-hook-form'
import { ToggleChangeEventDetail } from '@ionic/core'
import { SNInputWrapper } from './SNInputWrapper'

export type SNInputTextProps = {
  id: ComponentProps<typeof Controller>['name']
  title: string
  value?: string
  valueOff: string
  valueOn: string
} & CardElement

export const SNInputToggle = ({
  id,
  title,
  value,
  valueOff,
  valueOn,
  separator,
  spacing
}: SNInputTextProps): JSX.Element => {
  return (
    <SNSeparator spacing={spacing} separator={separator}>
      <Controller
        name={id}
        defaultValue={value}
        rules={{ validate: { valueOff: () => valueOff, valueOn: () => valueOn } }}
        render={({ field: { onChange, onBlur, value, name, ref } }) => {
          return (
            <SNInputWrapper>
              <Toggle
                name={name}
                label={title}
                value={value ?? valueOff}
                onBlur={onBlur}
                onChange={(event: CustomEvent<ToggleChangeEventDetail>) => {
                  onChange(event.detail.checked ? valueOn : valueOff)
                }}
                data-snelement="InputToggle"
                ref={ref}
              />
            </SNInputWrapper>
          )
        }}
      />
    </SNSeparator>
  )
}
