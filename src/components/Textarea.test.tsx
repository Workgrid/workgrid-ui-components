import React from 'react'
import { Textarea } from './Textarea'
import { render, screen, waitFor } from '@testing-library/react'
import { ionFireEvent as fireEvent } from '@ionic/react-test-utils'

describe('Textarea', () => {
  const defaultProps = {
    name: 'Text',
    label: 'Textarea Label',
    placeholder: 'Placeholder Text',
    testId: 'Textarea-1'
  }

  test('Default options', () => {
    render(<Textarea {...defaultProps} data-testid={defaultProps.testId} />)
    expect(screen.getByText(defaultProps.label)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(defaultProps.placeholder)).toBeInTheDocument()
    expect(screen.getByTestId('ion-item')).toHaveClass('', { exact: true })
  })

  test('InvalidTextarea option', () => {
    render(<Textarea {...defaultProps} invalidText="Field is required" />)
    expect(screen.getByTestId('ion-item')).toHaveClass('ion-invalid ion-touched', { exact: true })
  })

  test('onBlur option', () => {
    const onBlur = jest.fn()
    render(<Textarea {...defaultProps} data-testid={defaultProps.testId} onBlur={onBlur} />)
    fireEvent.ionBlur(screen.getByTestId(defaultProps.testId))
    expect(onBlur).toHaveBeenCalled()
  })

  test('onFocus option', () => {
    const onFocus = jest.fn()
    render(<Textarea {...defaultProps} data-testid={defaultProps.testId} onFocus={onFocus} />)
    fireEvent.ionFocus(screen.getByTestId(defaultProps.testId))
    expect(onFocus).toHaveBeenCalled()
  })

  test('onChange option', async () => {
    const onChange = jest.fn()
    render(<Textarea {...defaultProps} data-testid={defaultProps.testId} onChange={onChange} />)
    const updatedValue = '25'
    fireEvent.ionChange(screen.getByTestId(defaultProps.testId), updatedValue)
    await waitFor(() => expect(onChange.mock.calls[0][0].detail.value).toEqual(updatedValue))
  })
})
