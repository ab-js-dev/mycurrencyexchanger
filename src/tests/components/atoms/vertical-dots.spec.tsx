import React from 'react'
import { render } from '@testing-library/react-native'
import VerticalDots from '../../../components/atoms/verical-dots'

jest.mock('@expo/vector-icons', () => {
  return {
    Entypo: 'Entypo'
  }
})

describe('VerticalDots Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<VerticalDots dotsRepeat={3} />)
    expect(getByTestId('touchable-opacity')).toBeTruthy()
  })

  it('renders the correct number of dot icons based on dotsRepeat prop', () => {
    const dotsRepeat = 3
    const { getAllByTestId } = render(<VerticalDots dotsRepeat={dotsRepeat} />)
    const dots = getAllByTestId('dot-icon')
    expect(dots.length).toBe(dotsRepeat)
  })
})
