import React, { createContext, useContext } from 'react'

export interface SNNotificationDetailTranslationsProps {
  choiceSelectCancelText: string
  choiceSelectOkText: string
  deleteNotificationText: string
  moreOptionsText: string
  validationMessages: {
    required: string
    oneOf: string
    stringMax: (options: { max: number; value: string }) => string
    stringUrl: string
    stringEmail: string
    numberMax: (options: { max: number; value: string }) => string
    numberMin: (options: { min: number; value: string }) => string
    dateMax: (options: { max: Date | string; value: string }) => string
    dateMin: (options: { min: Date | string; value: string }) => string
    timeMax: (options: { max: Date | string; value: string }) => string
    timeMin: (options: { min: Date | string; value: string }) => string
  }
  children: React.ReactNode
}

export type SNNotificationDetailTranslationsContextInterface = Omit<SNNotificationDetailTranslationsProps, 'children'>

export const SNNotificationDetailTranslationContext = createContext<
  SNNotificationDetailTranslationsContextInterface | undefined
>(undefined)

export const SNNotificationDetailTranslationsProvider = ({
  children,
  ...rest
}: SNNotificationDetailTranslationsProps): React.ReactElement => {
  return (
    <SNNotificationDetailTranslationContext.Provider value={rest}>
      {children}
    </SNNotificationDetailTranslationContext.Provider>
  )
}

export const useNotificationDetailTranslations = (): SNNotificationDetailTranslationsContextInterface => {
  const context = useContext(SNNotificationDetailTranslationContext)

  if (context === undefined) {
    throw new Error(
      'useNotificationDetailTranslations must be used inside a SNNotificationDetailTranslationsContextProvider'
    )
  }

  return context
}
