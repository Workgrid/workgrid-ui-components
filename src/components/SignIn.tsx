import React, { useEffect, useState } from 'react'
import { IonPage, IonContent, IonText, IonImg, IonSpinner } from '@ionic/react'
import { Button } from './Button'
import { Input } from './Input'
import styled from 'styled-components'
import signInLanding from '../assets/sign-in-landing.png'
import { InputChangeEventDetail } from '@ionic/core'

export interface SignInProps {
  /**
   * Default company code if the user has one
   */
  defaultCompanyCode?: string

  /**
   * Previously used company if any
   */
  initialCompanyCode?: string

  /**
   * Whether the initial company code is valid or not
   */
  initialCompanyCodeIsValid: boolean

  /**
   * Callback when the user invokes sign in
   */
  onSignIn: () => void

  /**
   * Callback when the user wants to validate whether the entered company code is valid or not
   * @param companyCode User entered company code
   */
  onCompanyCodeSubmit: (companyCode: string) => Promise<void>

  /**
   * Translated strings to display on the screen
   */
  translations: {
    companyCodeLabel: string
    checkCompanyCodeText: string
    companyCodePlaceholder: string
    resetDefaultCompanyCodeText: string
    invalidCompanyCodeText: string
    pleaseEnterCompanyCodeText: string
    changeCompanyCodeText: string
    signInText: string
    workgridText: string
    versionText?: string
  }
}

const HorizontallyCenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CenteredContent = styled(HorizontallyCenteredContainer)`
  justify-content: center;
  width: 100%;
  height: 100%;
`

const Container = styled(HorizontallyCenteredContainer)`
  max-width: 800px;
`

type PageProps = Pick<SignInProps['translations'], 'workgridText' | 'versionText'> & {
  children: React.ReactNode
}

const Page = ({ children, workgridText, versionText }: PageProps): JSX.Element => {
  return (
    <IonPage>
      <IonContent>
        <CenteredContent>
          <Container className="ion-padding">
            {/* Image is purely decorative which is why the alt tag is empty. Reference: https://www.w3.org/WAI/tutorials/images/decorative/ */}
            <IonImg src={signInLanding} style={{ paddingBottom: 'calc(var(--ion-padding, 16px) * 2)' }} alt="" />
            {children}
            <IonText color="medium" style={{ textAlign: 'center' }}>
              <p>
                <small>{workgridText}</small>
              </p>
              {versionText && (
                <p>
                  <small>{versionText}</small>
                </p>
              )}
            </IonText>
          </Container>
        </CenteredContent>
      </IonContent>
    </IonPage>
  )
}

type ButtonProps = Pick<SignInProps, 'translations' | 'defaultCompanyCode'> & {
  isCheckingCompanyCode: boolean
  resetDefaultCompanyCode: (companyCode: string) => void
}

const CheckCompanyCodeButton = ({ checkCompanyCodeText }: { checkCompanyCodeText: string }) => (
  <Button variant="primary" type="submit">
    {checkCompanyCodeText}
  </Button>
)

const Buttons = ({
  translations,
  isCheckingCompanyCode,
  defaultCompanyCode,
  resetDefaultCompanyCode
}: ButtonProps): JSX.Element => {
  if (isCheckingCompanyCode) {
    return <IonSpinner />
  } else {
    if (defaultCompanyCode) {
      return (
        <>
          <CheckCompanyCodeButton checkCompanyCodeText={translations.checkCompanyCodeText} />
          <Button fill="clear" variant="link" onClick={() => resetDefaultCompanyCode(defaultCompanyCode)}>
            {translations.resetDefaultCompanyCodeText}
          </Button>
        </>
      )
    } else {
      return <CheckCompanyCodeButton checkCompanyCodeText={translations.checkCompanyCodeText} />
    }
  }
}

const validCompanyCodeRegex = new RegExp('^[a-zA-Z0-9.]+$')

export const SignIn = ({
  defaultCompanyCode,
  initialCompanyCode,
  initialCompanyCodeIsValid,
  onSignIn,
  onCompanyCodeSubmit,
  translations
}: SignInProps): JSX.Element => {
  const [showCompanyCodeInput, setShowCompanyCodeInput] = useState(false)
  const [companyCodeInput, setCompanyCode] = useState<string | null | undefined>(initialCompanyCode)
  const [isCheckingCompanyCode, setCheckingCompanyCode] = useState<boolean>(false)
  const [isInvalid, setInvalid] = useState(false)

  useEffect(() => {
    setInvalid(!initialCompanyCodeIsValid)
    setShowCompanyCodeInput(!initialCompanyCodeIsValid || initialCompanyCode == null)
  }, [initialCompanyCodeIsValid])

  const checkCompanyCode = async (event: React.FormEvent) => {
    event.preventDefault()

    const isInvalid =
      companyCodeInput == null || companyCodeInput?.length === 0 || !validCompanyCodeRegex.test(companyCodeInput)

    setInvalid(isInvalid)

    if (!isInvalid && companyCodeInput != null) {
      setCheckingCompanyCode(true)
      await onCompanyCodeSubmit(companyCodeInput)
      setCheckingCompanyCode(false)
      setShowCompanyCodeInput(isInvalid)
    }
  }

  const resetDefaultCompanyCode = (companyCode: string) => {
    setCompanyCode(companyCode)
    setInvalid(false)
  }

  let invalidText

  if (isInvalid) {
    if (!companyCodeInput || companyCodeInput?.length === 0) {
      invalidText = translations.pleaseEnterCompanyCodeText
    } else {
      invalidText = translations.invalidCompanyCodeText
    }
  }

  if (showCompanyCodeInput) {
    return (
      <Page workgridText={translations.workgridText} versionText={translations.versionText}>
        <form
          onSubmit={checkCompanyCode}
          style={{ maxWidth: '380px', minWidth: '320px', flexDirection: 'column', display: 'flex' }}
        >
          <Input
            label={translations.companyCodeLabel}
            autocorrect="off"
            id="company-code-input"
            name="company-code-input"
            value={companyCodeInput}
            placeholder={translations.companyCodePlaceholder}
            invalidText={invalidText}
            enterkeyhint="go"
            clearInput={true}
            onChange={(event: CustomEvent<InputChangeEventDetail>) => {
              setInvalid(false)
              setCompanyCode(event.detail.value)
            }}
          />

          <HorizontallyCenteredContainer className="ion-padding-top">
            <Buttons
              translations={translations}
              isCheckingCompanyCode={isCheckingCompanyCode}
              defaultCompanyCode={defaultCompanyCode}
              resetDefaultCompanyCode={resetDefaultCompanyCode}
            />
          </HorizontallyCenteredContainer>
        </form>
      </Page>
    )
  }

  return (
    <Page workgridText={translations.workgridText} versionText={translations.versionText}>
      <Button fill="clear" variant="link" onClick={() => setShowCompanyCodeInput(true)}>
        {translations.changeCompanyCodeText}
      </Button>
      <Button variant="primary" onClick={() => onSignIn()}>
        {translations.signInText}
      </Button>
    </Page>
  )
}
