import React from 'react'
import { View, StyleSheet } from 'react-native'
import FlagSelect from '@molecules/flag-select' // Adjust import path as needed
import InputField from '@atoms/input-field' // Adjust import path as needed

interface ExchangeFieldProps {
  buttonText: string
  isCountryFieldDisabled?: boolean
  initialCountryCode?: string
  isEditable?: boolean
  value?: string
  onCountryChange: (currencyCode: string) => void
  onAmountChange: (amount: number) => void
}

const ExchangeField: React.FC<ExchangeFieldProps> = ({
  buttonText,
  isEditable,
  isCountryFieldDisabled = false,
  initialCountryCode,
  value,
  onCountryChange,
  onAmountChange
}) => {
  return (
    <View style={styles.exchangeFieldContainer}>
      <FlagSelect
        initialCountryCode={initialCountryCode}
        disabled={isCountryFieldDisabled}
        text={buttonText}
        onSelect={(countryCode: string) => {
          onCountryChange(countryCode)
        }}
      />

      <InputField
        isEditable={isEditable}
        calculatedValue={value}
        onAmountChange={(newAmount: string) => {
          onAmountChange(Number(newAmount))
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
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 5,
    backgroundColor: 'white'
  }
})

export default ExchangeField
