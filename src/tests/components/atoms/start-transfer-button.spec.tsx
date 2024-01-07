import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import StartTransferButton from '@atoms/start-transfer-button'

describe('StartTransferButton', () => {
  it('renders the button with the correct text', () => {
    const { getByText } = render(<StartTransferButton onPress={() => null} />)
    expect(getByText('Start transfer')).toBeTruthy()
  })

  it('calls the onPress function when pressed', () => {
    const onPressMock = jest.fn()
    const { getByText } = render(<StartTransferButton onPress={onPressMock} />)

    fireEvent.press(getByText('Start transfer'))
    expect(onPressMock).toHaveBeenCalled()
  })

  it('does not call onPress when the button is disabled', () => {
    const onPressMock = jest.fn()
    const { getByText } = render(<StartTransferButton onPress={onPressMock} disabled={true} />)

    const button = getByText('Start transfer')
    fireEvent.press(button)

    expect(onPressMock).not.toHaveBeenCalled()
  })

  it('renders with disabled styles when disabled', () => {
    const { getByTestId } = render(<StartTransferButton onPress={() => null} disabled={true} />)

    const button = getByTestId('StartTransferButton')
    expect(button.props.style.backgroundColor).toBe('#BDBDBD')
  })
})
