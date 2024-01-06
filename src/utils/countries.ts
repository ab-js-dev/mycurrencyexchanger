import { type CountryData, countriesData, type Country } from '@static/countries'

/**
 * Retrieves all countries.
 * @returns An array of CountryData objects representing all countries.
 */
export const getAllCountries = (): Country[] => countriesData

/**
 * Retrieves the country data based on the country code.
 * @param countryCode The country code to search for.
 * @returns The country data if found, otherwise undefined.
 */
export const getCountryByCountryCode = (countryCode: string): Country | undefined => {
  const country = countriesData.find(country => country.countryCode === countryCode)
  return country
}

/**
 * Retrieves the country data based on the country code.
 * @param countryCode The country code to search for.
 * @returns The country data if found, otherwise undefined.
 */
export const getCountryByCountryCodeFromList = (
  countryCode: string,
  list: CountryData[]
): CountryData | undefined => {
  const country = list.find(country => country.countryCode === countryCode)
  return country
}
