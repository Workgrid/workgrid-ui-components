import React from 'react'
import { RadioGroup } from './RadioGroup'
import { render, screen, waitFor } from '@testing-library/react'
import { ionFireEvent as fireEvent } from '@ionic/react-test-utils'
import { Radio } from './Radio'

describe('RadioGroup', () => {
  test('onChange handler fires', async () => {
    const onChange = jest.fn()
    const radioGroupLabel = 'Radio Group Label'
    const radioValue = 'option-b'

    render(
      <RadioGroup name="radio-group" label={radioGroupLabel} onChange={onChange} value="option-a">
        <Radio name="radio-group" value="option-a" label="Option A" />
        <Radio name="radio-group" value={radioValue} label="Option B" />
        <Radio name="radio-group" value="option-c" label="Option C" />
      </RadioGroup>
    )

    /*
    getByLabelText does not work because Ionic is built on Web Components and @testing-library/dom does not know how to look up nodes in the Shadow DOM
     */
    const radioGroup = screen.getByText(radioGroupLabel)

    /*
     * Similar to the above we have to walk up a couple of nodes in the DOM hierarchy to get to the <RadioGroup /> since getByRole does not work. Similarly I didn't want to add a testId prop just to support testing.
     */
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    fireEvent.ionChange(radioGroup.parentElement!.parentElement!, radioValue)

    await waitFor(() => expect(onChange.mock.calls[0][0].detail.value).toEqual(radioValue))
  })
})
