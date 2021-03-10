import React from 'react'
import { SignIn } from './SignIn'
import { render, screen, waitFor, act } from '@testing-library/react'
import { ionFireEvent as fireEvent } from '@ionic/react-test-utils'

describe('SignIn', () => {
  const translations = {
    companyCodeLabel: 'Company Code',
    companyCodePlaceholder: 'Enter Company Code',
    changeCompanyCodeText: 'Change Company Code',
    checkCompanyCodeText: 'Check Company Code',
    resetDefaultCompanyCodeText: 'Reset To Default',
    invalidCompanyCodeText: '❗ ️Company code is invalid',
    pleaseEnterCompanyCodeText: '❗ Please enter a company code',
    signInText: 'Sign In',
    workgridText: 'Workgrid Software',
    versionText: 'Version 0.0.0'
  }

  const onCompanyCodeSubmit = jest.fn()
  const onSignIn = jest.fn()
  const companyCode = 'acmecorp'

  test('onSignIn handler fires', async () => {
    render(
      <SignIn
        initialCompanyCode={companyCode}
        initialCompanyCodeIsValid={true}
        onSignIn={onSignIn}
        onCompanyCodeSubmit={onCompanyCodeSubmit}
        translations={translations}
      />
    )

    fireEvent.click(screen.getByText(translations.signInText))

    await waitFor(() => expect(onSignIn).toHaveBeenCalledWith())
  })

  test('When change company code button is clicked show input with `companyCode` prop value, check company code button is visible and sign in button and reset to default company code button not visible', async () => {
    render(
      <SignIn
        initialCompanyCode={companyCode}
        initialCompanyCodeIsValid={true}
        onSignIn={onSignIn}
        onCompanyCodeSubmit={onCompanyCodeSubmit}
        translations={translations}
      />
    )

    fireEvent.click(screen.getByText(translations.changeCompanyCodeText))

    await waitFor(() => expect(screen.getByText(translations.checkCompanyCodeText)).toBeVisible())
    expect(screen.queryByText(translations.signInText)).not.toBeInTheDocument()
    expect(screen.queryByText(translations.resetDefaultCompanyCodeText)).not.toBeInTheDocument()

    const companyCodeInput = screen.getByPlaceholderText(translations.companyCodePlaceholder)

    expect(companyCodeInput).toHaveAttribute('value', companyCode)
  })

  test('When change company code button is clicked show input with `companyCode` prop value, check company code button and reset to default company code button are visible and sign in button is not visible', async () => {
    render(
      <SignIn
        defaultCompanyCode="acme-default"
        initialCompanyCode={companyCode}
        initialCompanyCodeIsValid={true}
        onSignIn={onSignIn}
        onCompanyCodeSubmit={onCompanyCodeSubmit}
        translations={translations}
      />
    )

    fireEvent.click(screen.getByText(translations.changeCompanyCodeText))

    await waitFor(() => expect(screen.getByText(translations.checkCompanyCodeText)).toBeVisible())
    expect(screen.queryByText(translations.resetDefaultCompanyCodeText)).toBeVisible()
    expect(screen.queryByText(translations.signInText)).not.toBeInTheDocument()
    expect(screen.queryByText(translations.pleaseEnterCompanyCodeText)).not.toBeInTheDocument()
    expect(screen.queryByText(translations.invalidCompanyCodeText)).not.toBeInTheDocument()

    const companyCodeInput = screen.getByPlaceholderText(translations.companyCodePlaceholder)
    expect(companyCodeInput).toHaveAttribute('value', companyCode)
  })

  test('Clicking the reset company code button resets it to the default', async () => {
    const defaultCompanyCode = 'acme-default'
    render(
      <SignIn
        defaultCompanyCode={defaultCompanyCode}
        initialCompanyCode={companyCode}
        initialCompanyCodeIsValid={true}
        onSignIn={onSignIn}
        onCompanyCodeSubmit={onCompanyCodeSubmit}
        translations={translations}
      />
    )

    fireEvent.click(screen.getByText(translations.changeCompanyCodeText))
    fireEvent.click(screen.getByText(translations.resetDefaultCompanyCodeText))

    const companyCodeInput = screen.getByPlaceholderText(translations.companyCodePlaceholder)
    expect(companyCodeInput).toHaveAttribute('value', defaultCompanyCode)
  })

  test('When company code is entered and check company code clicked the onCompanyCodeSubmit handler is fired with new company code', async () => {
    render(
      <SignIn
        initialCompanyCode={companyCode}
        initialCompanyCodeIsValid={true}
        onSignIn={onSignIn}
        onCompanyCodeSubmit={onCompanyCodeSubmit}
        translations={translations}
      />
    )

    fireEvent.click(screen.getByText(translations.changeCompanyCodeText))

    await waitFor(() => expect(screen.getByText(translations.checkCompanyCodeText)).toBeVisible())

    const companyCodeInput = screen.getByPlaceholderText(translations.companyCodePlaceholder)

    const updatedCompanyCode = 'acmenew'

    fireEvent.ionChange(companyCodeInput, updatedCompanyCode)

    const checkCompanyCodeButton = screen.getByText(translations.checkCompanyCodeText)

    fireEvent.submit(checkCompanyCodeButton)

    await waitFor(() => expect(screen.queryByText(translations.checkCompanyCodeText)).not.toBeInTheDocument())

    expect(onCompanyCodeSubmit.mock.calls[0][0]).toEqual(updatedCompanyCode)
  })

  test('When company code is entered and enter is pressed the onCompanyCodeSubmit handler is fired with new company code', async () => {
    render(
      <SignIn
        initialCompanyCode={companyCode}
        initialCompanyCodeIsValid={true}
        onSignIn={onSignIn}
        onCompanyCodeSubmit={onCompanyCodeSubmit}
        translations={translations}
      />
    )

    fireEvent.click(screen.getByText(translations.changeCompanyCodeText))

    await waitFor(() => expect(screen.getByText(translations.checkCompanyCodeText)).toBeVisible())

    const companyCodeInput = screen.getByPlaceholderText(translations.companyCodePlaceholder)

    const updatedCompanyCode = 'acmenewx'

    fireEvent.ionChange(companyCodeInput, updatedCompanyCode)

    fireEvent.submit(companyCodeInput)

    await waitFor(() => expect(screen.queryByText(translations.checkCompanyCodeText)).not.toBeInTheDocument())

    expect(onCompanyCodeSubmit.mock.calls[0][0]).toEqual(updatedCompanyCode)
  })

  test('When the company code initially does not exist do not show error text but show it when clicking check company code button on empty input', async () => {
    render(
      <SignIn
        initialCompanyCodeIsValid={true}
        onSignIn={onSignIn}
        onCompanyCodeSubmit={onCompanyCodeSubmit}
        translations={translations}
      />
    )

    const checkCompanyCodeButton = screen.getByText(translations.checkCompanyCodeText)
    expect(checkCompanyCodeButton).toBeVisible()

    // Users haven't done anything wrong yet so don't show an error
    expect(screen.queryByText(translations.pleaseEnterCompanyCodeText)).not.toBeInTheDocument()
    expect(screen.queryByText(translations.invalidCompanyCodeText)).not.toBeInTheDocument()

    expect(screen.queryByText(translations.signInText)).not.toBeInTheDocument()
    expect(screen.queryByText(translations.resetDefaultCompanyCodeText)).not.toBeInTheDocument()
    expect(screen.queryByText(translations.changeCompanyCodeText)).not.toBeInTheDocument()

    fireEvent.submit(checkCompanyCodeButton)

    await waitFor(() => expect(screen.getByText(translations.pleaseEnterCompanyCodeText)).toBeVisible())
  })

  test('When company code is invalid and reset to default is clicked error should not display', async () => {
    const defaultCompanyCode = 'acme-default'
    render(
      <SignIn
        defaultCompanyCode={defaultCompanyCode}
        initialCompanyCode={companyCode}
        initialCompanyCodeIsValid={true}
        onSignIn={onSignIn}
        onCompanyCodeSubmit={onCompanyCodeSubmit}
        translations={translations}
      />
    )

    fireEvent.click(screen.getByText(translations.changeCompanyCodeText))

    const companyCodeInput = screen.getByPlaceholderText(translations.companyCodePlaceholder)

    fireEvent.ionChange(companyCodeInput, '')

    const checkCompanyCodeButton = screen.getByText(translations.checkCompanyCodeText)
    fireEvent.submit(checkCompanyCodeButton)

    await waitFor(() => expect(screen.getByText(translations.pleaseEnterCompanyCodeText)).toBeVisible())

    fireEvent.click(screen.getByText(translations.resetDefaultCompanyCodeText))

    expect(screen.queryByText(translations.pleaseEnterCompanyCodeText)).not.toBeInTheDocument()
  })

  test('When company code is invalid and user provides new company code errors should not display', async () => {
    render(
      <SignIn
        initialCompanyCode={companyCode}
        initialCompanyCodeIsValid={true}
        onSignIn={onSignIn}
        onCompanyCodeSubmit={onCompanyCodeSubmit}
        translations={translations}
      />
    )

    fireEvent.click(screen.getByText(translations.changeCompanyCodeText))

    const companyCodeInput = screen.getByPlaceholderText(translations.companyCodePlaceholder)

    fireEvent.ionChange(companyCodeInput, '')

    fireEvent.submit(screen.getByText(translations.checkCompanyCodeText))

    await waitFor(() => expect(screen.getByText(translations.pleaseEnterCompanyCodeText)).toBeVisible())

    fireEvent.ionChange(companyCodeInput, 'new company code')

    await waitFor(() => expect(screen.queryByText(translations.pleaseEnterCompanyCodeText)).not.toBeInTheDocument())
    expect(screen.queryByText(translations.invalidCompanyCodeText)).not.toBeInTheDocument()
  })

  test('Company code is invalid when it does not match allowable characters', async () => {
    const defaultCompanyCode = 'acme-default'
    render(
      <SignIn
        defaultCompanyCode={defaultCompanyCode}
        initialCompanyCode={companyCode}
        initialCompanyCodeIsValid={true}
        onSignIn={onSignIn}
        onCompanyCodeSubmit={onCompanyCodeSubmit}
        translations={translations}
      />
    )

    fireEvent.click(screen.getByText(translations.changeCompanyCodeText))

    const companyCodeInput = screen.getByPlaceholderText(translations.companyCodePlaceholder)

    fireEvent.ionChange(companyCodeInput, 'acme?sdfsf')

    const checkCompanyCodeButton = screen.getByText(translations.checkCompanyCodeText)
    fireEvent.submit(checkCompanyCodeButton)

    await waitFor(() => expect(screen.getByText(translations.invalidCompanyCodeText)).toBeVisible())
  })

  test('When initial company code is invalid and a new one is entered user should be able to check company code', async () => {
    let deferredResolve: (companyCode: string) => void

    onCompanyCodeSubmit.mockResolvedValueOnce(
      new Promise(resolve => {
        deferredResolve = resolve
      })
    )

    render(
      <SignIn
        initialCompanyCode={companyCode}
        initialCompanyCodeIsValid={false}
        onSignIn={onSignIn}
        onCompanyCodeSubmit={onCompanyCodeSubmit}
        translations={translations}
      />
    )

    await waitFor(() => expect(screen.getByText(translations.invalidCompanyCodeText)).toBeVisible())

    const companyCodeInput = screen.getByPlaceholderText(translations.companyCodePlaceholder)

    fireEvent.ionChange(companyCodeInput, 'ADifferentCompanyCode')

    const checkCompanyCodeButton = screen.getByText(translations.checkCompanyCodeText)
    fireEvent.submit(checkCompanyCodeButton)

    await waitFor(() => expect(screen.queryByText(translations.invalidCompanyCodeText)).not.toBeInTheDocument())

    expect(screen.queryByText(translations.checkCompanyCodeText)).not.toBeInTheDocument()

    // Flushing last render
    await act(async () => deferredResolve?.(''))
  })
})
