import React, { type ReactElement } from 'react'
import { getAllCountries } from '@utils/countries'
import { ScrollView, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native'
import { type Country } from '@static/countries'

const RenderItem = ({
  country,
  setSelectedCountry
}: {
  country: Country
  setSelectedCountry: (countryCode: string) => void
}): ReactElement => (
  <ScrollView style={{ flex: 1 }}>
    <TouchableOpacity
      testID={`${country.countryCode}-country`}
      style={styles.itemContainer}
      key={country.countryCode}
      onPress={() => {
        setSelectedCountry(country.countryCode)
      }}>
      <Text style={styles.label}>{country.currency}</Text>
    </TouchableOpacity>
  </ScrollView>
)

export const CountryPicker = (props: {
  selectedCountry: string
  setSelectedCountry: (countryCode: string) => void
}): ReactElement => {
  const { setSelectedCountry } = props
  const countries = getAllCountries()

  return (
    <FlatList
      testID="countryPicker"
      data={countries}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <RenderItem country={item} setSelectedCountry={setSelectedCountry} />
      )}
    />
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200EE',
    textAlign: 'center'
  }
})
