import React, { createContext, useContext } from 'react'
import { SNNotificationDetailScreenProps } from './SNNotificationDetailScreen'

export interface SNNotificationDetailActionsProviderProps {
  onSubmitAction: SNNotificationDetailScreenProps['onSubmitAction']
  onOpenUrlAction: SNNotificationDetailScreenProps['onOpenUrlAction']
  onDelete: SNNotificationDetailScreenProps['onDelete']
  children: React.ReactNode
}

export type SNNotificationDetailActionsContextInterface = Omit<SNNotificationDetailActionsProviderProps, 'children'>

export const SNNotificationDetailActionsProviderContext = createContext<
  SNNotificationDetailActionsContextInterface | undefined
>(undefined)

export const SNNotificationDetailActionsProvider = ({
  children,
  ...rest
}: SNNotificationDetailActionsProviderProps): React.ReactElement => {
  return (
    <SNNotificationDetailActionsProviderContext.Provider value={rest}>
      {children}
    </SNNotificationDetailActionsProviderContext.Provider>
  )
}

export const useNotificationActions = (): SNNotificationDetailActionsContextInterface => {
  const context = useContext(SNNotificationDetailActionsProviderContext)

  if (context === undefined) {
    throw new Error('useNotificationActions must be used inside a SNNotificationDetailActionsProvider')
  }

  return context
}
