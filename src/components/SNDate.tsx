import React from 'react'
import { useLocale } from './LocaleProvider'
import { fromNow } from './fromNow'
import moment from 'moment'

export type SNDateProps = {
  /**
   * Date to render
   */
  date: string

  /**
   * Format of the date
   */
  format: 'long' | 'short' | 'relative' | 'relativenosuffix' | string
}

export const SNDate = ({ date, format }: SNDateProps): JSX.Element => {
  const { locale } = useLocale()
  const dt = new Date(date)

  let formattedDate!: string

  const fmt = format.toLowerCase()

  switch (fmt) {
    case 'long':
    case 'short':
      formattedDate = dt.toLocaleDateString(locale, {
        day: 'numeric',
        weekday: fmt,
        month: fmt,
        year: 'numeric'
      })
      break
    case 'relative':
      formattedDate = fromNow({ timestamp: dt, locale })
      break
    case 'relativenosuffix':
      formattedDate = fromNow({ timestamp: dt, locale, showSuffix: false })
      break
    default:
      // TODO Deprecate and retire functionality or convert to date-fns
      formattedDate = moment(date).format(format)
  }

  return <>{formattedDate}</>
}
