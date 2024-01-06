import React from 'react'
import { View } from 'react-native'
import ExchangeField from '@organisms/exchange-field'
import FeesData from '@organisms/fees-data'

const CalculatorScreen: React.FC = () => {
  return (
    <View>
      <ExchangeField
        isCountryFieldDisabled={true}
        buttonText="You will send"
        onAmountChange={() => null}
        onCurrencyChange={() => null}
      />
      <FeesData />
      <ExchangeField
        isCountryFieldDisabled={false}
        buttonText="Receptient gets"
        isEditable={false}
        onAmountChange={() => null}
        onCurrencyChange={() => null}
      />
    </View>
  )
}
export default CalculatorScreen
