import React, { type ReactElement } from 'react'
import CountryFlag from 'react-native-country-flag'

export const Flag = (props: { countryCode: string }): ReactElement<{ countryCode: string }> => (
  <CountryFlag isoCode={props.countryCode} size={25} />
)
