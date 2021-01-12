import React from 'react'
import { IonItem, IonLabel, IonText } from '@ionic/react'
import { Avatar } from './Avatar'
import { fromNow } from './fromNow'

export interface CommenterProps {
  /**
   * Image of the commenter
   */
  avatarUrl: string

  /**
   * Who the commenter is
   */
  commenter: string

  /**
   * When the comment was made
   */
  timestamp: Date

  /**
   * Locale of the current user. This is used for date/time formatting
   */
  locale: string
}

export const Commenter = ({ avatarUrl, commenter, timestamp, locale = 'en' }: CommenterProps): JSX.Element => {
  return (
    <IonItem lines={'none'}>
      <Avatar avatarUrl={avatarUrl} avatar={commenter} />
      <IonLabel>
        <h3>
          {commenter}
          <IonText color={'medium'} className={'ion-padding-start'}>
            {fromNow(locale, timestamp)}
          </IonText>
        </h3>
      </IonLabel>
    </IonItem>
  )
}
