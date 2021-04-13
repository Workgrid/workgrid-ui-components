import React, { ComponentProps } from 'react'
import { IonTextarea, IonItem, IonLabel, IonNote } from '@ionic/react'
import { TextareaChangeEventDetail } from '@ionic/core'
import styled from 'styled-components'

export type TextareaProps = {
  /**
   * Id of the input
   */
  id?: string

  /**
   * A handler for onChange events
   */
  onChange?: (event: CustomEvent<TextareaChangeEventDetail>) => void

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
  type?: 'decimal' | 'email' | 'none' | 'numeric' | 'search' | 'tel' | 'text' | 'url'

  /**
   * Label text of the input
   */
  label: string

  /**
   * Invalid Text of input
   */
  invalidText?: string
} & Pick<
  ComponentProps<typeof IonTextarea>,
  | 'autoGrow'
  | 'autocapitalize'
  | 'autofocus'
  | 'cols'
  | 'debounce'
  | 'disabled'
  | 'enterkeyhint'
  | 'inputmode'
  | 'maxlength'
  | 'minlength'
  | 'name'
  | 'placeholder'
  | 'readonly'
  | 'required'
  | 'rows'
  | 'spellcheck'
  | 'value'
  | 'wrap'
>

const InvalidNote = styled(IonNote)`
  font-size: 0.75rem;
  padding-inline-start: 1.25rem;
  padding-left: 1.25rem;
  color: var(--ion-color-danger);
`

export const Textarea = React.forwardRef<HTMLIonTextareaElement, TextareaProps>(
  (
    { type = 'text', label, invalidText, onChange, onFocus, onBlur, rows = 2, autoGrow = true, ...rest }: TextareaProps,
    ref
  ): JSX.Element => {
    const invalid = invalidText != null

    return (
      <>
        <IonItem data-testid="ion-item" className={invalid ? 'ion-invalid ion-touched' : undefined}>
          <IonLabel position="stacked">{label}</IonLabel>
          <IonTextarea
            {...rest}
            autoGrow={autoGrow}
            rows={rows}
            inputmode={type}
            onIonChange={onChange}
            onIonFocus={onFocus}
            onIonBlur={onBlur}
            ref={ref}
          />
        </IonItem>
        {invalid && <InvalidNote role="alert">{invalidText}</InvalidNote>}
      </>
    )
  }
)

Textarea.displayName = 'Textarea'
