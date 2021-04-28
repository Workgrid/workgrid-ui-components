import React, { ComponentProps } from 'react'
import { IonInput, IonItem, IonLabel, IonNote } from '@ionic/react'
import { InputChangeEventDetail } from '@ionic/core'
import styled from 'styled-components'

export type InputProps = {
  /**
   * Id of the input
   */
  id?: string

  /**
   * A handler for onChange events
   */
  onChange?: (event: CustomEvent<InputChangeEventDetail>) => void

  /**
   * A handler for onFocus events
   */
  onFocus?: (event: CustomEvent<FocusEvent>) => void

  /**
   * A handler for onBlur events
   */
  onBlur?: (event: CustomEvent<FocusEvent>) => void

  /**
   * Type of the input
   */
  type?: 'text' | 'email' | 'number' | 'url' | 'search' | 'tel' | 'date' | 'time'

  /**
   * Label text of the input
   */
  label: string

  /**
   * Invalid Text of input
   */
  invalidText?: string
} & Pick<
  ComponentProps<typeof IonInput>,
  | 'accept'
  | 'autocapitalize'
  | 'autocomplete'
  | 'autocorrect'
  | 'autofocus'
  | 'clearInput'
  | 'debounce'
  | 'disabled'
  | 'enterkeyhint'
  | 'inputmode'
  | 'max'
  | 'min'
  | 'maxlength'
  | 'minlength'
  | 'multiple'
  | 'name'
  | 'pattern'
  | 'placeholder'
  | 'readonly'
  | 'required'
  | 'size'
  | 'spellcheck'
  | 'step'
  | 'value'
>

const InvalidNote = styled(IonNote)`
  display: block;
  font-size: 0.75rem;
  padding-inline-start: 1.25rem;
  padding-left: 1.25rem;
  color: var(--ion-color-danger);
`

export const Input = React.forwardRef<HTMLIonInputElement, InputProps>(
  ({ type = 'text', label, invalidText, onChange, onFocus, onBlur, ...rest }: InputProps, ref): JSX.Element => {
    const invalid = invalidText != null

    return (
      <>
        <IonItem data-testid="ion-item" className={invalid ? 'ion-invalid ion-touched' : undefined}>
          <IonLabel position="stacked">{label}</IonLabel>
          <IonInput {...rest} type={type} onIonChange={onChange} onIonFocus={onFocus} onIonBlur={onBlur} ref={ref} />
        </IonItem>
        {invalid && <InvalidNote role="alert">{invalidText}</InvalidNote>}
      </>
    )
  }
)

Input.displayName = 'Input'
