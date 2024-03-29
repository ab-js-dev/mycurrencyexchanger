import React, { type ReactElement, useState } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import { countriesData } from '@static/countries'
import { getCountryByCountryCode } from '@utils/countries'
import { Flag } from '@atoms/flag'
import { CountryPicker } from '@atoms/picker'

export interface FlagSelectProps {
  text: string
  disabled?: boolean
  initialCountryCode?: string
  onSelect: (countryCode: string) => void
}

// The main component
const FlagSelect = (props: FlagSelectProps): ReactElement => {
  const { text, disabled, initialCountryCode, onSelect } = props
  const [selectedCountry, setSelectedCountry] = useState(
    initialCountryCode ?? countriesData[0].countryCode
  )
  const [modalVisible, setModalVisible] = useState(false)

  const onSelectCountry = (countryCode: string): void => {
    setSelectedCountry(countryCode)
    setModalVisible(false)
    onSelect(countryCode)
  }

  return (
    <View style={styles.container} testID="FlagSelect">
      <TouchableOpacity
        disabled={disabled ?? false}
        onPress={() => {
          !(disabled ?? false) && setModalVisible(true)
        }}
        style={styles.button}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.flagContainer} testID="flag">
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
    paddingRight: 10
  },
  button: {
    backgroundColor: '#6200EE',
    borderRadius: 5,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 10,
    gap: 10,
    width: 140,
    height: 70
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
    elevation: 5,
    backgroundColor: '#f8f8f8',
    padding: 35
  }
})

export default FlagSelect
