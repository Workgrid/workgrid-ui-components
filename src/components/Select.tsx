import React, { ComponentProps } from 'react'
import { IonLabel, IonItem, IonSelect, IonNote } from '@ionic/react'

import { SelectChangeEventDetail } from '@ionic/core'
import { SelectOptionProps } from './SelectOption'
import styled from 'styled-components'

export type SelectProps = {
  /**
   * Id of the input
   */
  id?: string

  /**
   * Label of the select group
   */
  label: string

  /**
   * A handler for onChange events
   */
  onChange: (event: CustomEvent<SelectChangeEventDetail>) => void

  /**
   * A handler for onFocus events
   */
  onFocus?: (event: CustomEvent<void>) => void

  /**
   * A handler for onBlur events
   */
  onBlur?: (event: CustomEvent<void>) => void

  /**
   * Options to render
   */
  children: React.ReactElement<SelectOptionProps>[] | React.ReactElement<SelectOptionProps>

  /**
   * Invalid Text of input
   */
  invalidText?: string

  /**
   * Translated strings to display on the screen
   */
  translations: {
    cancelText: string
    okText: string
  }
} & Pick<
  ComponentProps<typeof IonSelect>,
  'name' | 'value' | 'interface' | 'interfaceOptions' | 'multiple' | 'placeholder'
>

const InvalidNote = styled(IonNote)`
  display: block;
  font-size: 0.75rem;
  padding-inline-start: 1.25rem;
  padding-left: 1.25rem;
  color: var(--ion-color-danger);
`

export const Select = React.forwardRef<HTMLIonSelectElement, SelectProps>(
  (
    { label, translations, onChange, onFocus, onBlur, invalidText, children, ...rest }: SelectProps,
    ref
  ): JSX.Element => {
    const invalid = invalidText != null

    return (
      <>
        <IonItem lines="none">
          <IonLabel>{label}</IonLabel>
          <IonSelect
            {...rest}
            cancelText={translations?.cancelText}
            okText={translations?.okText}
            onIonChange={onChange}
            onIonFocus={onFocus}
            onIonBlur={onBlur}
            ref={ref}
          >
            {children}
          </IonSelect>
        </IonItem>
        {invalid && <InvalidNote role="alert">{invalidText}</InvalidNote>}
      </>
    )
  }
)

Select.displayName = 'Select'
