import { calculateAssetAllocation, Asset } from "../src/portfolio/portfolioPerformance";

describe("calculateAssetAllocation", () => {
  it("should calculate even allocation correctly", () => {
    const assets: Asset[] = [
      { name: "Stocks", value: 5000 },
      { name: "Bonds", value: 5000 },
    ];
    expect(calculateAssetAllocation(assets)).toEqual([
      { name: "Stocks", percentage: 50 },
      { name: "Bonds", percentage: 50 },
    ]);
  });

  it("should calculate uneven allocation correctly", () => {
    const assets: Asset[] = [
      { name: "Stocks", value: 3000 },
      { name: "Bonds", value: 7000 },
    ];
    expect(calculateAssetAllocation(assets)).toEqual([
      { name: "Stocks", percentage: 30 },
      { name: "Bonds", percentage: 70 },
    ]);
  });

  it("should return empty array for empty assets", () => {
    expect(calculateAssetAllocation([])).toEqual([]);
  });
});
