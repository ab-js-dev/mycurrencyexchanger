import { FEE_TIERS } from '@static/fees'
import {
  calculateExchange,
  calculateFees,
  calculateFinalAmount
} from '@utils/exchange-calculations'

describe('Financial Calculations', () => {
  describe('calculateExchange', () => {
    it('returns zero if the amount is less than 100', () => {
      expect(calculateExchange(1.5, 99)).toBe(0)
    })

    it('calculates the correct exchange amount for valid amounts', () => {
      expect(calculateExchange(1.5, 100)).toBe(150)
    })
  })

  describe('calculateFees', () => {
    it('returns zero if the amount is less than 100', () => {
      expect(calculateFees(99)).toBe(0)
    })

    it('applies the correct fee percentage based on amount tiers', () => {
      const testAmounts = [150, 2000, 25000, 60000]
      const expectedResultFees = testAmounts.map(amount => {
        const tier = FEE_TIERS.find(tier => amount > tier.limit) ?? null
        const feePercentage = tier !== null ? tier.fee : 0.01
        return amount * feePercentage
      })

      testAmounts.forEach((amount, index) => {
        expect(calculateFees(amount)).toBe(expectedResultFees[index])
      })
    })

    FEE_TIERS.forEach((tier, index) => {
      if (index + 1 === FEE_TIERS.length) return

      const { limit, fee } = tier

      it(`applies the correct fee just above the limit for tier ${index + 1}`, () => {
        const amount = limit + 1
        expect(calculateFees(amount)).toBeCloseTo(amount * fee, 2)
      })

      it(`applies the correct fee just below the limit for tier ${index + 1}`, () => {
        const amount = limit - 1 < 100 ? 100 : limit - 1

        const previousTierFee = index > 0 ? FEE_TIERS[index + 1].fee : 0.02
        expect(calculateFees(amount)).toBeCloseTo(amount * previousTierFee, 2)
      })
    })

    it('returns zero for negative amounts', () => {
      expect(calculateFees(-100)).toBe(0)
    })
  })

  describe('calculateFinalAmount', () => {
    // Test with standard inputs
    it('calculates the final amount correctly for standard inputs', () => {
      const amount = 1000
      const rate = 1.5
      const fees = calculateFees(amount)
      const expectedResult = calculateExchange(rate, amount - fees)

      expect(calculateFinalAmount(amount, rate)).toEqual(expectedResult)
    })

    // Test with zero amount
    it('returns zero for zero amount', () => {
      expect(calculateFinalAmount(0, 1.5)).toBe(0)
    })

    // Test with zero rate
    it('returns zero for zero rate', () => {
      const amount = 1000
      expect(calculateFinalAmount(amount, 0)).toBe(0)
    })

    // Test with negative amount
    it('handles negative amount', () => {
      const amount = -500
      const rate = 1.5
      const fees = calculateFees(amount)
      const expectedResult = calculateExchange(rate, amount - fees)

      expect(calculateFinalAmount(amount, rate)).toEqual(expectedResult)
    })

    // Test with negative rate
    it('handles negative rate', () => {
      const amount = 1000
      const rate = -1.5
      const fees = calculateFees(amount)
      const expectedResult = calculateExchange(rate, amount - fees)

      expect(calculateFinalAmount(amount, rate)).toEqual(expectedResult)
    })

    // Add additional tests for other edge cases as needed
  })
})
