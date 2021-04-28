import React, { useRef } from 'react'
import { useForm, FormProvider, UseFormProps, Resolver } from 'react-hook-form'
import { SNAction } from '../types/notification'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  SNNotificationDetailTranslationsContextInterface,
  useNotificationDetailTranslations
} from './SNNotificationDetailTranslationsProvider'
import { SNNotificationDetailScreenProps } from './SNNotificationDetailScreen'
import styled from 'styled-components'
import { Button, ButtonFills, ButtonVariants } from './Button'
import { openOutline } from 'ionicons/icons'

export type SNDetailFormProps = {
  children: React.ReactNode
  onSubmitAction: SNNotificationDetailScreenProps['onSubmitAction']
  onOpenUrlAction: SNNotificationDetailScreenProps['onOpenUrlAction']
  actions?: SNAction[]
} & UseFormProps

type SubmitEvent = { submitter: { id: string } }

type SNInputTypeYupSchema = {
  InputText: (
    field: { required: boolean; maxLength?: number; validate: { type: () => string } },
    validationMessages: SNNotificationDetailTranslationsContextInterface['validationMessages']
  ) => yup.StringSchema
  InputDate: (
    field: { required: boolean; min?: string; max?: string },
    validationMessages: SNNotificationDetailTranslationsContextInterface['validationMessages']
  ) => yup.DateSchema
  InputTime: (
    field: { required: boolean; min?: string; max?: string },
    validationMessages: SNNotificationDetailTranslationsContextInterface['validationMessages']
  ) => yup.DateSchema
  InputNumber: (
    field: { required: boolean; min?: number; max?: number },
    validationMessages: SNNotificationDetailTranslationsContextInterface['validationMessages']
  ) => yup.NumberSchema
  InputRange: (
    field: { required: boolean; min?: number; max?: number },
    validationMessages: SNNotificationDetailTranslationsContextInterface['validationMessages']
  ) => yup.NumberSchema
  InputToggle: (
    field: { validate: { valueOff: () => string; valueOn: () => string } },
    validationMessages: SNNotificationDetailTranslationsContextInterface['validationMessages']
  ) => yup.AnySchema
  InputChoiceSet: (
    field: {
      required: boolean
      validate: { isMultiSelect: () => boolean; values: () => string[] }
    },
    validationMessages: SNNotificationDetailTranslationsContextInterface['validationMessages']
  ) => yup.AnySchema
}

const requiredCheck = (
  field: { required: boolean },
  f: yup.AnySchema,
  validationMessages: SNNotificationDetailTranslationsContextInterface['validationMessages']
) => (field.required && f ? f.required(validationMessages.required) : f)

const inputTypeToYupSchema: SNInputTypeYupSchema = {
  InputText: (field, validationMessages) => {
    const stringType = field.validate.type()

    let f

    if (stringType === 'url') {
      f = yup.string().url(validationMessages.stringUrl)
    } else if (stringType === 'email') {
      f = yup.string().email(validationMessages.stringEmail)
    } else {
      f = yup.string()
    }

    if (field.maxLength) {
      f = f.max(field.maxLength, validationMessages.stringMax)
    }

    return requiredCheck(field, f, validationMessages)
  },
  InputDate: (field, validationMessages) => {
    let f = yup.date()

    if (field.min) {
      f = f.min(new Date(field.min), validationMessages.dateMin)
    }

    if (field.max) {
      f = f.max(new Date(field.max), validationMessages.dateMax)
    }

    return requiredCheck(field, f, validationMessages)
  },
  InputTime: (field, validationMessages) => {
    // Borrowed from: https://github.com/microsoft/AdaptiveCards/blob/761ab9c33338eb23a67844d6421330a7b6f98a49/source/nodejs/adaptivecards/src/card-elements.ts#L3581
    function convertTimeToDate(timeString?: string) {
      return new Date(`1973-09-04T${timeString}:00Z`)
    }

    /*
     Originally I wanted all the same checks as yup.Date but wanted to transform the input (HH:mm) to a Date type prior to the validation. Unfortunately
     this didn't work as the initial coercion is automatically applied resulting in an "Invalid Date." I took a look at creating a new type in yup
     but the initial coercion is performed in the constructor before we have an opportunity to transform it resulting in the same problem as above.

     So what I settled on is considering this a string type and adding custom `min` and `max` validations.
     */
    let f = yup.string()

    if (field.min) {
      const minDate = convertTimeToDate(field.min)

      f = f.test({
        name: 'min',
        test: (value: any) => {
          if (value === null) return true

          const valAsDate = convertTimeToDate(value)

          return valAsDate.getTime() >= minDate.getTime()
        },
        message: validationMessages.timeMin,
        params: {
          min: minDate
        },
        exclusive: true
      })
    }

    if (field.max) {
      const maxDate = convertTimeToDate(field.max)

      f = f.test({
        name: 'max',
        test: (value: any) => {
          if (value === null) return true
          const valAsDate = convertTimeToDate(value)

          return valAsDate.getTime() <= maxDate.getTime()
        },
        message: validationMessages.timeMax,
        params: {
          max: maxDate
        },
        exclusive: true
      })
    }

    return requiredCheck(field, f, validationMessages)
  },
  InputNumber: (field, validationMessages) => {
    let f = yup.number()

    if (field.min) {
      f = f.min(field.min, validationMessages.numberMin)
    }

    if (field.max) {
      f = f.max(field.max, validationMessages.numberMax)
    }

    return requiredCheck(field, f, validationMessages)
  },
  InputRange: (field, validationMessages) => {
    let f = yup.number()

    if (field.min) {
      f = f.min(field.min, validationMessages.numberMin)
    }

    if (field.max) {
      f = f.max(field.max, validationMessages.numberMax)
    }

    return requiredCheck(field, f, validationMessages)
  },
  InputToggle: (field, validationMessages) => {
    return yup.mixed().oneOf([field.validate.valueOff(), field.validate.valueOn()], validationMessages.oneOf)
  },
  InputChoiceSet: (field, validationMessages) => {
    let f

    const validValues = yup.mixed().oneOf(field.validate.values(), validationMessages.oneOf)

    if (field.validate.isMultiSelect()) {
      f = yup.array().of(validValues)

      if (field.required) {
        f = f.min(1).max(field.validate.values().length)
      }
    } else {
      f = validValues

      if (field.required) {
        f = requiredCheck(field, f, validationMessages)
      }
    }

    return f
  }
}

const getSubmittedAction = (submitEvent?: SubmitEvent, actions?: SNDetailFormProps['actions']) =>
  actions?.find(action => action.type === 'Action.Submit' && submitEvent?.submitter?.id === action.id)

const createResolver = ({
  actions,
  validationMessages
}: {
  actions?: SNDetailFormProps['actions']
  validationMessages: SNNotificationDetailTranslationsContextInterface['validationMessages']
}): Resolver => {
  return async (data, event, options) => {
    const action = getSubmittedAction(event as SubmitEvent, actions)

    // Apply validation when not explicitly skipped
    if (action?.causesValidation !== false) {
      const formSchema: Record<string, yup.AnySchema> = {}

      // Using the fieldsRef to get the rules set in when a field is registered
      for (const [name, field] of Object.entries(options.fields)) {
        let fieldType

        if ('dataset' in field.ref) {
          fieldType = field.ref.dataset.snelement as keyof SNInputTypeYupSchema
        }

        let schema

        if (fieldType) {
          const createSchema = inputTypeToYupSchema[fieldType]

          if (createSchema) {
            /* Ignoring types here as we cannot type it to be more narrow than it has specified especially since we're
             * using a third party library.
             * */
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            schema = createSchema?.(field, validationMessages)
          } else {
            // TODO Throw error?
          }
        }

        if (schema) {
          formSchema[name] = schema
        }
      }
      return yupResolver(yup.object().shape(formSchema))(data, event, options)
    }

    // No validation is done so just return data
    return { values: data, errors: {} }
  }
}

const createSubmitEvent = (element?: HTMLElement | null) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - https://github.com/microsoft/TypeScript/issues/40811
  const submitEvent = new SubmitEvent('submit', {
    submitter: element
  })

  // React requirement
  submitEvent.persist = () => null

  return submitEvent
}

// TODO Extract 577px to a variable aligned with UX verbiage
const StyledActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--ion-padding);

  @media screen and (min-width: 576px) {
    flex-wrap: wrap;
    flex-direction: row-reverse;
    justify-content: flex-start;
  }
`

const StyledButton = styled(Button)`
  @media screen and (min-width: 576px) {
    max-width: 400px;
  }
`
type SNActionType = 'primary' | 'secondary' | 'destructive' | 'transparent'

const buttonVariantMap: Record<SNActionType, ButtonVariants> = {
  primary: 'primary',
  secondary: 'secondary',
  destructive: 'danger',
  transparent: 'link'
}

const buttonFillMap: Record<SNActionType, ButtonFills> = {
  primary: 'solid',
  secondary: 'outline',
  destructive: 'solid',
  transparent: 'clear'
}

const SNSubmitAction = ({
  id,
  actionType,
  title,
  onClick
}: {
  id: string
  actionType: SNActionType
  title: string
  onClick?: React.MouseEventHandler
}): JSX.Element => {
  return (
    <StyledButton variant={buttonVariantMap[actionType]} fill={buttonFillMap[actionType]} id={id} onClick={onClick}>
      {title}
    </StyledButton>
  )
}

const SNOpenUrlAction = ({
  url,
  onClick,
  title
}: {
  url: string
  title: string
  onClick: (url: string) => void
}): JSX.Element => {
  return (
    <StyledButton variant="link" fill="outline" onClick={() => onClick(url)} icon={openOutline} iconPosition="end">
      {title}
    </StyledButton>
  )
}
export const SNDetailForm = ({
  children,
  onSubmitAction,
  onOpenUrlAction,
  actions = [],
  ...props
}: SNDetailFormProps): JSX.Element => {
  const translations = useNotificationDetailTranslations()

  // Capture the submit event for use in the custom resolver
  const submitEvent = useRef<SubmitEvent>()
  const submitButton = useRef<HTMLElement>()

  const methods = useForm({
    ...props,
    resolver: (data, context, options) => {
      // Invoke our custom resolver with form data and submitEvent
      return createResolver({ actions, validationMessages: translations.validationMessages })(
        data,
        submitEvent.current,
        options
      )
    }
  })

  const submitHandler = methods.handleSubmit(data => {
    const submittedAction = getSubmittedAction(submitEvent.current, actions)

    if (submittedAction) {
      onSubmitAction(data, submittedAction)
    }
  })

  /**
   * The reason we have a onClick handler is because when trying to use submitEvent.nativeEvent.submitter.id to find the actual
   * action that was clicked we couldn't find the `id` value because the actual element is the internal <button /> in the shadow DOM and there's
   * no way to work up to the wrapper web component that has the actual id. Furthermore an onClick handler on the <form /> element suffers the same
   * problem. So we use a ref to store the actual action that was clicked and construct a SubmitEvent to be passed to react-hook-form
   */
  function handleClick(event: React.MouseEvent) {
    submitButton.current = event.target as HTMLElement
    const manufacturedSubmitEvent = createSubmitEvent(submitButton.current)
    submitEvent.current = manufacturedSubmitEvent

    submitHandler(manufacturedSubmitEvent)
  }

  return (
    <FormProvider {...methods}>
      <form>
        {children}
        <StyledActionsContainer>
          {actions?.map(action => {
            if (action.type === 'Action.Submit') {
              return (
                <SNSubmitAction
                  key={action.id}
                  actionType={action.actionType}
                  title={action.title}
                  id={action.id}
                  onClick={handleClick}
                />
              )
            } else if (action.type === 'Action.OpenUrl') {
              return (
                <SNOpenUrlAction key={action.title} title={action.title} url={action.url} onClick={onOpenUrlAction} />
              )
            }
          })}
        </StyledActionsContainer>
      </form>
    </FormProvider>
  )
}
