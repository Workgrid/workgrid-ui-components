import React from 'react'
import { Button } from './Button'
import { render, fireEvent, screen } from '@testing-library/react'

describe('Buttons', () => {
  test('onClick handler fires', () => {
    const clickFn = jest.fn()
    const buttonText = 'Click Me!'

    render(<Button onClick={clickFn}>{buttonText}</Button>)

    fireEvent.click(screen.getByText(buttonText))

    expect(clickFn).toHaveBeenCalled()
  })
})
