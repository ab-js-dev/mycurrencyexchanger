import { type CountryData } from '@static/countries'
import { useState, useEffect } from 'react'

const useGetCurrencyExchange = (): CountryData[] => {
  const [data, setData] = useState<CountryData[]>([])

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch('https://anis-currency.free.beeceptor.com/exchange')
        const json = (await response.json()) as CountryData[]
        setData(json)
      } catch (error) {
        console.error('Error fetching data: ', error)
        setData([])
      }
    }

    void fetchData()
  }, [])

  return data
}

export default useGetCurrencyExchange
