import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { CountryPicker } from '@atoms/picker' // Adjust the import path as necessary

// Mock the utilities and static data
jest.mock('@utils/countries', () => ({
  getAllCountries: () => [
    { countryCode: 'US', currency: 'USD' },
    { countryCode: 'GB', currency: 'GBP' }
  ]
}))

describe('CountryPicker', () => {
  it('renders a list of countries', () => {
    const setSelectedCountryMock = jest.fn()
    const { getByTestId } = render(
      <CountryPicker selectedCountry="US" setSelectedCountry={setSelectedCountryMock} />
    )

    expect(getByTestId('US-country')).toBeTruthy()
    expect(getByTestId('GB-country')).toBeTruthy()
  })

  it('calls setSelectedCountry with the country code when a country is pressed', () => {
    const setSelectedCountryMock = jest.fn()
    const { getByTestId } = render(
      <CountryPicker selectedCountry="US" setSelectedCountry={setSelectedCountryMock} />
    )

    const countryItem = getByTestId('US-country')
    fireEvent.press(countryItem)
    expect(setSelectedCountryMock).toHaveBeenCalledWith('US')
  })
})
