export interface CountryData {
    countryCode: string;
    currency: string;
    numbersAfterDotsForCurrency: number;
}

export const countriesData: CountryData[] = [
    { countryCode: 'US', currency: 'USD', numbersAfterDotsForCurrency: 2 },
    { countryCode: 'CA', currency: 'CAD', numbersAfterDotsForCurrency: 2 },
    { countryCode: 'GB', currency: 'GBP', numbersAfterDotsForCurrency: 2 },
    { countryCode: 'EU', currency: 'EUR', numbersAfterDotsForCurrency: 2 },
    { countryCode: 'JP', currency: 'JPY', numbersAfterDotsForCurrency: 0 },
    { countryCode: 'CN', currency: 'CNY', numbersAfterDotsForCurrency: 2 },
    { countryCode: 'HK', currency: 'HKD', numbersAfterDotsForCurrency: 2 },
    { countryCode: 'SG', currency: 'SGD', numbersAfterDotsForCurrency: 2 },
    { countryCode: 'AU', currency: 'AUD', numbersAfterDotsForCurrency: 2 },
    { countryCode: 'NZ', currency: 'NZD', numbersAfterDotsForCurrency: 2 },
    { countryCode: 'SE', currency: 'SEK', numbersAfterDotsForCurrency: 2 },
    { countryCode: 'DK', currency: 'DKK', numbersAfterDotsForCurrency: 2 },
    { countryCode: 'NO', currency: 'NOK', numbersAfterDotsForCurrency: 2 },
    { countryCode: 'CH', currency: 'CHF', numbersAfterDotsForCurrency: 2 },
    { countryCode: 'MX', currency: 'MXN', numbersAfterDotsForCurrency: 2 },
    { countryCode: 'IN', currency: 'INR', numbersAfterDotsForCurrency: 2 },
    { countryCode: 'BR', currency: 'BRL', numbersAfterDotsForCurrency: 2 },
    { countryCode: 'AR', currency: 'ARS', numbersAfterDotsForCurrency: 2 },
    { countryCode: 'CL', currency: 'CLP', numbersAfterDotsForCurrency: 0 },
    { countryCode: 'CZ', currency: 'CZK', numbersAfterDotsForCurrency: 2 },
    { countryCode: 'ID', currency: 'IDR', numbersAfterDotsForCurrency: 2 },
    { countryCode: 'IL', currency: 'ILS', numbersAfterDotsForCurrency: 2 },
    { countryCode: 'MY', currency: 'MYR', numbersAfterDotsForCurrency: 2 },
    { countryCode: 'PH', currency: 'PHP', numbersAfterDotsForCurrency: 2 },
    { countryCode: 'PL', currency: 'PLN', numbersAfterDotsForCurrency: 2 },
    { countryCode: 'RU', currency: 'RUB', numbersAfterDotsForCurrency: 2 },
];
