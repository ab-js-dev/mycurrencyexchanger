import { countriesData } from "../consts/countries";
export const getAllCountries = () => countriesData;

export const getCountryByCountryCode = (countryCode: string) => {
    const country = countriesData.find(country => country.countryCode === countryCode);
    return country;
}