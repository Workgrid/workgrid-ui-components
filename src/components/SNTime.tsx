import React from 'react'
import { useLocale } from './LocaleProvider'

export type SNTimeProps = {
  /**
   * Date to render
   */
  date: string
}

export const SNTime = ({ date }: SNTimeProps): JSX.Element => {
  const { locale } = useLocale()
  const dt = new Date(date)

  return <>{dt.toLocaleTimeString(locale)}</>
}
