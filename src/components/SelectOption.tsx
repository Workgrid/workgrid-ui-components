import React from 'react'
import { IonSelectOption } from '@ionic/react'

export interface SelectOptionProps {
  /**
   * Label of the SelectOption button
   */
  label: string

  /**
   * Whether the SelectOption is disabled or not
   */
  disabled?: boolean

  /**
   * Value of the SelectOption button
   */
  value: any | null
}

export const SelectOption = ({ label, disabled, value }: SelectOptionProps): JSX.Element => {
  return (
    <IonSelectOption disabled={disabled} value={value}>
      {label}
    </IonSelectOption>
  )
}
