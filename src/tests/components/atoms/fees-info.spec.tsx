import React from 'react'
import { render } from '@testing-library/react-native'
import FeesInformation from '@atoms/fees-info'
import { FEE_TIERS } from '@static/fees'

describe('FeesInformation Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<FeesInformation />)
    expect(getByText('Fee Structure')).toBeTruthy()
  })

  it('renders the correct number of items', () => {
    const { getAllByText } = render(<FeesInformation />)
    const feeTexts = getAllByText(/%/)
    expect(feeTexts.length).toBe(FEE_TIERS.length)
  })

  it('displays the correct fee information for each tier', () => {
    const { getByText } = render(<FeesInformation />)
    FEE_TIERS.forEach(tier => {
      expect(getByText(`AED ${tier.limit} and above`)).toBeTruthy()
      expect(getByText(`${(tier.fee * 100).toFixed(2)}%`)).toBeTruthy()
    })
  })
})
