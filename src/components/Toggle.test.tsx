import React from 'react'
import { Toggle } from './Toggle'
import { render, screen, waitFor } from '@testing-library/react'
import { ionFireEvent as fireEvent } from '@ionic/react-test-utils'

describe('Toggle', () => {
  const defaultProps = {
    name: 'Toggle',
    label: 'Toggle Label'
  }

  test('Default options', () => {
    render(<Toggle {...defaultProps} />)
    expect(screen.getByText(defaultProps.label)).toBeInTheDocument()
  })

  test('onChange option', async () => {
    const onChange = jest.fn()

    render(<Toggle {...defaultProps} onChange={onChange} />)

    fireEvent.click(screen.getByRole('toggle'))
    await waitFor(() => expect(onChange.mock.calls[0][0].detail.checked).toEqual(true))

    fireEvent.click(screen.getByRole('toggle'))
    await waitFor(() => expect(onChange.mock.calls[1][0].detail.checked).toEqual(false))
  })
})
