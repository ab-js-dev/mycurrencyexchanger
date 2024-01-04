import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import CalculatorScreen from './src/screens/calculator'

interface CurrencyInputProps {
  currencyCode: string
  value: string
  onChangeValue: (value: string) => void
  editable?: boolean
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  currencyCode,
  value,
  onChangeValue,
  editable = true
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeValue}
        keyboardType="numeric"
        editable={editable}
      />
    </View>
  )
}

const CurrencyTransfer: React.FC = () => {
  const [aedAmount, setAedAmount] = useState('2500.00')
  const [phpAmount, setPhpAmount] = useState('3560.35')

  return (
    <View style={styles.container}>
      {/* <CurrencyInput
        currencyCode="AED"
        value={aedAmount}
        onChangeValue={setAedAmount}
      />

      <CurrencyInput
        currencyCode="PHP"
        value={phpAmount}
        onChangeValue={setPhpAmount}
        editable={false}
      />

      <Text style={styles.processingTime}>Processing time - 1 Hour</Text>
      <Text>*Normal working hours & public holidays apply</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Transfer started')}>
        <Text style={styles.buttonText}>Start transfer</Text>
      </TouchableOpacity> */}
      <CalculatorScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20
  },
  flagIcon: {
    width: 30,
    height: 20,
    margin: 10
  },
  input: {
    flex: 1,
    padding: 10
  },
  processingTime: {
    fontWeight: 'bold',
    marginBottom: 5
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default CurrencyTransfer
