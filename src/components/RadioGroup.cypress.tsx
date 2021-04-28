import React from 'react'
import { RadioGroup } from './RadioGroup'
import { mount } from '@cypress/react'
import { Radio } from './Radio'

describe('RadioGroup', () => {
  it('onChange handler fires', () => {
    const onChange = cy.stub().as('onChange')
    const radioValue = 'option-b'
    const optionByLabel = 'Option B'

    mount(
      <RadioGroup name="radio-group" label="Radio Group Label" onChange={onChange} value="option-a">
        <Radio name="radio-group" value="option-a" label="Option A" />
        <Radio name="radio-group" value={radioValue} label={optionByLabel} />
        <Radio name="radio-group" value="option-c" label="Option C" />
      </RadioGroup>
    )

    cy.findByLabelText(optionByLabel).click()

    cy.wrap(onChange).should('have.been.calledWithMatch', { detail: { value: radioValue } })
  })
})
