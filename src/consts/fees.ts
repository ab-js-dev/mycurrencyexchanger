export interface Tiers {
  limit: number
  fee: number
}

export const FEE_TIERS: Tiers[] = [
  { limit: 50000, fee: 0.01 },
  { limit: 10000, fee: 0.02 },
  { limit: 1000, fee: 0.03 },
  { limit: 100, fee: 0.05 }
]
