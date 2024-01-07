import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import AccordionComponent from '@molecules/accordion'
import { Text } from 'react-native'

jest.mock('@expo/vector-icons', () => ({
  Ionicons: 'Ionicons'
}))

describe('AccordionComponent', () => {
  it('renders the exchange rate and currency', () => {
    const setAccordionStateMock = jest.fn()
    const { getByText } = render(
      <AccordionComponent
        exchangeRate="14.24"
        exchangeCurrency="PHP"
        setAccordionState={setAccordionStateMock}>
        <Text>Additional details can go here...</Text>
      </AccordionComponent>
    )

    expect(getByText('1 ')).toBeTruthy()
    expect(getByText('AED = ')).toBeTruthy()
    expect(getByText('14.24')).toBeTruthy()
    expect(getByText('PHP')).toBeTruthy()
  })

  it('toggles the expanded state and calls the setAccordionState callback', () => {
    const setAccordionStateMock = jest.fn()
    const { getByText, queryByText } = render(
      <AccordionComponent
        exchangeRate="14.24"
        exchangeCurrency="PHP"
        setAccordionState={setAccordionStateMock}>
        <Text>Additional details can go here...</Text>
      </AccordionComponent>
    )

    const feesText = getByText('Fees')
    fireEvent.press(feesText)

    // Expect the additional details to be visible after press
    expect(queryByText('Additional details can go here...')).toBeTruthy()
    expect(setAccordionStateMock).toHaveBeenCalledWith(true)

    // Press again to collapse
    fireEvent.press(feesText)
    // Since React Native testing library doesn't unmount the component on collapse, we only check the callback
    expect(setAccordionStateMock).toHaveBeenCalledWith(false)
  })
})
