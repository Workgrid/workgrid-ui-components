import React from 'react'
import { IonButton, IonIcon } from '@ionic/react'

export type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'link'
export type ButtonFills = 'clear' | 'outline' | 'solid'
export interface ButtonProps {
  /**
   * Id of the button
   */
  id?: string

  /**
   * Label of the button
   */
  children: string

  /**
   * Icon to add to the button
   */
  icon?: string

  /**
   * If this button is iconOnly children will be used for ARIA properties
   */
  iconOnly?: boolean

  /**
   * Position of icon in button. Used when iconOnly = false
   */
  iconPosition?: 'start' | 'end'

  /**
   * Variant of the button
   */
  variant?: ButtonVariants

  /**
   * Type of button
   */
  type?: 'submit' | 'reset' | 'button'

  /**
   * Fill style to use for the button
   */
  fill?: ButtonFills

  /**
   * Set to "block" for a full-width button or to "full" for a full-width button without left and right borders.
   */
  expand?: 'block' | 'full'

  /**
   * Whether the button is disabled or not
   */
  disabled?: boolean

  /**
   * A handler for onClick events
   */
  onClick?: React.MouseEventHandler
}

export const Button = ({
  type = 'button',
  variant = 'primary',
  fill = 'solid',
  expand,
  disabled = false,
  children,
  icon,
  iconOnly = false,
  iconPosition = 'start',
  onClick,
  id
}: ButtonProps): JSX.Element => {
  const slot = iconOnly ? 'icon-only' : iconPosition
  /* Match style of IonFabButton */
  const style: { [key: string]: string | number } = iconOnly
    ? { '--border-radius': '50%', width: '56px', height: '56px', '--padding-start': 0, '--padding-end': 0 }
    : {}

  return (
    <IonButton
      color={variant}
      type={type}
      fill={fill}
      disabled={disabled}
      onClick={onClick}
      shape="round"
      style={style}
      expand={expand}
      {...(id ? { id } : undefined)}
    >
      {iconOnly ? null : children}
      {icon && <IonIcon slot={slot} icon={icon} ariaLabel={children} />}
    </IonButton>
  )
}
