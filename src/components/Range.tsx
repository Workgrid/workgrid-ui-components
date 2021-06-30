import React, { ComponentProps } from 'react'
import { IonRange, IonItem, IonLabel } from '@ionic/react'
import { RangeChangeEventDetail } from '@ionic/core'

export type RangeProps = {
  /**
   * Id of the Range
   */
  id?: string

  /**
   * A handler for onChange events
   */
  onChange?: (event: CustomEvent<RangeChangeEventDetail>) => void

  /**
   * A handler for onFocus events
   */
  onFocus?: (event: CustomEvent<void>) => void

  /**
   * A handler for onBlur events
   */
  onBlur?: (event: CustomEvent<void>) => void

  /**
   * Label text of the Range
   */
  label: string
} & Pick<
  ComponentProps<typeof IonRange>,
  'max' | 'min' | 'disabled' | 'name' | 'snaps' | 'step' | 'ticks' | 'value' | 'pin'
>

export const Range = React.forwardRef<HTMLIonRangeElement, RangeProps>(
  ({ label, onChange, onFocus, onBlur, pin = true, ...rest }: RangeProps, ref): JSX.Element => {
    return (
      <IonItem lines="none">
        <IonLabel position="stacked">{label}</IonLabel>
        <IonRange
          style={{ '--knob-background': 'var(--ion-color-secondary)' }}
          {...rest}
          onIonChange={onChange}
          onIonFocus={onFocus}
          onIonBlur={onBlur}
          ref={ref}
          pin={pin}
          aria-label={label}
        />
      </IonItem>
    )
  }
)

Range.displayName = 'Range'
