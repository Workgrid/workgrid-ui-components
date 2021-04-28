import React from 'react'
import { IonRadio, IonItem, IonLabel } from '@ionic/react'

export interface RadioProps {
  /**
   * Label of the radio button
   */
  label: string

  /**
   * Used to add additional context or a description to the label element
   */
  caption?: string

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

export const Radio = ({ name, label, caption, color = 'medium', disabled, value }: RadioProps): JSX.Element => {
  return (
    <IonItem>
      <IonLabel>
        {label}
        {caption && <p>{caption}</p>}
      </IonLabel>
      {/* Added aria-disabled due to: https://github.com/ionic-team/ionic-framework/issues/23513 */}
      <IonRadio color={color} name={name} disabled={disabled} value={value} aria-disabled={disabled} />
    </IonItem>
  )
}
