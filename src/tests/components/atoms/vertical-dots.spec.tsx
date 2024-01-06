/**
 * @fileoverview This file contains the unit tests for the VerticalDots component.
 */

import React from 'react'
import { render } from '@testing-library/react-native'
import VerticalDots from '@atoms/verical-dots'

jest.mock('@expo/vector-icons', () => {
  return {
    Entypo: 'Entypo'
  }
})

/**
 * Test suite for the VerticalDots component.
 */
describe('VerticalDots Component', () => {
  /**
   * Test case to verify if the component renders correctly.
   */
  it('renders correctly', () => {
    const { getByTestId } = render(<VerticalDots dotsRepeat={3} />)
    expect(getByTestId('touchable-opacity')).toBeTruthy()
  })

  /**
   * Test case to verify if the correct number of dot icons are rendered based on the dotsRepeat prop.
   */
  it('renders the correct number of dot icons based on dotsRepeat prop', () => {
    const dotsRepeat = 3
    const { getAllByTestId } = render(<VerticalDots dotsRepeat={dotsRepeat} />)
    const dots = getAllByTestId('dot-icon')
    expect(dots.length).toBe(dotsRepeat)
  })
})
