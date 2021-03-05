import React from 'react'
import { Input } from './Input'
import { render, screen, waitFor } from '@testing-library/react'
import { ionFireEvent as fireEvent } from '@ionic/react-test-utils'

describe('Input', () => {
  const defaultProps = {
    name: 'Text',
    label: 'Input Label',
    placeholder: 'Placeholder Text',
    testId: 'input-1'
  }

  test('Default options', () => {
    render(<Input {...defaultProps} data-testid={defaultProps.testId} />)
    expect(screen.getByText(defaultProps.label)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(defaultProps.placeholder)).toBeInTheDocument()
    expect(screen.getByTestId('ion-item')).toHaveClass('', { exact: true })
  })

  test('InvalidInput option', () => {
    render(<Input {...defaultProps} invalid={true} />)
    expect(screen.getByTestId('ion-item')).toHaveClass('ion-invalid ion-touched', { exact: true })
  })

  test('onBlur option', () => {
    const onBlur = jest.fn()
    render(<Input {...defaultProps} data-testid={defaultProps.testId} onBlur={onBlur} />)
    fireEvent.blur(screen.getByTestId(defaultProps.testId))
    expect(onBlur).toHaveBeenCalled()
  })

  test('onFocus option', () => {
    const onFocus = jest.fn()
    render(<Input {...defaultProps} data-testid={defaultProps.testId} onFocus={onFocus} />)
    fireEvent.focus(screen.getByTestId(defaultProps.testId))
    expect(onFocus).toHaveBeenCalled()
  })

  test('onChange option', async () => {
    const onChange = jest.fn()
    render(<Input {...defaultProps} data-testid={defaultProps.testId} onChange={onChange} />)
    const updatedValue = '25'
    fireEvent.ionChange(screen.getByTestId(defaultProps.testId), updatedValue)
    await waitFor(() => expect(onChange.mock.calls[0][0].detail.value).toEqual(updatedValue))
  })
})
