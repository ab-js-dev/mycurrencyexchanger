import { type CountryData } from '@static/countries'
import { useState, useEffect } from 'react'
interface GetCurrencyExchange {
  data: CountryData[]
  error: string
}
const useGetCurrencyExchange = (): GetCurrencyExchange => {
  const [data, setData] = useState<CountryData[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch('https://anis-currency.free.beeceptor.com/exchange')
        const json = (await response.json()) as CountryData[]
        setData(json)
      } catch (errorBe) {
        setError(`Error fetching data: ${JSON.stringify(errorBe)}`)
        setData([])
      }
    }

    void fetchData()
  }, [])

  return { data, error }
}

export default useGetCurrencyExchange
