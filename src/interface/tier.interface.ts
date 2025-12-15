export interface TierData {
  tier: number;
  tierName: string;
}

export function createTierData(userRank: number): TierData {
  if (userRank >= 50_000) {
    return { tier: 0, tierName: 'Bronze' };
  }

  if (userRank >= 35_000) {
    return { tier: 1, tierName: 'Silver' };
  }

  if (userRank >= 20_000) {
    return { tier: 2, tierName: 'Gold' };
  }

  if (userRank >= 10_000) {
    return { tier: 3, tierName: 'Platinum' };
  }

  if (userRank >= 1_000) {
    return { tier: 4, tierName: 'Diamond' };
  }

  return { tier: 5, tierName: 'Ruby' };
}