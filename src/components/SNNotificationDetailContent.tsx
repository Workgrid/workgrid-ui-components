import React, { useState } from 'react'
import { SNDetailForm } from './SNDetailForm'
import { useNotification } from './SNNotificationProvider'
import Rehype2react from 'rehype-react'
import { SNContainer } from './SNContainer'
import { SNColumnSet } from './SNColumnSet'
import { SNColumn } from './SNColumn'
import { SNTextBlock, SNParagraph } from './SNTextBlock'
import { SNFactSet } from './SNFactSet'
import { SNFact } from './SNFact'
import { SNFactTitle } from './SNFactTitle'
import { SNFactValue } from './SNFactValue'
import { SNImage } from './SNImage'
import { SNInputText } from './SNInputText'
import { SNInputDate } from './SNInputDate'
import { SNInputNumber } from './SNInputNumber'
import { SNInputTime } from './SNInputTime'
import { SNInputToggle } from './SNInputToggle'
import { SNInputChoiceSet } from './SNInputChoiceSet'
import { SNInputChoice } from './SNInputChoice'
import { useNotificationActions } from './SNNotificationDetailActionsProvider'
import { SNTime } from './SNTime'
import { SNDate } from './SNDate'
import styled from 'styled-components'
import { SNLink } from './SNLink'
import noImage from '../assets/no-image.svg'
import { IonImg, IonText } from '@ionic/react'
import { Sender } from './Sender'
import noSender from '../assets/no-sender.png'
import { SNList, SNListItem } from './SNList'
import { SNInputRange } from './SNInputRange'

const NoopComp = (props: { children: React.ReactNode }) => <>{props.children}</>

const StyledH1 = styled.h1`
  font-size: 28px;
  font-weight: 700;
`

const notificationRenderer = new Rehype2react({
  createElement: React.createElement,
  components: {
    Detail: NoopComp,
    Container: SNContainer,
    ColumnSet: SNColumnSet,
    Column: SNColumn,
    TextBlock: SNTextBlock,
    FactSet: SNFactSet,
    Fact: SNFact,
    FactTitle: SNFactTitle,
    FactValue: SNFactValue,
    Image: SNImage,
    paragraph: SNParagraph,
    InputText: SNInputText,
    InputDate: SNInputDate,
    InputNumber: SNInputNumber,
    InputRange: SNInputRange,
    InputTime: SNInputTime,
    InputToggle: SNInputToggle,
    InputChoiceSet: SNInputChoiceSet,
    InputChoice: SNInputChoice,
    Time: SNTime,
    Date: SNDate,
    link: SNLink,
    Body: SNTextBlock,
    list: SNList,
    listItem: SNListItem,
    emphasis: 'i'
  }
}).Compiler

// We create a separator renderer because we don't want a `p` embedded in an `h1` tag.
const notificationTitleRenderer = new Rehype2react({
  createElement: React.createElement,
  components: {
    paragraph: NoopComp,
    Title: StyledH1
  }
}).Compiler

const SummaryContainer = styled.div`
  display: flex;
  flex: 1 0;
  justify-content: space-between;
`

const SNNotificationDetailSummary = (): JSX.Element => {
  const { title, body, image, from, hiddenBefore, category } = useNotification()
  const [bodyImageUrl, setBodyImageUrl] = useState(image.url)

  const onIonImageError = () => {
    setBodyImageUrl(noImage)
  }
  return (
    <div>
      <IonText color="medium">
        <small className="ion-text-uppercase">{category}</small>
      </IonText>
      <SummaryContainer>
        <div>
          {notificationTitleRenderer(title)}
          <Sender
            imageUrl={from.iconUrl}
            fallbackImageUrl={noSender}
            from={from.name}
            timestamp={new Date(hiddenBefore)}
          />
        </div>
        <IonImg src={bodyImageUrl} onIonError={onIonImageError} alt={image.altText} style={{ maxWidth: '64px' }} />
      </SummaryContainer>
      {notificationRenderer(body)}
    </div>
  )
}

// TODO Need to extract 1920px out to an appropriately named variable to align with UX verbiage
const StyledDiv = styled.div`
  max-width: 800px;
  background-color: var(--ion-background-color);
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
  margin-top: calc(var(--ion-padding) * 2);
  margin-bottom: calc(var(--ion-padding) * 2);

  @media screen and (min-width: 1920px) {
    margin-left: calc(var(--ion-padding) * 2);
  }
`

export const SNNotificationDetailContent = (): JSX.Element | null => {
  const { onSubmitAction, onOpenUrlAction } = useNotificationActions()
  const { actions, detail } = useNotification()

  const hasSubmitAction = actions?.find(action => action.type === 'Action.Submit')

  let renderedDetail

  if (detail) {
    const detailContent = notificationRenderer(detail)

    /**
     * For accessibility purposes we don't want to render a <form /> if there isn't an action button
     */
    renderedDetail = hasSubmitAction ? (
      <SNDetailForm onSubmitAction={onSubmitAction} onOpenUrlAction={onOpenUrlAction} actions={actions}>
        {detailContent}
      </SNDetailForm>
    ) : (
      <>{detailContent}</>
    )
  }

  return (
    <StyledDiv className="ion-padding">
      <SNNotificationDetailSummary />
      {renderedDetail}
    </StyledDiv>
  )
}
