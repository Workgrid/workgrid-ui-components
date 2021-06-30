import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import { Story } from '@storybook/react'

const decorators = [
  (Story: Story) => (
    <IonPage>
      <IonContent>
        <Story />
      </IonContent>
    </IonPage>
  )
]

export default decorators
