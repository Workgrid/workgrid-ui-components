import React, { useState } from 'react'
import {
  IonPage,
  IonContent,
  IonRefresher,
  IonRefresherContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonBackButton,
  IonIcon,
  IonImg
} from '@ionic/react'
import { RefresherEventDetail } from '@ionic/core'
import styled from 'styled-components'
import { Radio } from './Radio'
import { RadioGroup } from './RadioGroup'
import { Button } from './Button'
import { arrowForwardOutline, refresh, refreshOutline } from 'ionicons/icons'
import noSpaces from '../assets/no-spaces.svg'

export interface SpacesProps {
  /**
   * Space the user is currently in
   */
  currentSpaceId?: string

  /**
   * Default space for the user
   */
  defaultSpaceId?: string

  /**
   * List of spaces the user has access to
   */
  spaces: { id: string; name: string }[]

  /**
   * Callback when the user wants to select a new space
   * @param spaceId - space the user selected
   */
  onSpaceSubmit: (spaceId: string) => void

  /**
   * Callback when the user wants to refresh their list of spaces
   */
  onRefresh: () => Promise<void>

  /**
   * Translated strings to display on the screen
   */
  translations: {
    selectASpaceLabel: string
    spacesTitle: string
    spacesCaption: string
    selectSpace: string
    defaultCaption: string
    noSpacesText: string
    refreshText: string
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
`

const VerticallyAndHorizontallyCenteredContent = styled(CenteredContent)`
  height: 100%;
  overflow-y: auto;
`

const Container = styled(HorizontallyCenteredContainer)`
  max-width: 800px;
`

const Page = ({
  translations,
  onRefresh,
  onPullToRefresh,
  children
}: Pick<SpacesProps, 'translations' | 'onRefresh'> & {
  children: React.ReactNode
  onPullToRefresh: (event: CustomEvent<RefresherEventDetail>) => void
}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{translations.spacesTitle}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => onRefresh()}>
              <IonIcon slot="start" icon={refresh} ariaLabel={translations.refreshText} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={onPullToRefresh} data-testid="pullToRefresh">
          <IonRefresherContent />
        </IonRefresher>
        {children}
      </IonContent>
    </IonPage>
  )
}

export const Spaces = ({
  translations,
  defaultSpaceId,
  currentSpaceId,
  spaces,
  onSpaceSubmit,
  onRefresh
}: SpacesProps): JSX.Element => {
  const [selectedSpaceId, setSelectedSpaceId] = useState(currentSpaceId ?? defaultSpaceId ?? spaces[0]?.id)

  const onPullToRefresh = async (e: CustomEvent<RefresherEventDetail>) => {
    await onRefresh()
    e.detail.complete()
  }

  if (spaces.length === 0) {
    return (
      <Page translations={translations} onRefresh={onRefresh} onPullToRefresh={onPullToRefresh}>
        <VerticallyAndHorizontallyCenteredContent>
          <Container>
            {/* Image is purely decorative which is why the alt tag is empty. Reference: https://www.w3.org/WAI/tutorials/images/decorative/ */}
            <IonImg src={noSpaces} alt="" />
            <h3>{translations.noSpacesText}</h3>
            <Button icon={refreshOutline} iconPosition="start" onClick={() => onRefresh()}>
              {translations.refreshText}
            </Button>
          </Container>
        </VerticallyAndHorizontallyCenteredContent>
      </Page>
    )
  }

  return (
    <Page translations={translations} onRefresh={onRefresh} onPullToRefresh={onPullToRefresh}>
      <CenteredContent>
        <form
          style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '800px' }}
          onSubmit={e => {
            e.preventDefault()
            onSpaceSubmit(selectedSpaceId)
          }}
        >
          <div style={{ width: '100%' }}>
            <RadioGroup
              name="spaces"
              label={translations.selectASpaceLabel}
              caption={currentSpaceId ? translations.spacesCaption : undefined}
              value={selectedSpaceId}
              onChange={e => setSelectedSpaceId(e.detail.value)}
            >
              {spaces.map(space => {
                return (
                  <Radio
                    key={space.id}
                    name={space.id}
                    value={space.id}
                    label={space.name}
                    caption={space.id === defaultSpaceId ? translations.defaultCaption : undefined}
                  />
                )
              })}
            </RadioGroup>
          </div>
          <div style={{ alignSelf: 'flex-end', width: '125px' }} className="ion-padding-top ion-padding-end">
            <Button type="submit" icon={arrowForwardOutline} iconPosition="end" expand="block">
              {translations.selectSpace}
            </Button>
          </div>
        </form>
      </CenteredContent>
    </Page>
  )
}
