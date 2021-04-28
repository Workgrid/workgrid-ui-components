import React from 'react'
import { IonItem, IonLabel, IonText } from '@ionic/react'
import { Avatar } from './Avatar'
import { fromNow } from './fromNow'
import { useLocale } from './LocaleProvider'

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
}

export const Commenter = ({ avatarUrl, commenter, timestamp }: CommenterProps): JSX.Element => {
  const { locale } = useLocale()

  return (
    <IonItem lines="none">
      <Avatar avatarUrl={avatarUrl} avatar={commenter} />
      <IonLabel>
        <h3>
          {commenter}
          <IonText color="medium" className="ion-padding-start">
            {fromNow({ timestamp, locale })}
          </IonText>
        </h3>
      </IonLabel>
    </IonItem>
  )
}
