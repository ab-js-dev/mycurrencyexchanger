import { countriesData } from '@static/countries'
import { getAllCountries, getCountryByCountryCode } from '@utils/countries'

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
})
