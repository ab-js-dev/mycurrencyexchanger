import { type CountryData, countriesData } from '@static/countries'
import {
  getAllCountries,
  getCountryByCountryCode,
  getCountryByCountryCodeFromList
} from '@utils/countries'

describe('Country Data Functions', () => {
  describe('getAllCountries', () => {
    it('returns all countries', () => {
      const allCountries = getAllCountries()
      expect(allCountries).toEqual(countriesData)
      expect(allCountries.length).toBe(countriesData.length)
    })
  })

  describe('getCountryByCountryCode', () => {
    it('returns the correct country data for a valid country code', () => {
      const testCode = 'US'
      const country = getCountryByCountryCode(testCode)
      expect(country).toEqual(countriesData.find(c => c.countryCode === testCode))
    })

    it('returns undefined for an invalid country code', () => {
      const invalidCode = 'XX'
      const country = getCountryByCountryCode(invalidCode)
      expect(country).toBeUndefined()
    })

    it('returns undefined for a country code similar to valid ones but with different case', () => {
      const similarCode = 'us'
      const country = getCountryByCountryCode(similarCode)
      expect(country).toBeUndefined()
    })

    it('returns undefined when the country code is an empty string', () => {
      const country = getCountryByCountryCode('')
      expect(country).toBeUndefined()
    })
  })
  describe('getCountryByCountryCodeFromList', () => {
    it('returns the correct country data for a valid country code from a given list', () => {
      const testCode = 'US'
      const list: CountryData[] = [
        { countryCode: 'CA', currency: 'CAD', numbersAfterDotsForCurrency: 2, rate: 1 },
        { countryCode: 'US', currency: 'USD', numbersAfterDotsForCurrency: 2, rate: 1 },
        { countryCode: 'MX', currency: 'MXN', numbersAfterDotsForCurrency: 2, rate: 1 }
      ]
      const country = getCountryByCountryCodeFromList(testCode, list)
      expect(country).toEqual(list.find(c => c.countryCode === testCode))
    })

    it('returns undefined for an invalid country code from a given list', () => {
      const invalidCode = 'XX'
      const list: CountryData[] = [
        { countryCode: 'CA', currency: 'CAD', numbersAfterDotsForCurrency: 2, rate: 1 },
        { countryCode: 'US', currency: 'USD', numbersAfterDotsForCurrency: 2, rate: 1 }
      ]
      const country = getCountryByCountryCodeFromList(invalidCode, list)
      expect(country).toBeUndefined()
    })

    it('returns undefined when the list is empty', () => {
      const testCode = 'US'
      const list: CountryData[] = []
      const country = getCountryByCountryCodeFromList(testCode, list)
      expect(country).toBeUndefined()
    })
  })
})
