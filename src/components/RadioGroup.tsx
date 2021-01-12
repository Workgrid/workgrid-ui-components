import React from 'react'
import { IonLabel, IonList, IonListHeader, IonRadioGroup } from '@ionic/react'

import { RadioGroupChangeEventDetail } from '@ionic/core'

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
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ name, label, value, onChange, children }) => {
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
