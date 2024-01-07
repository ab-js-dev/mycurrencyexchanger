import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import InputField from '@atoms/input-field'

describe('InputField Component', () => {
  it('renders correctly', () => {
    /**
     * Renders the InputField component and checks if it is rendered correctly.
     *
     * @test
     */
    const { getByTestId } = render(<InputField onAmountChange={() => {}} />)
    expect(getByTestId('inputField')).toBeTruthy()
  })

  it('is editable when isEditable is true', () => {
    /**
     * Renders the InputField component with isEditable set to true and checks if it is editable.
     *
     * @test
     */
    const { getByTestId } = render(<InputField isEditable={true} onAmountChange={() => {}} />)
    expect(getByTestId('inputField').props.editable).toBe(true)
  })

  it('is not editable when isEditable is false', () => {
    /**
     * Renders the InputField component with isEditable set to false and checks if it is not editable.
     *
     * @test
     */
    const { getByTestId } = render(<InputField isEditable={false} onAmountChange={() => {}} />)
    expect(getByTestId('inputField').props.editable).toBe(false)
  })

  it('calls onAmountChange when text changes', () => {
    /**
     * Renders the InputField component and simulates a text change event.
     * Checks if the onAmountChange callback is called with the correct text.
     *
     * @test
     */
    const mockOnAmountChange = jest.fn()
    const { getByTestId } = render(<InputField onAmountChange={mockOnAmountChange} />)
    fireEvent.changeText(getByTestId('inputField'), '123')
    expect(mockOnAmountChange).toHaveBeenCalledWith('123')
  })

  it('has correct placeholder', () => {
    /**
     * Renders the InputField component and checks if it has the correct placeholder.
     *
     * @test
     */
    const { getByPlaceholderText } = render(<InputField onAmountChange={() => {}} />)
    expect(getByPlaceholderText('0.00')).toBeTruthy()
  })

  it('uses the correct keyboard type', () => {
    /**
     * Renders the InputField component and checks if it uses the correct keyboard type.
     *
     * @test
     */
    const { getByTestId } = render(<InputField onAmountChange={() => {}} />)
    expect(getByTestId('inputField').props.keyboardType).toBe('decimal-pad')
  })

  it('has the correct style applied', () => {
    /**
     * Renders the InputField component and checks if it has the correct style applied.
     *
     * @test
     */
    const { getByTestId } = render(<InputField onAmountChange={() => {}} />)
    expect(getByTestId('inputField').props.style).toMatchObject({
      flex: 1,
      height: 70,
      paddingHorizontal: 10,
      fontSize: 18,
      fontWeight: 'bold',
      color: '#0D1F2D',
      textAlign: 'right'
    })
  })
})
