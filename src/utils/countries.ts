import { type CountryData, countriesData } from '@static/countries'

/**
 * Retrieves all countries.
 * @returns An array of CountryData objects representing all countries.
 */
export const getAllCountries = (): CountryData[] => countriesData

/**
 * Retrieves the country data based on the country code.
 * @param countryCode The country code to search for.
 * @returns The country data if found, otherwise undefined.
 */
export const getCountryByCountryCode = (countryCode: string): CountryData | undefined => {
  const country = countriesData.find(country => country.countryCode === countryCode)
  return country
}
