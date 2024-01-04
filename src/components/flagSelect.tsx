import React, { type ReactElement, useState } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import CountryFlag from 'react-native-country-flag' // Import the CountryFlag component
import { countriesData } from '../consts/countries'
import { getAllCountries, getCountryByCountryCode } from '../utils/countries'

// local component for displaying the flag
const Flag = (props: { countryCode: string }): ReactElement<{ countryCode: string }> => (
  <CountryFlag isoCode={props.countryCode} size={25} />
)

// local compoment for displaying the country picker in a modal
const CountryPicker = (props: {
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
          key={country.countryCode}
          label={country.currency}
          value={country.countryCode}
        />
      ))}
    </Picker>
  )
}

export interface FlagSelectProps {
  text: string
  onSelect: (countryCode: string) => void
}

// The main component
const FlagSelect = (props: FlagSelectProps): ReactElement => {
  const { text, onSelect } = props
  const [selectedCountry, setSelectedCountry] = useState(countriesData[0].countryCode)
  const [modalVisible, setModalVisible] = useState(false)
  // function to be called when a country is selected
  const onSelectCountry = (countryCode: string): void => {
    setSelectedCountry(countryCode)
    setModalVisible(false)
    onSelect(countryCode)
  }

  return (
    <View style={styles.container} testID="FlagSelect">
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true)
        }}
        style={styles.button}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.flagContainer}>
          <Flag countryCode={selectedCountry} />
          <Text style={styles.currencyText}>
            {getCountryByCountryCode(selectedCountry)?.currency}
          </Text>
        </View>
      </TouchableOpacity>

      <Modal
        testID="countryPickerModal"
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false)
        }}>
        <View style={styles.modalView}>
          <CountryPicker selectedCountry={selectedCountry} setSelectedCountry={onSelectCountry} />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#6200EE', // Based on the provided picture
    borderRadius: 4,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 10,
    gap: 10
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10
  },
  currencyText: {
    color: 'white',
    fontWeight: 'bold'
  },
  text: {
    color: 'white'
  },
  modalView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    height: '50%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
})

export default FlagSelect
