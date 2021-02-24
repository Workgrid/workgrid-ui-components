import React, { FC, ComponentProps } from 'react'
import { IonInput, IonItem, IonLabel, IonNote } from '@ionic/react'
import { InputChangeEventDetail } from '@ionic/core'

export type InputProps = {
  /**
   * A handler for onChange events
   */
  onChange?: (event: CustomEvent<InputChangeEventDetail>) => void

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
  type?: 'text' | 'email' | 'number' | 'url' | 'search' | 'tel'

  /**
   * Label text of the input
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
} & ComponentProps<typeof IonInput>

export const Input: FC<InputProps> = ({
  type = 'text',
  label,
  name,
  inputInvalid,
  inputInvalidText,
  onChange,
  ...rest
}) => {
  return (
    <>
      <IonItem data-testid={'ion-item'} className={inputInvalid ? 'ion-invalid ion-touched' : undefined}>
        <IonLabel position={'stacked'}>{label}</IonLabel>
        <IonInput {...rest} type={type} name={name} onIonChange={onChange} />
      </IonItem>
      {inputInvalid && <IonNote className={'invalid'}>{inputInvalidText}</IonNote>}
    </>
  )
}
