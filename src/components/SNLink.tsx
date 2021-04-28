import React from 'react'
import { useNotificationActions } from './SNNotificationDetailActionsProvider'

export type SNLinkProps = {
  url: string
  children: React.ReactNode
}

export const SNLink = ({ url, children }: SNLinkProps): JSX.Element => {
  const { onOpenUrlAction } = useNotificationActions()

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault()

    onOpenUrlAction(url)
  }

  return (
    <a href={url} onClick={onClick}>
      {children}
    </a>
  )
}
