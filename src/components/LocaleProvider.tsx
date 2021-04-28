import React, { createContext, useContext, useState } from 'react'

export type LocaleProviderProps = {
  defaultLocale?: string
  children: React.ReactNode
}
export type LocaleContextInterface = {
  locale?: string
  onLocaleChange: (locale: string) => void
}

export const LocaleContext = createContext<LocaleContextInterface | undefined>(undefined)

export const LocaleProvider = ({ defaultLocale, children }: LocaleProviderProps): JSX.Element => {
  const [currentLocale, setCurrentLocale] = useState<string | undefined>(defaultLocale)

  return (
    <LocaleContext.Provider
      value={{
        locale: currentLocale,
        onLocaleChange: setCurrentLocale
      }}
    >
      {children}
    </LocaleContext.Provider>
  )
}

export const useLocale = (): LocaleContextInterface => {
  const context = useContext(LocaleContext)

  if (context === undefined) {
    throw new Error('useLocale must be used inside a LocaleProvider')
  }

  return context
}
