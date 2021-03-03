import React from 'react'
import { IonPage, IonContent, IonImg } from '@ionic/react'
import styled from 'styled-components'
import noNetwork from '../assets/no-network.svg'

export interface NetworkSplashProps {
  /**
   * Whether the network is available or not
   */
  isNetworkAvailable: boolean

  /**
   * Children to render if the network is available
   */
  children: React.ReactNode

  /**
   * Translated strings to display on the screen
   */
  translations: {
    cantConnectToNetwork: string
    pleaseCheckInternetConnection: string
  }
}

const HorizontallyCenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CenteredContent = styled(HorizontallyCenteredContainer)`
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`

const Container = styled(HorizontallyCenteredContainer)`
  max-width: 800px;
`

export const NetworkSplash = ({ isNetworkAvailable, children, translations }: NetworkSplashProps): JSX.Element => {
  if (isNetworkAvailable) {
    return <>{children}</>
  }

  return (
    <IonPage>
      <IonContent>
        {/* tabIndex for accessibility: https://dequeuniversity.com/rules/axe/3.5/scrollable-region-focusable?application=axe-puppeteer */}
        <CenteredContent tabIndex={0}>
          <Container className="ion-padding">
            {/* Image is purely decorative which is why the alt tag is empty. Reference: https://www.w3.org/WAI/tutorials/images/decorative/ */}
            <IonImg src={noNetwork} style={{ paddingBottom: 'calc(var(--ion-padding, 16px) * 2)' }} alt="" />
            <h3>{translations.cantConnectToNetwork}</h3>
            <p>{translations.pleaseCheckInternetConnection}</p>
          </Container>
        </CenteredContent>
      </IonContent>
    </IonPage>
  )
}
