export interface Country {
  countryCode: string
  currency: string
}

export interface CountryData extends Country {
  rate: number
  numbersAfterDotsForCurrency: number
}

export const countriesData: Country[] = [
  { countryCode: 'AE', currency: 'AED' },
  { countryCode: 'US', currency: 'USD' },
  { countryCode: 'EU', currency: 'EUR' },
  { countryCode: 'GB', currency: 'GBP' },
  { countryCode: 'JP', currency: 'JPY' },
  { countryCode: 'IN', currency: 'INR' }
]
