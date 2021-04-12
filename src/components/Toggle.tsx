import React, { ComponentProps } from 'react'
import { IonToggle, IonItem, IonLabel } from '@ionic/react'
import { ToggleChangeEventDetail } from '@ionic/core'

export type ToggleProps = {
  /**
   * A handler for onChange events
   */
  onChange?: (event: CustomEvent<ToggleChangeEventDetail>) => void

  /**
   * A handler for onFocus events
   */
  onFocus?: (event: CustomEvent<void>) => void

  /**
   * A handler for onBlur events
   */
  onBlur?: (event: CustomEvent<void>) => void

  /**
   * Label text of the input
   */
  label: string
} & Pick<ComponentProps<typeof IonToggle>, 'checked' | 'value' | 'disabled' | 'name'>

export const Toggle = React.forwardRef<HTMLIonToggleElement, ToggleProps>(
  ({ label, onChange, onFocus, onBlur, ...rest }: ToggleProps, ref): JSX.Element => {
    return (
      <IonItem lines="none">
        <IonLabel>{label}</IonLabel>
        <IonToggle {...rest} onIonChange={onChange} onIonFocus={onFocus} onIonBlur={onBlur} slot="end" ref={ref} />
      </IonItem>
    )
  }
)

Toggle.displayName = 'Toggle'
