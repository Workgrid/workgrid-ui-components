import React, { createContext, useContext } from 'react'
import { SNNotification } from '../types/notification'

export interface SNNotificationProviderProps {
  notification: SNNotification
  children: React.ReactNode
}

export type SNNotificationContextInterface = SNNotificationProviderProps['notification']

export const SNNotificationContext = createContext<SNNotificationContextInterface | undefined>(undefined)

export const SNNotificationProvider = ({ children, notification }: SNNotificationProviderProps): React.ReactElement => {
  return <SNNotificationContext.Provider value={notification}>{children}</SNNotificationContext.Provider>
}

export const useNotification = (): SNNotificationContextInterface => {
  const context = useContext(SNNotificationContext)

  if (context === undefined) {
    throw new Error('useNotification must be used inside a SNNotificationProvider')
  }

  return context
}
