import React, { ComponentProps } from 'react'
import { CardElement } from '../types/card-element'
import { SNSeparator } from './SNSeparator'
import { Controller } from 'react-hook-form'
import { Select } from './Select'
import { SelectOptionProps } from './SelectOption'
import { useNotificationDetailTranslations } from './SNNotificationDetailTranslationsProvider'
import { SNInputWrapper } from './SNInputWrapper'

export type SNInputChoiceSetProps = {
  label: string
  id: ComponentProps<typeof Controller>['name']
  value?: string
  isRequired?: boolean
  children: React.ReactElement<SelectOptionProps>[] | React.ReactElement<SelectOptionProps>
  isMultiSelect?: boolean
} & CardElement

export const SNInputChoiceSet = ({
  id,
  label,
  value,
  isRequired = false,
  isMultiSelect = false,
  children,
  separator,
  spacing
}: SNInputChoiceSetProps): JSX.Element => {
  let values: string | string[] | undefined = value

  if (isMultiSelect) {
    values = value?.includes(',') ? value?.split(',').map(val => val.trim()) : value
  }

  const validValues = React.Children.map(children, child => child.props.value)

  const translations = useNotificationDetailTranslations()

  return (
    <SNSeparator spacing={spacing} separator={separator}>
      <Controller
        name={id}
        defaultValue={values}
        rules={{ required: isRequired, validate: { isMultiSelect: () => isMultiSelect, values: () => validValues } }}
        render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => {
          let errorMessage = error?.message

          if (Array.isArray(error)) {
            errorMessage = error.find(error => error != null)?.message
          }

          return (
            <SNInputWrapper>
              <Select
                id={id}
                name={name}
                label={label}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                multiple={isMultiSelect}
                translations={{
                  cancelText: translations.choiceSelectCancelText,
                  okText: translations.choiceSelectOkText
                }}
                interface="alert"
                invalidText={errorMessage}
                data-snelement="InputChoiceSet"
                ref={ref}
              >
                {children}
              </Select>
            </SNInputWrapper>
          )
        }}
      />
    </SNSeparator>
  )
}
