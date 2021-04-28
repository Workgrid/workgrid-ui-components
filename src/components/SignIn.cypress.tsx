import React from 'react'
import { SignIn } from './SignIn'
import { mount } from '@cypress/react'

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

  // const onCompanyCodeSubmit = jest.fn()
  // const onSignIn = jest.fn()
  const companyCode = 'acmecorp'

  it('onSignIn handler fires', () => {
    const onSignIn = cy.stub().as('onSignIn')
    const onCompanyCodeSubmit = cy.stub().as('onCompanyCodeSubmit')

    mount(
      <SignIn
        initialCompanyCode={companyCode}
        initialCompanyCodeIsValid={true}
        onSignIn={onSignIn}
        onCompanyCodeSubmit={onCompanyCodeSubmit}
        translations={translations}
      />
    )

    cy.findByText(translations.signInText).click()

    cy.wrap(onSignIn).should('have.been.calledOnceWith')
  })

  it('When change company code button is clicked show input with `companyCode` prop value, check company code button is visible and sign in button and reset to default company code button not visible', () => {
    const onSignIn = cy.stub().as('onSignIn')
    const onCompanyCodeSubmit = cy.stub().as('onCompanyCodeSubmit')

    mount(
      <SignIn
        initialCompanyCode={companyCode}
        initialCompanyCodeIsValid={true}
        onSignIn={onSignIn}
        onCompanyCodeSubmit={onCompanyCodeSubmit}
        translations={translations}
      />
    )

    cy.findByText(translations.changeCompanyCodeText).click()
    cy.findByText(translations.checkCompanyCodeText).should('exist')
    cy.findByText(translations.signInText).should('not.exist')
    cy.findByText(translations.resetDefaultCompanyCodeText).should('not.exist')
    cy.findByLabelText(translations.companyCodeLabel).invoke('val').should('equal', companyCode)
  })

  it('When change company code button is clicked show input with `companyCode` prop value, check company code button and reset to default company code button are visible and sign in button is not visible', () => {
    const onSignIn = cy.stub().as('onSignIn')
    const onCompanyCodeSubmit = cy.stub().as('onCompanyCodeSubmit')

    mount(
      <SignIn
        defaultCompanyCode="acme-default"
        initialCompanyCode={companyCode}
        initialCompanyCodeIsValid={true}
        onSignIn={onSignIn}
        onCompanyCodeSubmit={onCompanyCodeSubmit}
        translations={translations}
      />
    )

    cy.findByText(translations.changeCompanyCodeText).click()
    cy.findByText(translations.resetDefaultCompanyCodeText).should('exist')
    cy.findByText(translations.signInText).should('not.exist')
    cy.findByText(translations.pleaseEnterCompanyCodeText).should('not.exist')
    cy.findByText(translations.invalidCompanyCodeText).should('not.exist')

    cy.findByLabelText(translations.companyCodeLabel).invoke('val').should('equal', companyCode)
  })

  it('Clicking the reset company code button resets it to the default', () => {
    const defaultCompanyCode = 'acme-default'

    const onSignIn = cy.stub().as('onSignIn')
    const onCompanyCodeSubmit = cy.stub().as('onCompanyCodeSubmit')

    mount(
      <SignIn
        defaultCompanyCode={defaultCompanyCode}
        initialCompanyCode={companyCode}
        initialCompanyCodeIsValid={true}
        onSignIn={onSignIn}
        onCompanyCodeSubmit={onCompanyCodeSubmit}
        translations={translations}
      />
    )

    cy.findByText(translations.changeCompanyCodeText).click()
    cy.findByText(translations.resetDefaultCompanyCodeText).click()

    cy.findByLabelText(translations.companyCodeLabel).invoke('val').should('equal', defaultCompanyCode)
  })

  it('When company code is entered and check company code clicked the onCompanyCodeSubmit handler is fired with new company code', () => {
    const onSignIn = cy.stub().as('onSignIn')
    const onCompanyCodeSubmit = cy.stub().as('onCompanyCodeSubmit')

    mount(
      <SignIn
        initialCompanyCode={companyCode}
        initialCompanyCodeIsValid={true}
        onSignIn={onSignIn}
        onCompanyCodeSubmit={onCompanyCodeSubmit}
        translations={translations}
      />
    )

    cy.findByText(translations.changeCompanyCodeText).click()

    cy.findByText(translations.checkCompanyCodeText).should('exist')

    const updatedCompanyCode = 'acmenew'
    cy.findByLabelText(translations.companyCodeLabel).focus().clear().type(updatedCompanyCode)

    cy.findByText(translations.checkCompanyCodeText).click()

    cy.findByText(translations.checkCompanyCodeText).should('not.exist')

    cy.wrap(onCompanyCodeSubmit).should('have.been.calledWithExactly', updatedCompanyCode)
  })

  it('When company code is entered and enter is pressed the onCompanyCodeSubmit handler is fired with new company code', () => {
    const onSignIn = cy.stub().as('onSignIn')
    const onCompanyCodeSubmit = cy.stub().as('onCompanyCodeSubmit')

    mount(
      <SignIn
        initialCompanyCode={companyCode}
        initialCompanyCodeIsValid={true}
        onSignIn={onSignIn}
        onCompanyCodeSubmit={onCompanyCodeSubmit}
        translations={translations}
      />
    )

    cy.findByText(translations.changeCompanyCodeText).click()

    cy.findByText(translations.checkCompanyCodeText).should('exist')

    const updatedCompanyCode = 'acmenew'
    cy.findByLabelText(translations.companyCodeLabel).focus().clear().type(`${updatedCompanyCode}{enter}`)

    cy.findByText(translations.checkCompanyCodeText).should('not.exist')

    cy.wrap(onCompanyCodeSubmit).should('have.been.calledWithExactly', updatedCompanyCode)
  })

  it('When the company code initially does not exist do not show error text but show it when clicking check company code button on empty input', () => {
    const onSignIn = cy.stub().as('onSignIn')
    const onCompanyCodeSubmit = cy.stub().as('onCompanyCodeSubmit')

    mount(
      <SignIn
        initialCompanyCodeIsValid={true}
        onSignIn={onSignIn}
        onCompanyCodeSubmit={onCompanyCodeSubmit}
        translations={translations}
      />
    )

    cy.findByText(translations.checkCompanyCodeText).should('exist')

    // Users haven't done anything wrong yet so don't show an error
    cy.findByText(translations.pleaseEnterCompanyCodeText).should('not.exist')
    cy.findByText(translations.invalidCompanyCodeText).should('not.exist')

    cy.findByText(translations.signInText).should('not.exist')
    cy.findByText(translations.resetDefaultCompanyCodeText).should('not.exist')
    cy.findByText(translations.changeCompanyCodeText).should('not.exist')

    cy.findByText(translations.checkCompanyCodeText).click()

    cy.findByText(translations.pleaseEnterCompanyCodeText).should('exist')
  })

  it('When company code is invalid and reset to default is clicked error should not display', () => {
    const defaultCompanyCode = 'acme-default'

    const onSignIn = cy.stub().as('onSignIn')
    const onCompanyCodeSubmit = cy.stub().as('onCompanyCodeSubmit')

    mount(
      <SignIn
        defaultCompanyCode={defaultCompanyCode}
        initialCompanyCode={companyCode}
        initialCompanyCodeIsValid={true}
        onSignIn={onSignIn}
        onCompanyCodeSubmit={onCompanyCodeSubmit}
        translations={translations}
      />
    )

    cy.findByText(translations.changeCompanyCodeText).click()

    cy.findByLabelText(translations.companyCodeLabel).focus().type('bad$Company$Code').clear()

    cy.findByText(translations.checkCompanyCodeText).click()

    cy.findByText(translations.pleaseEnterCompanyCodeText).should('exist')

    cy.findByText(translations.resetDefaultCompanyCodeText).click()

    cy.findByText(translations.pleaseEnterCompanyCodeText).should('not.exist')
  })

  it('When company code is invalid and user provides new company code errors should not display', () => {
    const onSignIn = cy.stub().as('onSignIn')
    const onCompanyCodeSubmit = cy.stub().as('onCompanyCodeSubmit')

    mount(
      <SignIn
        initialCompanyCode={companyCode}
        initialCompanyCodeIsValid={true}
        onSignIn={onSignIn}
        onCompanyCodeSubmit={onCompanyCodeSubmit}
        translations={translations}
      />
    )

    cy.findByText(translations.changeCompanyCodeText).click()

    cy.findByLabelText(translations.companyCodeLabel).focus().type('bad$Company$Code').clear()

    cy.findByText(translations.checkCompanyCodeText).click()

    cy.findByText(translations.pleaseEnterCompanyCodeText).should('exist')

    cy.findByLabelText(translations.companyCodeLabel).focus().type('new-company-code')

    cy.findByText(translations.pleaseEnterCompanyCodeText).should('not.exist')
    cy.findByText(translations.invalidCompanyCodeText).should('not.exist')
  })

  it('Company code is invalid when it does not match allowable characters', () => {
    const defaultCompanyCode = 'acme-default'

    const onSignIn = cy.stub().as('onSignIn')
    const onCompanyCodeSubmit = cy.stub().as('onCompanyCodeSubmit')

    mount(
      <SignIn
        defaultCompanyCode={defaultCompanyCode}
        initialCompanyCode={companyCode}
        initialCompanyCodeIsValid={true}
        onSignIn={onSignIn}
        onCompanyCodeSubmit={onCompanyCodeSubmit}
        translations={translations}
      />
    )

    cy.findByText(translations.changeCompanyCodeText).click()

    cy.findByLabelText(translations.companyCodeLabel).focus().type('acme?sdfsf')

    cy.findByText(translations.checkCompanyCodeText).click()

    cy.findByText(translations.invalidCompanyCodeText).should('exist')
  })

  it('When initial company code is invalid and a new one is entered user should be able to check company code', () => {
    const onSignIn = cy.stub().as('onSignIn')
    const onCompanyCodeSubmit = cy.stub().as('onCompanyCodeSubmit').resolves('')

    mount(
      <SignIn
        initialCompanyCode={companyCode}
        initialCompanyCodeIsValid={false}
        onSignIn={onSignIn}
        onCompanyCodeSubmit={onCompanyCodeSubmit}
        translations={translations}
      />
    )

    cy.findByText(translations.invalidCompanyCodeText).should('exist')

    cy.findByLabelText(translations.companyCodeLabel).focus().type('ADifferentCompanyCode')

    cy.findByText(translations.checkCompanyCodeText).click()

    cy.findByText(translations.invalidCompanyCodeText).should('not.exist')
    cy.findByText(translations.invalidCompanyCodeText).should('not.exist')
  })
})
