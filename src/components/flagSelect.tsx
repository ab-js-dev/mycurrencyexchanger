import React, { type ReactElement, useState } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import CountryFlag from 'react-native-country-flag' // Import the CountryFlag component
import { countriesData } from '../consts/countries'
import { getAllCountries, getCountryByCountryCode } from '../utils/countries'

const Flag = (props: { countryCode: string }): ReactElement<{ countryCode: string }> => <CountryFlag isoCode={props.countryCode} size={25} />

export interface FlagSelectProps {
  text: string
}
const FlagSelect = (props: FlagSelectProps): ReactElement => {
  const [selectedCountry, setSelectedCountry] = useState(countriesData[0].countryCode)
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View>
      <TouchableOpacity onPress={() => { setModalVisible(true) }} style={styles.container}>
        <Text style={styles.text}>{props.text}</Text>
        <View style={styles.flagContainer}>
          <Flag countryCode={selectedCountry} />
          <Text style={styles.currencyText}>
            {getCountryByCountryCode(selectedCountry)?.currency}
          </Text>
        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => { setModalVisible(false) }}>
        <View style={styles.modalView}>
          <Picker
            selectedValue={selectedCountry}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedCountry(itemValue)
              setModalVisible(false)
            }}>
            {getAllCountries().map((country, index) => (
              // The Picker.Item label can remain as is since it is just a string
              <Picker.Item
                key={index}
                label={country.currency}
                value={country.countryCode}></Picker.Item>
            ))}
          </Picker>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6200EE', // Based on the provided picture
    borderRadius: 4,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 10
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  currencyText: {
    // Your text style
    color: 'white',
    fontWeight: 'bold'
  },
  text: {
    // Your text style
    color: 'white',
    padding: 10
  },
  modalView: {
    // Your modal view style
  }
})

export default FlagSelect
