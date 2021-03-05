import React, { useState } from 'react'
import { IonAvatar, IonImg } from '@ionic/react'

export interface AvatarProps {
  avatarUrl: string
  avatar: string
}

const Initials = ({ children }: { children: string }) => (
  <div
    style={{
      backgroundColor: 'var(--ion-color-medium)',
      color: 'var(--ion-color-medium-contrast)',
      borderRadius: 'var(--border-radius)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: '100%',
      height: '100%'
    }}
  >
    <span>{children}</span>
  </div>
)

export const Avatar = ({ avatarUrl, avatar }: AvatarProps): JSX.Element => {
  const initials = avatar
    .split(' ')
    .map(namePart => namePart[0])
    .join('')
    .substr(0, 2)

  const [showInitials, setShowInitials] = useState(true)

  const onImageDidload = () => {
    setShowInitials(false)
  }

  return (
    <IonAvatar slot="start" style={{ position: 'relative' }}>
      {showInitials && <Initials>{initials}</Initials>}
      <IonImg src={avatarUrl} onIonImgDidLoad={onImageDidload} alt={avatar} />
    </IonAvatar>
  )
}
