export const fromNow = ({
  timestamp,
  locale,
  showSuffix = true
}: {
  timestamp: Date
  locale?: string
  showSuffix?: boolean
}): string => {
  const diffMs = Math.abs(Date.now() - timestamp.getTime())

  const seconds = diffMs / 1000
  const minutes = seconds / 60
  const hours = minutes / 60
  const days = hours / 24
  const months = days / 30
  const years = days / 365

  let unit: Intl.RelativeTimeFormatUnit
  let value

  if (days >= 320) {
    unit = 'year'
    value = years
  } else if (days >= 26 && days < 320) {
    unit = 'month'
    value = months
  } else if (hours >= 22 && days < 26) {
    unit = 'day'
    value = days
  } else if (minutes >= 25 && hours < 22) {
    unit = 'hour'
    value = hours
  } else if (seconds >= 45 && minutes < 25) {
    unit = 'minute'
    value = minutes
  } else {
    unit = 'second'
    value = seconds
  }

  const relativeTimeFormat = new Intl.RelativeTimeFormat(locale, { style: 'short' })

  if (showSuffix) {
    return relativeTimeFormat.format(-Math.round(value), unit)
  }

  /* No suffix means that we want to show "2 min." instead of "2 min. ago". Unfortunately when using a time in the past `formatToParts` embeds
  "ago" in the string which would be difficult to strip out as shown below.

  [ { type: "integer", value: "10", unit: "minute" }
  , { type: "literal", value: " min. ago" }
  ]

  So what we do is use the positive diff and pick off the last two items and join them to creat the string we want:

  [ { type: "literal", value: "in " }
  , { type: "integer", value: "4", unit: "minute" }
  , { type: "literal", value: " min." }
  ]
   */
  return relativeTimeFormat
    .formatToParts(Math.round(value), unit)
    .slice(1)
    .map(part => part.value)
    .join('')
}
