import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react-native'
import FlagSelect from '../../../components/molecules/flag-select'

const onSelectMock = jest.fn()
beforeEach(() => {
  jest.clearAllMocks()
})

describe('FlagSelect', () => {
  it('should render correctly with the given text', () => {
    const { getByText } = render(<FlagSelect text="Select Country" onSelect={onSelectMock} />)
    expect(getByText('Select Country')).toBeTruthy()
  })

  it('should open the modal when the button is pressed', () => {
    const { getByText, getByTestId } = render(
      <FlagSelect text="Select Country" onSelect={onSelectMock} />
    )
    const button = getByText('Select Country')
    fireEvent.press(button)
    const modal = getByTestId('countryPickerModal')
    expect(modal.props.visible).toBe(true)
  })

  it('should check if onSelect is called when a country is selected', async () => {
    const { getByText, getByTestId } = render(
      <FlagSelect text="Select Country" onSelect={onSelectMock} />
    )

    const button = getByText('Select Country')
    fireEvent.press(button)

    const countryPicker = getByTestId('countryPicker')
    fireEvent(countryPicker, 'onValueChange', 'USA') // Simulate selecting 'USA'

    await waitFor(() => {
      expect(onSelectMock).toHaveBeenCalledWith('USA')
    })
  })

  it('should check if the modal is closed when a country is selected', async () => {
    const { getByText, getByTestId } = render(
      <FlagSelect text="Select Country" onSelect={onSelectMock} />
    )

    const button = getByText('Select Country')
    fireEvent.press(button)

    const countryPicker = getByTestId('countryPicker')
    fireEvent(countryPicker, 'onValueChange', 'USA') // Simulate selecting 'USA'

    await waitFor(() => {
      const modal = getByTestId('countryPickerModal')
      expect(modal.props.visible).toBe(false)
    })
  })
})
