import React from 'react'
import { IonInput, IonItem, IonLabel, IonIcon, IonNote } from '@ionic/react'
import { InputChangeEventDetail } from '@ionic/core'

type IonKeysToExclude = 'ionChange' | 'onIonBlur' | 'onIonFocus' | 'onIonInput' | 'mode'

export interface InputProps extends Omit<HTMLIonInputElement, IonKeysToExclude> {
  /**
   * A handler for onChange events
   */
  onChange: (event: CustomEvent<InputChangeEventDetail>) => void

  /**
   * A handler for onFocus events
   */
  onFocus?: React.FocusEventHandler<HTMLInputElement>

  /**
   * A handler for onBlur events
   */
  onBlur?: React.FocusEventHandler<HTMLInputElement>

  /**
   * Type of the input
   */
  type: 'text' | 'email' | 'number' | 'url' | 'search' | 'tel'

  /**
   * Label of the input
   */
  label: string

  /**
   * Name of the input which is submitted with the form data
   */
  name: string

  /**
   * Indicator to identify that the input is invalid
   */
  inputInvalid?: boolean

  /**
   * Invalid Text of input
   */
  inputInvalidText?: string

  /**
   * Test id attribute
   */
  testId?: string
}

export const Input = ({
  type = 'text',
  label,
  name,
  inputInvalid,
  inputInvalidText,
  testId,
  onChange,
  ...inputProps
}: InputProps): JSX.Element => {
  return (
    <>
      <IonItem data-testid={'ion-item'} className={inputInvalid ? 'ion-invalid ion-touched' : undefined}>
        <IonLabel position={'stacked'} id={name}>
          {label}
        </IonLabel>
        <IonInput {...inputProps} type={type} onIonChange={onChange} data-testid={testId} />
      </IonItem>
      {inputInvalid && <IonNote className={'invalid'}>{inputInvalidText}</IonNote>}
    </>
  )
}
