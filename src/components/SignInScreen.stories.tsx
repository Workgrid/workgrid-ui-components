import React from 'react'
import { Story, Meta } from '@storybook/react'

import { SignInScreen, SignInScreenProps } from './SignInScreen'

export default {
  title: 'Screens/Sign In',
  component: SignInScreen
} as Meta

const onCompanyCodeSubmit = (): Promise<void> => new Promise(resolve => setTimeout(() => resolve, 3000))

const Template: Story<SignInScreenProps> = args => <SignInScreen {...args} onCompanyCodeSubmit={onCompanyCodeSubmit} />

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

export const ValidCompanyCode = Template.bind({})

ValidCompanyCode.args = {
  translations,
  initialCompanyCodeIsValid: true,
  initialCompanyCode: 'acmecorp'
}

export const InvalidCompanyCode = Template.bind({})

InvalidCompanyCode.args = {
  translations,
  initialCompanyCodeIsValid: false,
  initialCompanyCode: 'acmecorpbad'
}

export const NoCompanyCode = Template.bind({})

NoCompanyCode.args = {
  translations,
  initialCompanyCodeIsValid: true
}

export const NoCompanyCodeWithDefault = Template.bind({})

NoCompanyCodeWithDefault.args = {
  translations,
  initialCompanyCodeIsValid: true,
  defaultCompanyCode: 'acmecorp'
}
