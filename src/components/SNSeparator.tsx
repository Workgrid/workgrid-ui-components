import React from 'react'
import { CardElement, CardElementSpacing } from '../types/card-element'
import styled, { css } from 'styled-components'

export type SNSeparatorProps = {
  children: React.ReactNode
  orientation?: 'horizontal' | 'vertical'
} & Pick<CardElement, 'separator' | 'spacing'>

//'small' | 'default' | 'medium' | 'large' | 'extraLarge' | 'padding'
const spacingMap: Record<CardElementSpacing, number> = {
  small: 0.75,
  default: 1,
  medium: 1.125,
  large: 1.5,
  extraLarge: 2.25,
  padding: 1
}

const StyledDiv = styled.div<Required<SNSeparatorProps>>`
  ${({ spacing, separator, orientation }) => {
    if (spacing != 'none') {
      const cssProp = orientation === 'vertical' ? 'top' : 'inline-start'

      if (separator) {
        return css`
          padding-${cssProp}: calc(var(--ion-padding) * ${spacingMap[spacing]} / 2);
          margin-${cssProp}: calc(var(--ion-padding) * ${spacingMap[spacing]} / 2);
          border-${cssProp}: 1px solid var(--ion-color-medium);
        `
      }

      return css`
        margin-${cssProp}: calc(var(--ion-padding, 16px) * ${spacingMap[spacing]});
      `
    }
  }}
`

export const SNSeparator = ({
  children,
  separator = false,
  spacing = 'default',
  orientation = 'vertical'
}: SNSeparatorProps): JSX.Element => {
  return (
    <StyledDiv separator={separator} spacing={spacing} orientation={orientation} data-snelement="Separator">
      {children}
    </StyledDiv>
  )
}
