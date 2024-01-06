import React from 'react'
import { View } from 'react-native'
import ExchangeField from '@organisms/exchange-field'
import FeesData from '@organisms/fees-data'
import useCurrencyCalculator from '@hooks/use-currency-calculator'

const CalculatorScreen: React.FC = () => {
  const { currency, numbersAfterDot, finalAmount, rate, setAmount, setCountry } =
    useCurrencyCalculator()
  const convertedAmount = finalAmount.toFixed(numbersAfterDot).toString()

  return (
    <View>
      <ExchangeField
        isCountryFieldDisabled={true}
        initialCountryCode="AE"
        buttonText="You will send"
        onAmountChange={setAmount}
        onCountryChange={() => null}
      />
      <FeesData exchangeCurrency={currency} exchangeRate={rate?.toString()} />
      <ExchangeField
        isCountryFieldDisabled={false}
        buttonText="Receptient gets"
        isEditable={false}
        value={convertedAmount}
        onAmountChange={() => null}
        onCountryChange={setCountry}
      />
    </View>
  )
}
export default CalculatorScreen
