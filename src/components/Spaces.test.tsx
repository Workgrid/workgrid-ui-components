import React from 'react'
import { Spaces } from './Spaces'
import { render, screen, waitFor } from '@testing-library/react'
import { ionFireEvent as fireEvent } from '@ionic/react-test-utils'

describe('Spaces', () => {
  const translations = {
    selectASpaceLabel: 'Select a Space',
    spacesTitle: `Spaces`,
    selectSpace: 'Go',
    defaultCaption: 'Default',
    spacesCaption: 'You are currently in Space Two',
    noSpacesText: 'No spaces found',
    refreshText: 'Refresh'
  }

  const onSpaceSubmit = jest.fn()
  const onRefresh = jest.fn()

  const defaultSpaceId = 'space-1'
  const currentSpaceId = 'space-2'
  const spaces = [
    {
      id: 'space-1',
      name: 'Space One'
    },
    {
      id: 'space-2',
      name: 'Space Two'
    },
    {
      id: 'space-3',
      name: 'Space Three'
    }
  ]

  test('current space is selected by default', async () => {
    render(
      <Spaces
        currentSpaceId={currentSpaceId}
        spaces={spaces}
        translations={translations}
        onRefresh={onRefresh}
        onSpaceSubmit={onSpaceSubmit}
      />
    )

    const spacesRadioGroup = screen.getByText(translations.selectASpaceLabel).parentElement?.parentElement

    await waitFor(() => expect(spacesRadioGroup).toHaveAttribute('value', currentSpaceId))
  })

  test('default space is selected by default when current space is undefined', async () => {
    render(
      <Spaces
        defaultSpaceId={defaultSpaceId}
        spaces={spaces}
        translations={translations}
        onRefresh={onRefresh}
        onSpaceSubmit={onSpaceSubmit}
      />
    )

    const spacesRadioGroup = screen.getByText(translations.selectASpaceLabel).parentElement?.parentElement

    await waitFor(() => expect(spacesRadioGroup).toHaveAttribute('value', defaultSpaceId))
  })

  test('First space in the list should be selected if neither current space or default space provided', async () => {
    render(<Spaces spaces={spaces} translations={translations} onRefresh={onRefresh} onSpaceSubmit={onSpaceSubmit} />)

    const spacesRadioGroup = screen.getByText(translations.selectASpaceLabel).parentElement?.parentElement

    await waitFor(() => expect(spacesRadioGroup).toHaveAttribute('value', spaces[0].id))
  })

  test('onSpaceSubmit is fired when user changes spaces', async () => {
    render(
      <Spaces
        currentSpaceId={currentSpaceId}
        spaces={spaces}
        translations={translations}
        onRefresh={onRefresh}
        onSpaceSubmit={onSpaceSubmit}
      />
    )

    const spacesRadioGroup = screen.getByText(translations.selectASpaceLabel).parentElement?.parentElement

    const selectedSpace = spaces[2].id
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    fireEvent.ionChange(spacesRadioGroup!, selectedSpace)

    fireEvent.submit(screen.getByText(translations.selectSpace))

    await waitFor(() => expect(onSpaceSubmit).toHaveBeenCalledWith(selectedSpace))
  })

  test('pull to refresh triggers onRefresh callback', async () => {
    render(
      <Spaces
        defaultSpaceId={defaultSpaceId}
        spaces={spaces}
        translations={translations}
        onRefresh={onRefresh}
        onSpaceSubmit={onSpaceSubmit}
      />
    )

    const refresher = screen.getByTestId('pullToRefresh')

    const eventDetailComplete = jest.fn()

    fireEvent.ionRefresh(refresher, eventDetailComplete)

    await waitFor(() => expect(onRefresh).toHaveBeenCalledWith())
    expect(eventDetailComplete).toHaveBeenCalledWith()
  })

  test('onRefresh invoked when refresh toolbar button is clicked', async () => {
    render(
      <Spaces
        defaultSpaceId={defaultSpaceId}
        spaces={spaces}
        translations={translations}
        onRefresh={onRefresh}
        onSpaceSubmit={onSpaceSubmit}
      />
    )

    const refreshToolbarButton = screen.getByLabelText(translations.refreshText)

    fireEvent.click(refreshToolbarButton)

    await waitFor(() => expect(onRefresh).toHaveBeenCalledWith())
  })

  test('onRefresh invoked when there are no spaces and refresh button is clicked', async () => {
    render(<Spaces spaces={[]} translations={translations} onRefresh={onRefresh} onSpaceSubmit={onSpaceSubmit} />)

    const refreshButton = screen.getAllByLabelText(translations.refreshText)[1]

    fireEvent.click(refreshButton)

    await waitFor(() => expect(onRefresh).toHaveBeenCalledWith())
  })
})
