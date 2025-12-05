export interface PortfolioPerformance {
  initialInvestment: number;
  currentValue: number;
  profitOrLoss: number;
  percentageChange: number;
  performanceSummary: string;
}

export function calculatePortfolioPerformance(
    initialInvestment = 10000,
    currentValue = 12000,
): PortfolioPerformance {

    const profitOrLoss = currentValue - initialInvestment;

    const percentageChange = (profitOrLoss / initialInvestment) * 100;

    const performanceSummary =
    [
      [percentageChange > 20, "Gained significantly"],
      [percentageChange > 10, "Gained moderately"],
      [percentageChange < -20, "Lost significantly"],
      [percentageChange < -10, "Lost moderately"],
    ].find(([condition]) => condition)?.[1] as string || "No change";
    
    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}

// Interfaces
export interface Asset {
  name: string;
  value: number;
}
export interface AssetAllocation {
  name: string;
  percentage: number;
}

// Function 1: Find Largest Holding
export function findLargestHolding(assets: Asset[]): Asset | null {
  if (assets.length === 0) return null;
  return assets.reduce((maxAsset, current) => current.value > maxAsset.value ? current : maxAsset, assets[0]);
}

// Function 2: Asset Allocation Percentage
export function calculateAssetAllocation(assets: Asset[]): AssetAllocation[] {
  const total = assets.reduce((sum, asset) => sum + asset.value, 0);
  if (total === 0) return [];
  return assets.map(asset => ({
    name: asset.name,
    percentage: parseFloat(((asset.value / total) * 100).toFixed(2)),
  }));
}

