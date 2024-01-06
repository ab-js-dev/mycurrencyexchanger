import React from 'react'
import { View, StyleSheet } from 'react-native'
import CalculatorScreen from './src/screens/calculator'

const CurrencyTransfer: React.FC = () => {
  return (
    <View style={styles.container}>
      <CalculatorScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 20
  }
})

export default CurrencyTransfer
