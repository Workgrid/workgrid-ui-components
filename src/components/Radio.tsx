import React from 'react'
import { IonRadio, IonItem, IonLabel } from '@ionic/react'

export interface RadioProps {
  /**
   * Label of the radio button
   */
  label: string

  /**
   * Name of the radio which is submitted with the form data
   */
  name?: string

  /**
   * Color of the radio button
   */
  color?: 'medium' | 'danger'

  /**
   * Whether the radio is disabled or not
   */
  disabled?: boolean

  /**
   * Value of the radio button
   */
  value: any | null
}

export const Radio = ({ name, label, color = 'medium', disabled, value }: RadioProps): JSX.Element => {
  return (
    <IonItem lines={'none'}>
      <IonLabel>{label}</IonLabel>
      <IonRadio color={color} name={name} disabled={disabled} value={value} />
    </IonItem>
  )
}
