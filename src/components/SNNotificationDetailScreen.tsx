import React, { useState } from 'react'
import { SNNotificationProvider } from './SNNotificationProvider'
import {
  IonPage,
  IonContent,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  IonHeader,
  IonPopover,
  IonList,
  IonItem,
  IonText
} from '@ionic/react'
import {
  SNNotificationDetailTranslationsProps,
  SNNotificationDetailTranslationsProvider,
  useNotificationDetailTranslations
} from './SNNotificationDetailTranslationsProvider'
import { SNAction, SNNotification } from '../types/notification'
import { SNNotificationDetailContent } from './SNNotificationDetailContent'
import { ellipsisHorizontal, trashOutline } from 'ionicons/icons'
import { SNNotificationDetailActionsProvider, useNotificationActions } from './SNNotificationDetailActionsProvider'
import styled from 'styled-components'

export type SNNotificationDetailScreenProps = {
  notification: SNNotification
  onSubmitAction: (data: { [index: string]: string }, action: SNAction) => Promise<void>
  onOpenUrlAction: (url: string) => void
  onDelete: () => Promise<void>
  translations: Omit<SNNotificationDetailTranslationsProps, 'children'>
}

const SNNotificationHeader = ({ showBackButton = true }: { showBackButton?: boolean }) => {
  const translations = useNotificationDetailTranslations()
  const { onDelete } = useNotificationActions()
  const [popoverState, setShowPopover] = useState<{ showPopover: boolean; event: Event | undefined }>({
    showPopover: false,
    event: undefined
  })

  return (
    <>
      <IonPopover
        event={popoverState.event}
        isOpen={popoverState.showPopover}
        onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
      >
        <IonList>
          <IonItem button detail={false} onClick={() => onDelete()} lines="none">
            <IonText color="dark">{translations.deleteNotificationText}</IonText>
            <IonIcon icon={trashOutline} slot="end" color="danger" size="small" />
          </IonItem>
        </IonList>
      </IonPopover>
      <IonToolbar style={{ '--border-style': 'none', '--ion-toolbar-background': 'var(--ion-color-step-100)' }}>
        {showBackButton && (
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        )}
        <IonButtons slot="primary">
          <IonButton
            onClick={(e: React.MouseEvent) => {
              e.persist()
              setShowPopover({ showPopover: true, event: (e as unknown) as Event })
            }}
          >
            <IonIcon icon={ellipsisHorizontal} ariaLabel={translations.moreOptionsText} color="medium" />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </>
  )
}

const backgroundColor = 'var(--ion-color-step-100)'

export const Small = (props: SNNotificationDetailScreenProps): JSX.Element => {
  return (
    /*
    We don't set the value of --ion-background-color because that's a common property used and any downstream components that use it (like inputs)
    would inherit the change. So we specifically set the backgroundColor of the page and content as to not impact the other components
     */
    <IonPage style={{ backgroundColor }}>
      <SNNotificationProvider notification={props.notification}>
        <SNNotificationDetailActionsProvider
          onSubmitAction={props.onSubmitAction}
          onDelete={props.onDelete}
          onOpenUrlAction={props.onOpenUrlAction}
        >
          <SNNotificationDetailTranslationsProvider {...props.translations}>
            <IonHeader>
              <SNNotificationHeader />
            </IonHeader>
            <IonContent style={{ '--background': backgroundColor }}>
              <SNNotificationDetailContent />
            </IonContent>
          </SNNotificationDetailTranslationsProvider>
        </SNNotificationDetailActionsProvider>
      </SNNotificationProvider>
    </IonPage>
  )
}

const StyledContentContainer = styled.div`
  background-color: ${backgroundColor};
  min-height: 100%;
  padding-bottom: var(--ion-padding);
`
export const Large = (props: SNNotificationDetailScreenProps): JSX.Element => {
  return (
    <SNNotificationProvider notification={props.notification}>
      <SNNotificationDetailActionsProvider
        onSubmitAction={props.onSubmitAction}
        onDelete={props.onDelete}
        onOpenUrlAction={props.onOpenUrlAction}
      >
        <SNNotificationDetailTranslationsProvider {...props.translations}>
          <StyledContentContainer>
            <SNNotificationHeader showBackButton={false} />
            <SNNotificationDetailContent />
          </StyledContentContainer>
        </SNNotificationDetailTranslationsProvider>
      </SNNotificationDetailActionsProvider>
    </SNNotificationProvider>
  )
}
