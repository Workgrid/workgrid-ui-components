export const fromNow = (locale: string, timestamp: Date): string => {
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

  return new Intl.RelativeTimeFormat(locale, { style: 'short' }).format(-Math.round(value), unit)
}
