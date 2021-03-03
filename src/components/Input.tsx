import React, { ComponentProps } from 'react'
import { IonInput, IonItem, IonLabel, IonNote } from '@ionic/react'
import { InputChangeEventDetail } from '@ionic/core'
import styled from 'styled-components'

export type InputProps = Omit<Props, IonKeysToExclude>

type IonKeysToExclude = 'onIonChange' | 'onIonBlur' | 'onIonFocus' | 'onIonInput' | 'mode'

type Props = {
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
  invalid?: boolean

  /**
   * Invalid Text of input
   */
  invalidText?: string
} & ComponentProps<typeof IonInput>

const InvalidNote = styled(IonNote)`
  font-size: 0.75rem;
  padding-inline-start: 1.25rem;
  padding-left: 1.25rem;
  color: var(--ion-color-danger);
`

export const Input = ({
  type = 'text',
  label,
  name,
  invalid,
  invalidText,
  onChange,
  ...rest
}: InputProps): JSX.Element => {
  return (
    <>
      <IonItem data-testid="ion-item" className={invalid ? 'ion-invalid ion-touched' : undefined}>
        <IonLabel position="stacked">{label}</IonLabel>
        <IonInput {...rest} type={type} name={name} onIonChange={onChange} />
      </IonItem>
      {invalid && <InvalidNote>{invalidText}</InvalidNote>}
    </>
  )
}
