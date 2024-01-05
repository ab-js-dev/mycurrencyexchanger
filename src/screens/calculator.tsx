import React from 'react'
import { View } from 'react-native'
import ExchangeField from '../components/organism/exchange-field'
import FeesData from '../components/organism/fees-data'

const CalculatorScreen: React.FC = () => {
  return (
    <View>
      <ExchangeField
        buttonText="You will send"
        onAmountChange={() => null}
        onCurrencyChange={() => null}
      />
      <FeesData />
      <ExchangeField
        buttonText="Receptient gets"
        isEditable={false}
        onAmountChange={() => null}
        onCurrencyChange={() => null}
      />
    </View>
  )
}
export default CalculatorScreen
