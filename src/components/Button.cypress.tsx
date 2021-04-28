import React from 'react'
import { mount } from '@cypress/react'
import { Button } from './Button'

describe('Buttons', () => {
  it('onClick handler fires', () => {
    const clickFn = cy.stub().as('onFocus')
    const buttonText = 'Click Me!'

    mount(<Button onClick={clickFn}>{buttonText}</Button>)

    cy.findByText(buttonText).click()

    cy.wrap(clickFn).should('have.been.calledOnce')
  })
})
