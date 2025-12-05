import { findLargestHolding, Asset } from "../src/portfolio/portfolioPerformance";

describe("findLargestHolding", () => {
  it("should return the asset with the largest value", () => {
    const assets: Asset[] = [
      { name: "Stocks", value: 5000 },
      { name: "Bonds", value: 3000 },
      { name: "House", value: 10000 },
    ];
    expect(findLargestHolding(assets)?.name).toBe("House");
  });

  it("should return null for empty array", () => {
    expect(findLargestHolding([])).toBeNull();
  });

  it("should return the first asset if values are tied", () => {
    const assets: Asset[] = [
      { name: "Stocks", value: 5000 },
      { name: "Bonds", value: 5000 },
    ];
    expect(findLargestHolding(assets)?.name).toBe("Stocks");
  });
});

