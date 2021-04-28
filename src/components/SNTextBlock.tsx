import React, { createContext, useContext } from 'react'
import { CardElement, HorizontalAlignment } from '../types/card-element'
import { IonText } from '@ionic/react'
import styled from 'styled-components'
import { SNSeparator } from './SNSeparator'

type TextBlockColors =
  | 'primary'
  | 'secondary'
  | 'dark'
  | 'medium'
  | 'light'
  | 'accent'
  | 'good'
  | 'warning'
  | 'attention'
  | 'link'

type Weight = 'lighter' | 'default' | 'bolder'

export type SNTextBlockProps = {
  /**
   * Text to display
   */
  children: React.ReactNode

  /**
   * How text will be horizontally positioned
   */
  horizontalAlignment?: HorizontalAlignment

  /**
   * Size of the text
   */
  size?: 'small' | 'default' | 'medium' | 'large' | 'extraLarge'

  /**
   * Weight of the text
   */
  weight?: Weight

  /**
   * Color of the text
   */
  color?: TextBlockColors
} & (
  | {
      /**
       * Text will not wrap
       */
      wrap?: false
      /**
       * Maximum number lines that will be displayed
       */
      maxLines: 1
    }
  | {
      /**
       * Text will wrap
       */
      wrap?: true
      /**
       * Maximum number lines that will be displayed
       */
      maxLines?: number
    }
) &
  CardElement

const colorMap: Record<TextBlockColors, string> = {
  accent: 'tertiary',
  attention: 'danger',
  dark: 'dark',
  good: 'success',
  light: 'secondary',
  link: 'tertiary',
  medium: 'medium',
  primary: 'primary',
  secondary: 'secondary',
  warning: 'warning'
}

const horizontalAlignmentClassMap: Record<HorizontalAlignment, string> = {
  left: 'ion-text-start',
  center: 'ion-text-center',
  right: 'ion-text-end'
}

const weightMap: Record<Weight, number> = {
  lighter: 300,
  default: 500,
  bolder: 700
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- Ignoring because we're trying to prevent those properties from being attached to the DOM element
const StyledParagraph = styled(({ weight, maxLines, wrap, ...rest }: SNTextBlockProps) => <p {...rest} />)`
  font-weight: ${props => weightMap[props.weight ?? 'default']};
  font-size: 16px;
`

const StyledH1 = styled.h1`
  font-size: 28px;
  font-weight: 700;
`

const StyledH2 = styled.h2`
  font-size: 24px;
  font-weight: 300;
`

const StyledH3 = styled.h3`
  font-size: 24px;
  font-weight: 700;
`

const StyledH4 = styled.h4`
  font-size: 20px;
  font-weight: 700;
`

const StyledH5 = styled.h5`
  font-size: 20px;
  font-weight: 500;
`

const StyledH6 = styled.h6`
  font-size: 16px;
  font-weight: 300;
`

const StyledSmall = styled.small`
  font-size: 12px;
  font-weight: 300;
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- Ignoring because we're trying to prevent those properties from being attached to the DOM element
const StyledDiv = styled(({ wrap, maxLines, ...rest }: SNTextBlockProps) => <div {...rest}>{rest.children}</div>)`
  margin-top: 0;
  margin-bottom: 0;
  word-wrap: ${props => (props.wrap ? 'break-word' : 'inherit')};
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${props => {
    if (props.wrap) {
      return props.maxLines && props.maxLines > 0 ? props.maxLines : 'none'
    }

    return 1
  }};

  & p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0;
  }
`

type SNTextBlockComponentContextInterface = React.FunctionComponent
const SNTextBlockComponentContext = createContext<SNTextBlockComponentContextInterface>(StyledParagraph)

const useTextBlockComponent = (): SNTextBlockComponentContextInterface => {
  const context = useContext(SNTextBlockComponentContext)

  if (context === undefined) {
    throw new Error('useTextBlockComponent must be used inside a SNTextBlockComponentContextProvider')
  }

  return context
}

export const SNParagraph = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const Component = useTextBlockComponent()

  return <Component>{children}</Component>
}

export const SNTextBlock = ({
  id,
  wrap = true,
  size = 'default',
  weight = 'default',
  horizontalAlignment = 'left',
  spacing,
  separator,
  color = 'dark',
  children,
  maxLines
}: SNTextBlockProps): JSX.Element => {
  let Component: React.FunctionComponent = StyledParagraph

  if (weight === 'bolder' && size === 'extraLarge') Component = StyledH1
  if (weight === 'lighter' && size === 'large') Component = StyledH2
  if (weight === 'bolder' && size === 'large') Component = StyledH3
  if (weight === 'bolder' && size === 'medium') Component = StyledH4
  if (weight === 'default' && size === 'medium') Component = StyledH5
  if (weight === 'lighter' && size === 'default') Component = StyledH6
  if (weight === 'lighter' && size === 'small') Component = StyledSmall

  return (
    <SNSeparator separator={separator} spacing={spacing}>
      <IonText
        color={colorMap[color]}
        className={horizontalAlignmentClassMap[horizontalAlignment]}
        data-snelement="TextBlock"
        {...(id ? { id } : undefined)}
      >
        <StyledDiv maxLines={maxLines} wrap={wrap}>
          <SNTextBlockComponentContext.Provider value={Component}>{children}</SNTextBlockComponentContext.Provider>
        </StyledDiv>
      </IonText>
    </SNSeparator>
  )
}
