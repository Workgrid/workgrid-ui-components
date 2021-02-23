import React from 'react'
import { Input } from './Input'
import { render, screen, waitFor } from '@testing-library/react'
import { ionFireEvent as fireEvent } from '@ionic/react-test-utils'

describe('Input', () => {
  const defaultProps = {
    type: 'text',
    name: 'Text',
    label: 'Input Label',
    placeholder: 'Placeholder Text',
    testId: 'input-1'
  }

  test('Default options', () => {
    render(<Input {...defaultProps} />)
    expect(screen.getByText(defaultProps.label)).not.toBeNull()
    expect(screen.getByPlaceholderText(defaultProps.placeholder)).not.toBeNull()
    expect(screen.getByTestId('ion-item').className).toEqual('')
  })

  test('Disable option', () => {
    render(<Input {...defaultProps} disabled={true} />)
    expect((screen.getByTestId(defaultProps.testId) as any).disabled)
  })

  test('ReadOnly option', () => {
    render(<Input {...defaultProps} readonly={true} />)
    expect((screen.getByTestId(defaultProps.testId) as any).readonly)
  })

  test('InvalidInput option', () => {
    render(<Input {...defaultProps} inputInvalid={true} />)
    expect(screen.getByTestId('ion-item').className).toEqual('ion-invalid ion-touched')
  })

  test('onBlur option', () => {
    const onBlur = jest.fn()
    render(<Input {...defaultProps} onBlur={onBlur} />)
    fireEvent.blur(screen.getByTestId(defaultProps.testId))
    expect(onBlur).toHaveBeenCalled()
  })

  test('onFocus option', () => {
    const onFocus = jest.fn()
    render(<Input {...defaultProps} onFocus={onFocus} />)
    fireEvent.focus(screen.getByTestId(defaultProps.testId))
    expect(onFocus).toHaveBeenCalled()
  })

  test('onChange option', async () => {
    const onChange = jest.fn()
    const props = { ...defaultProps, type: 'number', value: 100 }
    render(<Input {...props} onChange={onChange} />)
    const updatedValue = '25'
    fireEvent.ionChange(screen.getByTestId(defaultProps.testId), updatedValue)

    await waitFor(() => expect(onChange.mock.calls[0][0].detail.value).toEqual(updatedValue))
  })
})
