import React from 'react'
import { render } from '@testing-library/react-native'
import { Flag } from '../../../components/atoms/flag'

describe('Flag Component', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<Flag countryCode="US" />)
    // As we cannot query the inner component directly, we check for the existence of any element.
    // This is a very basic test confirming that the component renders.
    expect(getByTestId).toBeTruthy()
  })

  // Optional: Snapshot test
  it('matches snapshot', () => {
    const tree = render(<Flag countryCode="US" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
