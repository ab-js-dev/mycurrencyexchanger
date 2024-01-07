import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import StartTransfer from '@molecules/start-transfer' // Adjust the import path as necessary

jest.mock('@expo/vector-icons', () => ({
  FontAwesome5: 'FontAwesome5'
}))

describe('StartTransfer', () => {
  it('renders the processing info and the start button', () => {
    const onPressMock = jest.fn()
    const { getByText } = render(<StartTransfer onPress={onPressMock} />)

    expect(getByText('Processing time - 1 Hour')).toBeTruthy() // Assuming this text is unique to the ProcessingTimeInfo component
    expect(getByText('Start transfer')).toBeTruthy() // Assuming this text is unique to the StartTransferButton component
  })

  it('calls the onPress callback when the start button is pressed', () => {
    const onPressMock = jest.fn()
    const { getByText } = render(<StartTransfer onPress={onPressMock} />)

    const startButton = getByText('Start transfer')
    fireEvent.press(startButton)

    expect(onPressMock).toHaveBeenCalledTimes(1)
  })

  it('disables the start button when disabled prop is true', () => {
    const onPressMock = jest.fn()
    const { getByText } = render(<StartTransfer onPress={onPressMock} disabled={true} />)

    const startButton = getByText('Start transfer')
    fireEvent.press(startButton)

    expect(onPressMock).not.toHaveBeenCalled()
  })
})
