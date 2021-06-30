export type SNActionTypes = 'primary' | 'secondary' | 'destructive' | 'transparent'

export type SNAction = {
  causesValidation?: boolean
  displayInSummary?: boolean
  title: string
} & (
  | {
      type: 'Action.Submit'
      actionType: SNActionTypes
      data: { [index: string]: string }
      analytics?: never
      id: string
    }
  | {
      type: 'Action.OpenUrl'
      url: string
    }
)

export type HastNode =
  | {
      type: 'element'
      tagName: string
      properties?: Record<string, string | number | boolean | null>
      children?: HastNode[]
    }
  | { type: 'text'; value: string }

export type SNNotification = {
  actionCompletionDate?: string | null
  actions?: SNAction[]
  actionStatus: 'none_taken' | 'processed' | 'pending'
  actionTakenDate?: string | null
  body: HastNode
  category: string
  correlationId: string
  detail?: HastNode
  // TODO Are we keeping this?
  displayLifecycle: 'simple' | 'detailed'
  dueAt?: string | null
  firstSeenDate?: string | null
  from: {
    name: string
    iconUrl: string
  }
  hiddenAfter: string
  hiddenBefore: string
  id: string
  image: {
    url: string
    altText: string
    imageStyle?: 'default' | 'circle'
  }
  priority: 'informational' | 'important' | 'critical'
  section: 'toknow' | 'todo' | 'activity'
  sortValue: string
  title: HastNode
}
