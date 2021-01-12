import React, { useState } from 'react'
import { IonAvatar, IonImg, IonItem, IonLabel, IonText } from '@ionic/react'
import { fromNow } from './fromNow'

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
  NewIndicator?: JSX.Element

  /**
   * When the communication was set
   */
  timestamp: Date

  /**
   * Locale of the current user. This is used for date/time formatting
   */
  locale: string
}

export const Sender: React.FC<SenderProps> = ({
  imageUrl,
  fallbackImageUrl,
  from,
  NewIndicator,
  to,
  timestamp,
  locale = 'en'
}) => {
  const [senderImageUrl, setImageUrl] = useState(imageUrl)

  const onIonImageError = () => {
    setImageUrl(fallbackImageUrl)
  }

  return (
    <IonItem lines={'none'}>
      <IonAvatar slot={'start'} style={{ position: 'relative' }}>
        <IonImg src={senderImageUrl} onIonError={onIonImageError} alt={from} />
      </IonAvatar>
      <IonLabel>
        <h3>
          {from}
          <IonText color={'medium'} className={'ion-padding-start'}>
            {fromNow(locale, timestamp)}
          </IonText>
        </h3>

        {to && (
          <p>
            {NewIndicator} {to}
          </p>
        )}
      </IonLabel>
    </IonItem>
  )
}
