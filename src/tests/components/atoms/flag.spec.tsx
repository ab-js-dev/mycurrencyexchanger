import React from 'react'
import { render } from '@testing-library/react-native'
import { Flag } from '@atoms/flag'

describe('Flag Component', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<Flag countryCode="US" />)
    expect(getByTestId).toBeTruthy()
  })
  it('matches snapshot', () => {
    const tree = render(<Flag countryCode="US" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
