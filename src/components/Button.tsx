import React from 'react'
import { IonButton, IonFabButton, IonIcon } from '@ionic/react'

export interface ButtonProps {
  /**
   * id of the element
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
   * Type of the button
   */
  type?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger'

  /**
   * Fill style to use for the button
   */
  fill?: 'clear' | 'outline' | 'solid'

  /**
   * Whether the button is disabled or not
   */
  disabled?: boolean

  /**
   * A handler for onClick events
   */
  onClick: React.MouseEventHandler
}

export const Button: React.VFC<ButtonProps> = ({
  id,
  type = 'primary',
  fill = 'solid',
  disabled = false,
  children,
  icon,
  iconOnly = false,
  iconPosition = 'start',
  onClick
}) => {
  const slot = iconOnly ? 'icon-only' : iconPosition
  /* Match style of IonFabButton */
  const style: { [key: string]: any } = iconOnly
    ? { '--border-radius': '50%', width: '56px', height: '56px', '--padding-start': 0, '--padding-end': 0 }
    : {}

  return (
    <IonButton color={type} fill={fill} disabled={disabled} onClick={onClick} shape="round" id={id} style={style}>
      {iconOnly ? null : children}
      {icon && <IonIcon slot={slot} icon={icon} ariaLabel={children} />}
    </IonButton>
  )
}
