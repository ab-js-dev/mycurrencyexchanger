import React from 'react'
import { render } from '@testing-library/react-native'
import ProcessingTimeInfo from '@atoms/processing-time-info'

jest.mock('@expo/vector-icons', () => ({
  FontAwesome5: 'FontAwesome5'
}))

describe('ProcessingTimeInfo', () => {
  it('renders correctly', () => {
    const { getByText, getByTestId } = render(<ProcessingTimeInfo />)

    // Check if the icon is rendered
    const icon = getByTestId('process-time-icon') // You might need to adjust based on how you set testIDs
    expect(icon.props.name).toBe('bolt')
    expect(icon.props.size).toBe(20)
    expect(icon.props.color).toBe('black')

    // Check if the main text is rendered
    expect(getByText('Processing time - 1 Hour')).toBeTruthy()

    // Check if the disclaimer text is rendered
    expect(getByText('*Normal working hours & public holidays apply')).toBeTruthy()
  })
})
