import React, { type ReactElement } from 'react'
import { getAllCountries } from '@utils/countries'
import { Picker } from '@react-native-picker/picker'

export const CountryPicker = (props: {
  selectedCountry: string
  setSelectedCountry: (countryCode: string) => void
}): ReactElement => {
  const { selectedCountry, setSelectedCountry } = props
  const countries = getAllCountries()

  return (
    <Picker
      testID="countryPicker"
      selectedValue={selectedCountry}
      onValueChange={itemValue => {
        setSelectedCountry(itemValue)
      }}>
      {countries.map(country => (
        <Picker.Item
          testID="picker-item"
          key={country.countryCode}
          label={country.currency}
          value={country.countryCode}
        />
      ))}
    </Picker>
  )
}
