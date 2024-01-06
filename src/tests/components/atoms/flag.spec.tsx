/**
 * Test suite for the Flag component.
 */
import React from 'react'
import { render } from '@testing-library/react-native'
import { Flag } from '@atoms/flag'

describe('Flag Component', () => {
  /**
   * Test case to check if the Flag component renders without crashing.
   */
  it('renders without crashing', () => {
    const { getByTestId } = render(<Flag countryCode="US" />)
    expect(getByTestId).toBeTruthy()
  })

  /**
   * Test case to check if the rendered Flag component matches the snapshot.
   */
  it('matches snapshot', () => {
    const tree = render(<Flag countryCode="US" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
