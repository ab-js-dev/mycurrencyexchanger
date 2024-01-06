import { FEE_TIERS } from '@static/fees'

/**
 * Calculates the exchange amount based on the given rate and amount.
 *
 * @param rate - The exchange rate.
 * @param amount - The amount to be exchanged.
 * @returns The calculated exchange amount.
 */
export const calculateExchange = (rate: number, amount: number): number => {
  if (amount < 100) return 0
  const exchange = rate * amount
  return exchange
}

/**
 * Calculates the fees for a given amount.
 * @param amount - The amount for which to calculate the fees.
 * @returns The calculated fees.
 */
export const calculateFees = (amount: number): number => {
  if (amount < 100) return 0
  const defaultFeePercentage = 0.01

  const tier = FEE_TIERS.find(tier => amount > tier.limit) ?? null

  const feePercentage = tier !== null ? tier.fee : defaultFeePercentage

  return amount * feePercentage
}

/**
 * Calculates the final amount after applying fees and exchange rate.
 * @param amount - The initial amount to be exchanged.
 * @param rate - The exchange rate to be applied.
 * @returns The final amount after deducting fees and applying the exchange rate.
 */
export const calculateFinalAmount = (amount: number, rate: number): number => {
  const fees = calculateFees(amount)
  return calculateExchange(rate, amount - fees)
}
