import React, { ComponentProps } from 'react'
import { CardElement } from '../types/card-element'
import { SNSeparator } from './SNSeparator'
import { Input } from './Input'
import { Controller } from 'react-hook-form'
import { SNInputWrapper } from './SNInputWrapper'

export type SNInputDateProps = {
  label: string
  id: ComponentProps<typeof Controller>['name']
  value?: string
  isRequired?: boolean
  min?: string
  max?: string
  placeholder?: string
} & CardElement

export const SNInputDate = ({
  id,
  label,
  value,
  isRequired = false,
  min,
  max,
  placeholder,
  separator,
  spacing
}: SNInputDateProps): JSX.Element => {
  return (
    <SNSeparator spacing={spacing} separator={separator}>
      <Controller
        name={id}
        defaultValue={value}
        rules={{ required: isRequired, min, max }}
        render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => {
          return (
            <SNInputWrapper>
              <Input
                type="date"
                name={name}
                label={label}
                value={value}
                placeholder={placeholder}
                onBlur={onBlur}
                onChange={onChange}
                invalidText={error?.message}
                data-snelement="InputDate"
                ref={ref}
              />
            </SNInputWrapper>
          )
        }}
      />
    </SNSeparator>
  )
}
