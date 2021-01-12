import React from 'react'
import { IonLabel, IonList, IonListHeader, IonRadioGroup } from '@ionic/react'

import { RadioGroupChangeEventDetail } from '@ionic/core'
import { RadioProps } from './Radio'

export interface RadioGroupProps {
  /**
   * Label of the radio group
   */
  label: string

  /**
   * Name of the radio group which is submitted with the form data
   */
  name: string

  /**
   * Value of the radio group
   */
  value?: any

  /**
   * A handler for onChange events
   */
  onChange: (event: CustomEvent<RadioGroupChangeEventDetail>) => void

  /**
   * Radios to render in the group
   */
  children: React.ReactElement<RadioProps>[] | React.ReactElement<RadioProps>
}

export const RadioGroup = ({ name, label, value, onChange, children }: RadioGroupProps): JSX.Element => {
  return (
    <IonList>
      <IonRadioGroup name={name} value={value} onIonChange={onChange}>
        <IonListHeader>
          <IonLabel>{label}</IonLabel>
        </IonListHeader>
        {children}
      </IonRadioGroup>
    </IonList>
  )
}
