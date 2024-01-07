import React from 'react'
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import ExchangeField from '@organisms/exchange-field'
import FeesData from '@organisms/fees-data'
import useCurrencyCalculator from '@hooks/use-currency-calculator'
import StartTransfer from '@molecules/start-transfer'
import ErrorModal from '@atoms/error-modal'
import { useHandleLoadingError } from '@hooks/use-handle-loading-error'

const CalculatorScreen: React.FC = () => {
  const {
    currency,
    numbersAfterDot,
    finalAmount,
    rate,
    isButtonEnabled,
    loadingDataError,
    setAmount,
    setCountry
  } = useCurrencyCalculator()
  const convertedAmount = finalAmount.toFixed(numbersAfterDot).toString()

  const onTransferPress = (): void => {}
  const { showError, setShowError } = useHandleLoadingError(loadingDataError)
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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

        <StartTransfer onPress={onTransferPress} disabled={!isButtonEnabled} />

        <ErrorModal
          showError={showError}
          errorMessage={loadingDataError}
          onClose={() => {
            setShowError(false)
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}
export default CalculatorScreen
