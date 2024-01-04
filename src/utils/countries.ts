import { type CountryData, countriesData } from '../consts/countries'
export const getAllCountries = (): CountryData[] => countriesData

export const getCountryByCountryCode = (countryCode: string): CountryData | undefined => {
  const country = countriesData.find(country => country.countryCode === countryCode)
  return country
}
