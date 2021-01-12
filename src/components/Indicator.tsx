import React from 'react'

export interface IndicatorProps {
  /**
   * Indicator text
   */
  children: string

  /**
   * Indicator color
   */
  color?: 'success'
}
export const Indicator = ({ children, color = 'success' }: IndicatorProps): JSX.Element => {
  return (
    <span>
      <span
        style={{
          height: '8px',
          width: '8px',
          marginRight: '4px',
          marginBottom: '2px',
          backgroundColor: `var(--ion-color-${color})`,
          borderRadius: '50%',
          display: 'inline-block'
        }}
      >
        {' '}
      </span>
      <span>{children}</span>
    </span>
  )
}
