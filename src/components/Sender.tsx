import React, { useState } from 'react'
import { IonAvatar, IonImg, IonItem, IonLabel, IonText } from '@ionic/react'
import { fromNow } from './fromNow'
import { IndicatorProps } from './Indicator'
import { useLocale } from './LocaleProvider'

export interface SenderProps {
  /**
   * Image of the sender
   */
  imageUrl: string

  /**
   * Fallback image to use if imageUrl does not exist
   */
  fallbackImageUrl: string

  /**
   * Who the sender is
   */
  from: string

  /**
   * Who it was sent to
   */
  to?: string

  /**
   * An element representing a new indicator
   */
  Indicator?: React.ReactElement<IndicatorProps>

  /**
   * When the communication was set
   */
  timestamp?: Date
}

export const Sender = ({ imageUrl, fallbackImageUrl, from, Indicator, to, timestamp }: SenderProps): JSX.Element => {
  const [senderImageUrl, setImageUrl] = useState(imageUrl)
  const { locale } = useLocale()

  const onIonImageError = () => {
    setImageUrl(fallbackImageUrl)
  }

  return (
    <IonItem lines="none" style={{ '--padding-start': 0, backgroundColor: 'var(--ion-background-color)' }}>
      <IonAvatar slot="start" style={{ position: 'relative' }}>
        <IonImg src={senderImageUrl} onIonError={onIonImageError} alt={from} />
      </IonAvatar>
      <IonLabel>
        <h3>
          {from}
          {timestamp && (
            <IonText color="medium" className="ion-padding-start">
              {fromNow({ timestamp, locale })}
            </IonText>
          )}
        </h3>

        {to && (
          <p>
            {Indicator} {to}
          </p>
        )}
      </IonLabel>
    </IonItem>
  )
}
