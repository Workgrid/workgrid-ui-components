import React, { ComponentProps } from 'react'
import { CardElement } from '../types/card-element'
import { SNSeparator } from './SNSeparator'
import { Input } from './Input'
import { Controller } from 'react-hook-form'
import { Textarea } from './Textarea'
import { SNInputWrapper } from './SNInputWrapper'

export type SNInputTextProps = {
  label: string
  id: ComponentProps<typeof Controller>['name']
  value?: string
  isRequired?: boolean
  isMultiline?: boolean
  maxLength?: number
  placeholder?: string
  type?: 'text' | 'tel' | 'url' | 'email'
} & CardElement

export const SNInputText = ({
  id,
  label,
  value,
  placeholder,
  isRequired = false,
  isMultiline = false,
  type = 'text',
  maxLength,
  separator,
  spacing
}: SNInputTextProps): JSX.Element => {
  const Component = isMultiline ? Textarea : Input

  return (
    <SNSeparator spacing={spacing} separator={separator}>
      <Controller
        name={id}
        defaultValue={value}
        rules={{ required: isRequired, maxLength, validate: { type: () => type } }}
        render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => {
          return (
            <SNInputWrapper>
              <Component
                name={name}
                label={label}
                value={value}
                placeholder={placeholder}
                onBlur={onBlur}
                onChange={onChange}
                invalidText={error?.message}
                data-snelement="InputText"
                ref={ref}
              />
            </SNInputWrapper>
          )
        }}
      />
    </SNSeparator>
  )
}
