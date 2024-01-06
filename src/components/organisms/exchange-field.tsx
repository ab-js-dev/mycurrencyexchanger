import React from 'react'
import { View, StyleSheet } from 'react-native'
import FlagSelect from '@molecules/flag-select' // Adjust import path as needed
import InputField from '@atoms/input-field' // Adjust import path as needed

interface ExchangeFieldProps {
  buttonText: string
  isCountryFieldDisabled?: boolean
  initialCountryCode?: string
  isEditable?: boolean
  onCurrencyChange: (currencyCode: string) => void
  onAmountChange: (amount: string) => void
}

const ExchangeField: React.FC<ExchangeFieldProps> = ({
  buttonText,
  isEditable,
  isCountryFieldDisabled = false,
  initialCountryCode,
  onCurrencyChange,
  onAmountChange
}) => {
  return (
    <View style={styles.exchangeFieldContainer}>
      <FlagSelect
        initialCountryCode={initialCountryCode}
        disabled={isCountryFieldDisabled}
        text={buttonText}
        onSelect={(countryCode: string) => {
          onCurrencyChange(countryCode)
        }}
      />
      <InputField
        isEditable={isEditable}
        onAmountChange={(newAmount: string) => {
          onAmountChange(newAmount)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  exchangeFieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 5,
    backgroundColor: 'white'
  }
  // ... other styles if needed
})

export default ExchangeField
