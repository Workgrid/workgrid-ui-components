export type CardElementSpacing = 'small' | 'default' | 'medium' | 'large' | 'extraLarge' | 'padding'
export type CardElement = {
  /**
   * A unique Id associated with the element
   */
  id?: string
} & (
  | { spacing: 'none'; separator?: false }
  | {
      /**
       * Defines the amount of spacing between this element and the previous element.
       */
      spacing?: CardElementSpacing

      /**
       * If true a visual separator is added between this element and the previous element
       */
      separator?: true
    }
)

export type HorizontalAlignment = 'left' | 'center' | 'right'
