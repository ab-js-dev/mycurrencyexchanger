import { calculateFinalAmount } from '@utils/exchange-calculations'
import { useState, useEffect } from 'react'
import useGetCurrencyExchange from './use-get-currency-exchange'
import { type CountryData } from '@static/countries'
import { getCountryByCountryCodeFromList } from '@utils/countries'

interface CurrencyCalculator {
  finalAmount: number
  isButtonEnabled: boolean
  currency: string
  country: string
  numbersAfterDot: number
  rate: number
  loadingDataError: string
  setAmount: (newAmount: number) => void
  setCountry: (newCurrency: any) => void
}

const useCurrencyCalculator = (): CurrencyCalculator => {
  const [amount, setAmount] = useState(0)
  const [finalAmount, setFinalAmount] = useState(0)
  const [isButtonEnabled, setIsButtonEnabled] = useState(false)
  const [currency, setCurrency] = useState('AED')
  const [country, setCountry] = useState('AE')
  const [numbersAfterDot, setNumbersAfterDot] = useState(2)
  const [rate, setRate] = useState(1)
  const [currencyList, setCurrencyList] = useState<CountryData[]>([])
  const [loadingDataError, setLoadingDataError] = useState<string>('')
  const { data: currencyFromBE, error: backendError } = useGetCurrencyExchange()

  const handleDataChange = (): void => {
    const targtedCountry = getCountryByCountryCodeFromList(country, currencyList)
    if (targtedCountry === undefined) return
    setFinalAmount(prevFinalAmount => {
      const finalAmount = calculateFinalAmount(amount, targtedCountry.rate)
      return finalAmount
    })
    setNumbersAfterDot(targtedCountry.numbersAfterDotsForCurrency)
    setRate(targtedCountry.rate)
    setCurrency(targtedCountry.currency)
  }
  useEffect(() => {
    if (amount === 0 || amount < 100) return
    handleDataChange()
  }, [amount])

  useEffect(() => {
    if (country === 'AE') return
    handleDataChange()
  }, [country])

  useEffect(() => {
    setIsButtonEnabled(amount > 0 && finalAmount > 0)
  }, [amount, finalAmount])

  useEffect(() => {
    setCurrencyList(currencyFromBE)
  }, [currencyFromBE])

  useEffect(() => {
    setLoadingDataError(backendError)
  }, [backendError])

  return {
    finalAmount,
    isButtonEnabled,
    currency,
    rate,
    country,
    numbersAfterDot,
    loadingDataError,
    setAmount,
    setCountry
  }
}

export default useCurrencyCalculator
