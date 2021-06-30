import React, { ComponentProps } from 'react'
import { CardElement } from '../types/card-element'
import { SNSeparator } from './SNSeparator'
import { Range } from './Range'
import { Controller } from 'react-hook-form'
import { SNInputWrapper } from './SNInputWrapper'

export type SNInputRangeProps = {
  label: string
  id: ComponentProps<typeof Controller>['name']
  value?: string
  isRequired?: boolean
  min: number
  max: number
  step?: number
} & CardElement

export const SNInputRange = ({
  id,
  label,
  value,
  isRequired = false,
  min,
  max,
  step,
  separator,
  spacing
}: SNInputRangeProps): JSX.Element => {
  return (
    <SNSeparator spacing={spacing} separator={separator}>
      <Controller
        name={id}
        defaultValue={value}
        rules={{ required: isRequired, min, max }}
        render={({ field: { onChange, onBlur, value, name, ref } }) => {
          return (
            <SNInputWrapper>
              <Range
                name={name}
                label={label}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                min={min}
                max={max}
                step={step}
                data-snelement="InputRange"
                ref={ref}
              />
            </SNInputWrapper>
          )
        }}
      />
    </SNSeparator>
  )
}
