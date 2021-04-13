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
   * Used to add additional context or a description to the label element
   */
  caption?: string

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

export const RadioGroup = React.forwardRef<HTMLIonRadioGroupElement, RadioGroupProps>(
  ({ name, label, caption, value, onChange, children }: RadioGroupProps, ref): JSX.Element => {
    return (
      <IonList>
        <IonRadioGroup name={name} value={value} onIonChange={onChange} ref={ref}>
          <IonListHeader>
            <IonLabel>
              {label}
              {caption && <p>{caption}</p>}
            </IonLabel>
          </IonListHeader>
          {children}
        </IonRadioGroup>
      </IonList>
    )
  }
)

RadioGroup.displayName = 'RadioGroup'
