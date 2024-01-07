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
  <TouchableOpacity
    testID={`${country.countryCode}-country`}
    style={styles.itemContainer}
    key={country.countryCode}
    onPress={() => {
      setSelectedCountry(country.countryCode)
    }}>
    <Text style={styles.label}>{country.currency}</Text>
  </TouchableOpacity>
)

export const CountryPicker = (props: {
  selectedCountry: string
  setSelectedCountry: (countryCode: string) => void
}): ReactElement => {
  const { setSelectedCountry } = props
  const countries = getAllCountries()

  return (
    <ScrollView style={{ flex: 1 }} testID="countryPicker">
      <FlatList
        data={countries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <RenderItem country={item} setSelectedCountry={setSelectedCountry} />
        )}
      />
    </ScrollView>
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
