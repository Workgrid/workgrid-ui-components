import React from 'react'
import { SNAction } from '../types/notification'
import { SinonStub } from 'cypress/types/sinon'
import {
  SNNotificationDetailTranslationsContextInterface,
  SNNotificationDetailTranslationsProvider
} from './SNNotificationDetailTranslationsProvider'
import { SNDetailForm } from './SNDetailForm'
import { mount } from '@cypress/react'
import { IonApp, IonContent, IonPage } from '@ionic/react'
import { LocaleProvider } from './LocaleProvider'

export const translations: SNNotificationDetailTranslationsContextInterface = {
  choiceSelectCancelText: 'Cancel',
  choiceSelectOkText: 'OK',
  deleteNotificationText: 'Delete',
  moreOptionsText: 'More Options',
  validationMessages: {
    required: 'This field is required.',
    oneOf: 'The value entered must match one of the options from the list.',
    stringMax: options => `Please enter fewer than ${options.max} characters. (${options.value?.length ?? 0} used)`,
    stringUrl: 'Please enter a valid URL.',
    stringEmail: 'Please enter a valid email.',
    numberMax: options => `Please select a value higher than ${new Date(options.max)}.`,
    numberMin: options => `Please select a value lower than ${new Date(options.min)}.`,
    dateMax: options => `Please select a date before ${new Date(options.max).toLocaleDateString()}.`,
    dateMin: options => `Please select a date after ${new Date(options.min).toLocaleDateString()}.`,
    timeMax: options => `Please select a time before ${new Date(options.max).toLocaleDateString()}.`,
    timeMin: options => `Please select a time after ${new Date(options.min).toLocaleDateString()}.`
  }
}

export const actions: SNAction[] = [
  {
    id: 'primary-action',
    type: 'Action.Submit',
    actionType: 'primary',
    causesValidation: true,
    title: 'Validated action',
    data: {
      action: 'validated'
    }
  },
  {
    id: 'secondary-action',
    type: 'Action.Submit',
    actionType: 'secondary',
    causesValidation: false,
    title: 'Non-validated action',
    data: {
      action: 'non-validated'
    }
  },
  {
    type: 'Action.OpenUrl',
    title: 'Open URL Action',
    url: 'https://www.workgrid.com'
  }
]

export const mountInput = ({ onSubmitAction, input }: { onSubmitAction: SinonStub; input: React.ReactNode }): void => {
  mount(
    <SNNotificationDetailTranslationsProvider {...translations}>
      <SNDetailForm onSubmitAction={onSubmitAction} actions={actions} onOpenUrlAction={() => undefined}>
        {input}
      </SNDetailForm>
    </SNNotificationDetailTranslationsProvider>
  )
}

export const mountIonApp = (node: React.ReactNode): void => {
  mount(
    <LocaleProvider defaultLocale="en-US">
      <IonApp>{node}</IonApp>
    </LocaleProvider>
  )
}

export const mountIonPage = (node: React.ReactNode): void => {
  mountIonApp(
    <IonPage>
      <IonContent>{node}</IonContent>
    </IonPage>
  )
}
