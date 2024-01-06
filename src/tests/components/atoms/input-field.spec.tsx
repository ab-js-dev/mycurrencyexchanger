import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import InputField from '../../../components/atoms/input-field'

describe('InputField Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<InputField onAmountChange={() => {}} />)
    expect(getByTestId('inputField')).toBeTruthy()
  })

  it('is editable when isEditable is true', () => {
    const { getByTestId } = render(<InputField isEditable={true} onAmountChange={() => {}} />)
    expect(getByTestId('inputField').props.editable).toBe(true)
  })

  it('is not editable when isEditable is false', () => {
    const { getByTestId } = render(<InputField isEditable={false} onAmountChange={() => {}} />)
    expect(getByTestId('inputField').props.editable).toBe(false)
  })

  it('calls onAmountChange when text changes', () => {
    const mockOnAmountChange = jest.fn()
    const { getByTestId } = render(<InputField onAmountChange={mockOnAmountChange} />)
    fireEvent.changeText(getByTestId('inputField'), '123')
    expect(mockOnAmountChange).toHaveBeenCalledWith('123')
  })

  it('has correct placeholder', () => {
    const { getByPlaceholderText } = render(<InputField onAmountChange={() => {}} />)
    expect(getByPlaceholderText('0.00')).toBeTruthy()
  })

  it('uses the correct keyboard type', () => {
    const { getByTestId } = render(<InputField onAmountChange={() => {}} />)
    expect(getByTestId('inputField').props.keyboardType).toBe('decimal-pad')
  })

  // Optional: Test for style
  it('has the correct style applied', () => {
    const { getByTestId } = render(<InputField onAmountChange={() => {}} />)
    expect(getByTestId('inputField').props.style).toMatchObject({
      flex: 1,
      height: 100,
      paddingHorizontal: 10,
      fontSize: 18,
      fontWeight: 'bold',
      color: '#0D1F2D',
      textAlign: 'right'
    })
  })
})
