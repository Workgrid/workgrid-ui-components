import { IonContent, IonPage } from '@ionic/react'
import React from 'react'

const decorators = [
  Story => (
    <IonPage>
      <IonContent>
        <Story />
      </IonContent>
    </IonPage>
  )
]

export default decorators
