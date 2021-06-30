import React, { ComponentProps, useState } from 'react'
import styled, { css } from 'styled-components'
import { CardElement, HorizontalAlignment } from '../types/card-element'
import { SNSeparator } from './SNSeparator'
import { IonImg } from '@ionic/react'
import fallbackImageUrl from '../assets/no-image.svg'

type ImageSize = 'auto' | 'stretch' | 'small' | 'medium' | 'large'
type ImageStyle = 'default' | 'circle'

export type SNImageProps = {
  /**
   * URL of the image
   */
  url: string

  /**
   * Alternate text for the image for accessibility
   */
  altText: string

  /**
   * How image will be horizontally positioned
   */
  horizontalAlignment?: HorizontalAlignment

  /**
   * Size of the image
   */
  size?: ImageSize

  /**
   * Style of the image
   */
  variant?: ImageStyle
} & CardElement

type StyledImageProps = {
  variant: ImageStyle
  size: ImageSize
} & ComponentProps<typeof IonImg>

const StyledImageContainer = styled.div<{ horizontalAlignment: SNImageProps['horizontalAlignment'] }>`
  display: flex;
  flex: 1;

  ${props => {
    switch (props.horizontalAlignment) {
      case 'left':
        return css`
          justify-content: flex-start;
          align-items: flex-start;
        `
      case 'right':
        return css`
          justify-content: flex-end;
          align-items: flex-end;
        `
      case 'center':
        return css`
          justify-content: center;
          align-items: center;
        `
      default:
        return css`
          justify-content: flex-start;
          align-items: flex-start;
        `
    }
  }};
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledImage = styled(({ variant, size, ...rest }: StyledImageProps) => <IonImg {...rest} />)`
  &::part(image) {
    border-radius: ${props => (props.variant === 'circle' ? '50%' : 0)};
  }

  ${props => {
    switch (props.size) {
      case 'stretch':
        return css`
          width: calc(100% + var(--ion-padding) * 2);
          height: calc(100% + var(--ion-padding) * 2);
          margin-right: -var(--ion-padding) * 2;
          margin-left: -var(--ion-padding) * 2;
        `
      case 'auto':
        return css`
          width: 100%;
          height: 100%;
        `
      case 'small':
        return css`
          width: 40px;
          max-height: 100%;
        `
      case 'medium':
        return css`
          width: 80px;
          max-height: 100%;
        `
      case 'large':
        return css`
          width: 160px;
          max-height: 100%;
        `
      default:
        return css`
          width: 100%;
          height: 100%;
        `
    }
  }};
`

export const SNImage = ({
  id,
  separator,
  spacing,
  horizontalAlignment = 'left',
  size = 'auto',
  variant = 'default',
  url,
  altText
}: SNImageProps): JSX.Element => {
  const [imageUrl, setImageUrl] = useState(url)

  const onIonImageError = () => {
    setImageUrl(fallbackImageUrl)
  }

  return (
    <SNSeparator spacing={spacing} separator={separator}>
      <StyledImageContainer horizontalAlignment={horizontalAlignment} data-snelement="Image">
        <StyledImage
          size={size}
          variant={variant}
          src={imageUrl}
          alt={altText}
          {...(id ? { id } : undefined)}
          onIonError={onIonImageError}
        />
      </StyledImageContainer>
    </SNSeparator>
  )
}
